var fs    = Npm.require('fs');
var path  = Npm.require('path');

// this hack allows me to figure out where the package location is
// i know that it is not pretty... at all, but I found no other way.
// packageLocation is defined by package.location.js
Plugin.registerSourceHandler('location.js', {}, function (compileStep) {
  packageLocation = path.dirname(compileStep._fullInputPath);
  var fileContent = 'packageLocation = "' + packageLocation + '"';
  fs.writeFileSync(compileStep._fullInputPath, fileContent);
});

var createLessFile = function (path, content) {
  fs.writeFileSync(path, content.join('\n'), { encoding: 'utf8' });
};

var handler = function (compileStep, isLiterate) {
  var jsonPath = compileStep._fullInputPath;

  // package location from the global variable
  if (packageLocation == null) {
    compileStep.error({
      message: "failed to get package location, a restart of meteor might help",
      sourcePath: compileStep.inputPath
    });
    return;
  }

  // the path from the json file to this package
  var relativePackagePath = path.relative(path.dirname(jsonPath), packageLocation);
  
  // read the configuration of the project
  var userConfiguration = compileStep.read().toString('utf8');
  
  // if empty (and only then) write distributed configuration
  if (userConfiguration === '') {
    userConfiguration = distributedConfiguration;
    fs.writeFileSync(jsonPath, userConfiguration);
  }
  
  // parse configuration
  try {
    userConfiguration = JSON.parse(userConfiguration);
  } catch (e) {
    compileStep.error({
      message: e.message,
      sourcePath: compileStep.inputPath
    });
    return;
  }
  
  // configuration
  var moduleConfiguration = userConfiguration.modules || {};
  //var moduleDefinitions = moduleDefinitions; // from modules.js
  
  // these variables contain the files that need to be included
  var js = {}; // set of required js files
  var less = {}; // set of required less files
  
  // read module configuration to find out which js/less files are needed
  var allModulesOk = _.every(moduleConfiguration, function (enabled, module) {
    
    var moduleDefinition = moduleDefinitions[module];
    if (moduleDefinition == null) {
      compileStep.error({
        message: "The module '" + module + "' does not exist.",
        sourcePath: compileStep.inputPath
      });
      return false; // break
    }
    
    if (! enabled) {
      return true; // continue
    }
    
    _.each(moduleDefinition.less || [], function (file) {
      less[file] = file;
    });
    _.each(moduleDefinition.js || [], function (file) {
      js[file] = file;
    });
    
    return true;
  });
  
  if (! allModulesOk) {
    return;
  }
  
  // add javascripts
  for (var jsPath in js) {
    var file = fs.readFileSync(path.join(basePath, jsPath), { encoding: 'utf8' });
    compileStep.addJavaScript({
      path: jsPath,
      data: file,
      sourcePath: jsPath,
      bare: true // they are already wrapped (tiny optimisation)
    });
  }
  
  // filenames
  var variableLessFile = jsonPath.replace(/json$/i, 'variables.import.less');
  var overwriteLessFile = jsonPath.replace(/json$/i, 'import.less');
  var outputLessFile = jsonPath.replace(/json$/i, 'bootstrap.less');
  
  // create file where bootstrap variables are included
  createLessFile(variableLessFile, [
    "// THIS FILE IS GENERATED, DO NOT MODIFY IF!",
    "// Here are all bootstrap imports, that do not contain any output.",
    "// This includes variables and mixins.",
    "//",
    "// If you want to modify variables look into: " + overwriteLessFile,
    "// I also recommend that you import the overwrite file into your less files",
    "// That way you can access bootstraps helper mixins and variables",
    '',
    '@import "' + path.join(relativePackagePath, 'bootstrap/less/variables.less') + '";',
    '@import "' + path.join(relativePackagePath, 'bootstrap/less/mixins.less') + '";'//,
    //'@icon-font-path: "' + packageLocation + '/bootstrap/fonts/";', // TODO figure frontend path out
  ]);
  
  // create the file that can be modified
  if (! fs.existsSync(overwriteLessFile)) {
    createLessFile(overwriteLessFile, [
      "// This File is for you to modify!",
      "// It won't be overwritten as long as it exists.",
      "// You may include this file into your less files to benefit from",
      "// mixins and variables that bootstrap provides.",
      '',
      '@import "' + path.basename(variableLessFile) + '";',
      '',
      "// But now it's your turn:\n\n"
    ]);
  }
  
  // create the file that finally includes bootstrap
  var bootstrapContent = [
    "// THIS FILE IS GENERATED, DO NOT MODIFY IT!",
    "// It includes the bootstrap modules configured in " + compileStep.inputPath + ".",
    "// You may need to use 'meteor add less' if the styles are not loaded.",
    '',
    '@import "' + path.basename(overwriteLessFile) + '";'
  ];
  _.each(less, function (lessPath) {
    bootstrapContent.push('@import "' + path.join(relativePackagePath, lessPath) + '";');
  });
  createLessFile(outputLessFile, bootstrapContent);
};

Plugin.registerSourceHandler('bootstrap.json', {archMatching: 'web'}, handler);

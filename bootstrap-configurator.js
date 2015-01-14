var fs   = Npm.require('fs');
var path = Npm.require('path');
var less = Npm.require('less');

var createFile = function (path, content) {
  fs.writeFileSync(path, content.join('\n'), { encoding: 'utf8' });
}

var getAsset = function (filename) {
  return BootstrapData(filename);
};

var getLessContent = function (filename) {
  var content = getAsset(filename);
  return '\n\n// @import "' + filename + '"\n'
    + content.replace(/@import\s*["']([^"]+)["'];?/g, function (statement, importFile) {
    return getLessContent(path.join(path.dirname(filename), importFile));
  });
};

var handler = function (compileStep, isLiterate) {
  var jsonPath = compileStep._fullInputPath;

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
  
  // these variables contain the files that need to be included
  var jsFiles = {}; // set of required js files
  var lessFiles = {}; // set of required less files
  
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
      lessFiles[file] = file;
    });
    _.each(moduleDefinition.js || [], function (file) {
      jsFiles[file] = file;
    });
    
    return true;
  });
  
  if (! allModulesOk) {
    return;
  }
  
  // add javascripts
  for (var jsPath in jsFiles) {
    var file = getAsset(jsPath);
    compileStep.addJavaScript({
      path: jsPath,
      data: file,
      sourcePath: jsPath,
      bare: true // they are already wrapped (tiny optimisation)
    });
  }
  
  // file extensions
  var mixinsLessFile = jsonPath.replace(/json$/i, 'mixins.import.less')
  var variablesLessFile = jsonPath.replace(/json$/i, 'variables.import.less');
  var outputCssFile = jsonPath.replace(/json$/i, 'import.less');

  createFile(mixinsLessFile, [
    "// THIS FILE IS GENERATED, DO NOT MODIFY IT!",
    "// These are the mixins bootstrap provides",
    "// They are included here so you can use them in your less files too,",
    "// However: you should @import \"" + path.basename(variablesLessFile) + "\" instead of this",
    getLessContent('bootstrap/less/mixins.less')
  ]);
   
  // create the file that can be modified
  if (! fs.existsSync(variablesLessFile)) {
    createFile(variablesLessFile, [
      "// This File is for you to modify!",
      "// It won't be overwritten as long as it exists.",
      "// You may include this file into your less files to benefit from",
      "// mixins and variables that bootstrap provides.",
      '',
      '@import "' + path.basename(mixinsLessFile) + '";',
      getLessContent('bootstrap/less/variables.less')
    ]);
  }
  
  // create the Less file that includes the specified modules
  var bootstrapLess = [
    '@import "' + path.basename(variablesLessFile) + '";',
    '@icon-font-path: "/packages/nemo64_bootstrap-data/bootstrap/fonts/";'
  ];
  _.each(lessFiles, function (lessPath) {
    bootstrapLess.push(getLessContent('' + lessPath));
  });

  bootstrapLess = bootstrapLess.join('\n'); // Turn the array into a string

  // Compile the created Less file into CSS
  var lessOptions = {
    syncImport: true,
    paths: [path.dirname(compileStep._fullInputPath)] // for @import
  }

  less.render(bootstrapLess, lessOptions, function(error, output) {
    if (error) {
      compileStep.error({
        message: "Error generating the Bootstrap css file, " + error,
        sourcePath: compileStep.inputPath
      });
    } else {
      createFile(outputCssFile, [
        "/*",
        " * This file is auto generated according to the modules specified in ", 
        " * " +  compileStep.inputPath + " and the variables ", 
        " * in " + path.basename(variablesLessFile),
        " * Any modifications will be overwritten!",
        " *",
        " * To use Bootstrap styles in a Less file import it with",
        " *'@import (reference) \"" + path.basename(outputCssFile) + "\"'",
        " * and then include the desired styles with extend, e.g. \"button:extend(.btn)\"",
        " * This ensures that only the needed selectors will be copied in.",
        " * Some styles will need the additional 'all' keyword when extended.",
        " * e.g. \"input:extend(.form-control all)\"",
        " *",
        " * If you don't need normalize.css or include it elsewhere, and don't use",
        " * Bootstrap classes in your HTML markup then you won't need to ever import",
        " * this file without the (reference) keyword",
        " */",
        "",
        output.css
      ]);
    }
  });
  
};

Plugin.registerSourceHandler('bootstrap.json', {archMatching: 'web'}, handler);

// Register the bootstrap variables as a dependency so that the css will be re-built
Plugin.registerSourceHandler("bootstrap.variables.import.less", {archMatching: 'web'}, function () {
  // Do nothing
});

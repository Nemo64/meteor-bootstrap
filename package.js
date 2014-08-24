Package.describe({
  summary: "Highly configurable bootstrap integration.",
  version: "1.0.0",
  git: "https://github.com/Nemo64/meteor-bootstrap"
});


Package._transitional_registerBuildPlugin({
  name: 'bootstrap-configurator',
  use: ['underscore'],
  sources: [
    'module-definitions.js',
    'distributed-configuration.js',
    'package.location.js',
    'bootstrap-configurator.js'
  ],
  npmDependencies: {}
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR-CORE@0.9.0-atm");
  api.use('jquery', 'client');
  api.use('less', 'client');
  
  // location hack
  api.add_files('package.location.js', 'server');

  // fonts
  api.add_files('bootstrap/fonts/glyphicons-halflings-regular.eot', 'client');
  api.add_files('bootstrap/fonts/glyphicons-halflings-regular.svg', 'client');
  api.add_files('bootstrap/fonts/glyphicons-halflings-regular.ttf', 'client'); 
  api.add_files('bootstrap/fonts/glyphicons-halflings-regular.woff', 'client');
});

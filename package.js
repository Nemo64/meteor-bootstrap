Package.describe({
  summary: "Highly customizable bootstrap integration.",
  version: "0.2.0",
  git: "https://github.com/Nemo64/meteor-bootstrap"
});

Package._transitional_registerBuildPlugin({
  name: 'bootstrap-configurator',
  use: [],
  sources: ['bootstrap-configurator.js'],
  npmDependencies: {}
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR-CORE@0.9.0-atm");
  api.use('jquery', 'client');
  api.use('less', 'client');
  
  // fonts
  api.add_files('bootstrap/fonts/glyphicons-halflings-regular.eot', 'client');
  api.add_files('bootstrap/fonts/glyphicons-halflings-regular.svg', 'client');
  api.add_files('bootstrap/fonts/glyphicons-halflings-regular.ttf', 'client'); 
  api.add_files('bootstrap/fonts/glyphicons-halflings-regular.woff', 'client');
});

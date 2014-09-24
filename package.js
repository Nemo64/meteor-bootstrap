Package.describe({
  name: "nemo64:bootstrap",
  summary: "Highly configurable bootstrap integration.",
  version: "3.2.2-rc1",
  git: "https://github.com/Nemo64/meteor-bootstrap"
});


Package._transitional_registerBuildPlugin({
  name: 'bootstrap-configurator',
  use: [
    'underscore',
    'bootstrap-data'
  ],
  sources: [
    'module-definitions.js',
    'distributed-configuration.js',
    'bootstrap-configurator.js'
  ],
  npmDependencies: {}
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.2.2");
  api.use(['jquery'], 'client');
  
  api.add_files([
    'packages/bootstrap-data/bootstrap/fonts/glyphicons-halflings-regular.eot',
    'packages/bootstrap-data/bootstrap/fonts/glyphicons-halflings-regular.svg',
    'packages/bootstrap-data/bootstrap/fonts/glyphicons-halflings-regular.ttf',
    'packages/bootstrap-data/bootstrap/fonts/glyphicons-halflings-regular.woff',
  ], 'client');
});

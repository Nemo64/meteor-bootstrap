Package.describe({
  name: "nemo64:bootstrap",
  summary: "Highly configurable bootstrap integration.",
  version: "3.3.0",
  git: "https://github.com/Nemo64/meteor-bootstrap"
});


Package._transitional_registerBuildPlugin({
  name: 'bootstrap-configurator',
  use: [
    'underscore',
    'nemo64:bootstrap-data@3.3.0_1'
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
  api.use([
    'jquery',
    'nemo64:bootstrap-data@3.3.0_1'
  ], 'client');
});

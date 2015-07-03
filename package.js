Package.describe({
  name: "nemo64:bootstrap",
  summary: "Highly configurable bootstrap integration.",
  version: "3.3.5",
  git: "https://github.com/Nemo64/meteor-bootstrap"
});

var pluginOptions = {
  name: 'bootstrap-configurator',
  use: [
    'underscore@1.0.2',
    'nemo64:bootstrap-data@3.3.5'
  ],
  sources: [
    'module-definitions.js',
    'distributed-configuration.js',
    'bootstrap-configurator.js'
  ],
  npmDependencies: {}
};

Package._transitional_registerBuildPlugin(pluginOptions);

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.2.2");
  api.use([
    'jquery',
    'nemo64:bootstrap-data@3.3.5'
  ], 'client');
});

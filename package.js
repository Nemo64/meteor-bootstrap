Package.describe({
  name: "grove:bootstrap",
  summary: "Highly configurable bootstrap integration.",
  version: "3.3.1_1",
  git: "https://github.com/grovelabs/meteor-bootstrap"
});

Package.registerBuildPlugin({
  name: 'bootstrap-configurator',
  use: [
    'underscore@1.0.2',
    'nemo64:bootstrap-data@3.3.1_1'
  ],
  sources: [
    'module-definitions.js',
    'distributed-configuration.js',
    'bootstrap-configurator.js'
  ],
  npmDependencies: {
    "less": "2.2.0"
  }
});
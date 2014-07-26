Package.describe({ summary: 'Bootstrap 3, with Less files.' });

Package._transitional_registerBuildPlugin({
  name: 'bootstrap-configurator',
  use: [],
  sources: ['bootstrap-configurator.js'],
  npmDependencies: {}
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.use('less', 'client');
  
  // fonts
  api.add_files('bootstrap/fonts/glyphicons-halflings-regular.eot', 'client');
  api.add_files('bootstrap/fonts/glyphicons-halflings-regular.svg', 'client');
  api.add_files('bootstrap/fonts/glyphicons-halflings-regular.ttf', 'client'); 
  api.add_files('bootstrap/fonts/glyphicons-halflings-regular.woff', 'client');
});

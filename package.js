Package.describe({
    summary: "Bootstrap 3, with Less files."
});

Package.on_use(function (api, where) {
    api.use('jquery', 'client');
    api.use('less','client');
    api.add_files('lib/js/bootstrap.js', 'client');
});
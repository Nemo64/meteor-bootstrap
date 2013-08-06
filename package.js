Package.describe({
summary: "Bootstrap 3, with Less files."
});

Package.on_use(function (api, where) {
    api.add_files('lib/js/bootstrap.js', 'client');
});
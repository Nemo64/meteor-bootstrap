Package.describe({
    summary: "Bootstrap 3, with Less files (v3.0.3)."
});

Package.on_use(function (api) {
    api.use('jquery', 'client');
    api.use('less','client');
    api.add_files('lib/js/affix.js', 'client');
    api.add_files('lib/js/alert.js', 'client');
    api.add_files('lib/js/button.js', 'client');
    api.add_files('lib/js/carousel.js', 'client');
    api.add_files('lib/js/collapse.js', 'client');
    api.add_files('lib/js/dropdown.js', 'client');
    api.add_files('lib/js/modal.js', 'client');
    api.add_files('lib/js/popover.js', 'client');
    api.add_files('lib/js/scrollspy.js', 'client');
    api.add_files('lib/js/tab.js', 'client');
    api.add_files('lib/js/tooltip.js', 'client');
    api.add_files('lib/js/transition.js', 'client');

    // fonts
    api.add_files('lib/fonts/glyphicons-halflings-regular.eot', 'client');
    api.add_files('lib/fonts/glyphicons-halflings-regular.ttf', 'client');
    api.add_files('lib/fonts/glyphicons-halflings-regular.svg', 'client');
    api.add_files('lib/fonts/glyphicons-halflings-regular.woff', 'client');
});

# Bootstrap 3 with Less
## Twitter's Bootstrap 3 Packaged for Meteor, using Less

Bootstrap 3, with all Less files for easy style customization.

## How to install

1. `npm install -g meteorite` (if not already installed)
2. `mrt add less`
3. `mrt add bootstrap3-less`
4. Create a .less file anywhere in your project to be served to the client and add `@import "/packages/bootstrap3-less/bootstrap.import.less";`
5. `cd public && ln -s ../packages/bootstrap3-less/lib/fonts ./`

## Customized Usage

You can copy the `bootstrap.import.less` file into your project and overwrite the variables like this:
```css
// Application Overrides (config)
// ---------------------------------------
// (Here you can override any variables defined in the default set above)

@brand-primary: pink; // needs a fabulous color ;)
```
Then you need to rename it into `bootstrap.less` and you can start using your custom build ;)

## Advanced Usage

Moreover you can take advantage of the mixins that bootstrap provides if you put 2 files into your project.

Create one `variables.import.less` file which should only contain variables and mixins so you can import it into every file of you project for easy access.
```css
// defines where the package is
@bootstrap3-less-root: "/packages/bootstrap3-less";

// Import Bootstrap Config Defaults
// ---------------------------------------
// (you need these first, to get the default setup for bootstrap)


@import "@{bootstrap3-less-root}/lib/less/variables.import.less";
@import "@{bootstrap3-less-root}/lib/less/mixins.import.less";

// Application Overrides (config)
// ---------------------------------------
// (Here you can override any variables defined in the default set above)

@icon-font-path: "/public/fonts/"; // this is reqired or else the fonts won't work
```

To include the rest of bootstrap, create a `bootstrap.less` file where you `@import` all files that actually contain the styles. You may remove or comment out lines that you don't need to save bandwidth and performance.
```css
@import "variables.import.less"
// because of the order less handles it's imports this variable needs to be redefined
@bootstrap3-less-root: "/packages/bootstrap3-less";

// Import Bootstrap
// ---------------------------------------
// (This is the full set of package files, include only what you need)

// Reset
@import "@{bootstrap3-less-root}/lib/less/normalize.import.less";
@import "@{bootstrap3-less-root}/lib/less/print.import.less";

// Core CSS
@import "@{bootstrap3-less-root}/lib/less/scaffolding.import.less";
@import "@{bootstrap3-less-root}/lib/less/type.import.less";
@import "@{bootstrap3-less-root}/lib/less/code.import.less";
@import "@{bootstrap3-less-root}/lib/less/grid.import.less";
@import "@{bootstrap3-less-root}/lib/less/tables.import.less";
@import "@{bootstrap3-less-root}/lib/less/forms.import.less";
@import "@{bootstrap3-less-root}/lib/less/buttons.import.less";

// Components
@import "@{bootstrap3-less-root}/lib/less/component-animations.import.less";
@import "@{bootstrap3-less-root}/lib/less/glyphicons.import.less";
@import "@{bootstrap3-less-root}/lib/less/dropdowns.import.less";
@import "@{bootstrap3-less-root}/lib/less/button-groups.import.less";
@import "@{bootstrap3-less-root}/lib/less/input-groups.import.less";
@import "@{bootstrap3-less-root}/lib/less/navs.import.less";
@import "@{bootstrap3-less-root}/lib/less/navbar.import.less";
@import "@{bootstrap3-less-root}/lib/less/breadcrumbs.import.less";
@import "@{bootstrap3-less-root}/lib/less/pagination.import.less";
@import "@{bootstrap3-less-root}/lib/less/pager.import.less";
@import "@{bootstrap3-less-root}/lib/less/labels.import.less";
@import "@{bootstrap3-less-root}/lib/less/badges.import.less";
@import "@{bootstrap3-less-root}/lib/less/jumbotron.import.less";
@import "@{bootstrap3-less-root}/lib/less/thumbnails.import.less";
@import "@{bootstrap3-less-root}/lib/less/alerts.import.less";
@import "@{bootstrap3-less-root}/lib/less/progress-bars.import.less";
@import "@{bootstrap3-less-root}/lib/less/media.import.less";
@import "@{bootstrap3-less-root}/lib/less/list-group.import.less";
@import "@{bootstrap3-less-root}/lib/less/panels.import.less";
@import "@{bootstrap3-less-root}/lib/less/wells.import.less";
@import "@{bootstrap3-less-root}/lib/less/close.import.less";

// Components w/ JavaScript
@import "@{bootstrap3-less-root}/lib/less/modals.import.less";
@import "@{bootstrap3-less-root}/lib/less/tooltip.import.less";
@import "@{bootstrap3-less-root}/lib/less/popovers.import.less";
@import "@{bootstrap3-less-root}/lib/less/carousel.import.less";

// Utility classes
@import "@{bootstrap3-less-root}/lib/less/utilities.import.less";
@import "@{bootstrap3-less-root}/lib/less/responsive-utilities.import.less";
```

## License

This package is licensed with the MIT license. [Twitter's Bootstrap License](https://github.com/twbs/bootstrap).

## Contributors
- [Emmanuel Prochasson](https://github.com/eprochasson/)
- [Alan Blount](https://github.com/zeroasterisk/)
- [Marco Pfeiffer](https://github.com/Nemo64)
- [Mikael Korpela](https://github.com/simison)

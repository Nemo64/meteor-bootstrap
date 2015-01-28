# Semantic Bootstrap for Meteor
This package integrates Bootstrap into Meteor and lets you configure what parts you need. In addition, it's built so that you can put your Bootstrap in your Less stylesheets instead of your HTML. It's kind of like an automatic Bootstrap theme generator.


## Installation

1. execute `meteor add nemo64:bootstrap less`
2. create an empty `custom.bootstrap.json` file somewhere in your project. (`/client/lib/custom.bootstrap.json` for example)
3. start meteor and then edit the file you just created (see [custom.bootstrap.json](#custom.bootstrap.json)).
4. (optional) edit `custom.bootstrap.import.less` which now appeared next to the json file

## The Generated Files
### custom.bootstrap.json

This file configures which Bootstrap modules will be included in the project. These settings control whether the Stylesheet and Javascript (if there is any for the module) is included in the application. Set those you like to `true`!

If the file is empty, it will be filled for with the following content:

```JSON
{ 
  "modules": {
    "normalize":            true,
    "print":                false,

    "scaffolding":          false,
    "type":                 false,
    "code":                 false,
    "grid":                 false,
    "tables":               false,
    "forms":                false,
    "buttons":              false,

    "glyphicons":           false,
    "button-groups":        false,
    "input-groups":         false,
    "navs":                 false,
    "navbar":               false,
    "breadcrumbs":          false,
    "pagination":           false,
    "pager":                false,
    "labels":               false,
    "badges":               false,
    "jumbotron":            false,
    "thumbnails":           false,
    "alerts":               false,
    "progress-bars":        false,
    "media":                false,
    "list-group":           false,
    "panels":               false,
    "wells":                false,
    "close":                false,

    "component-animations": false,
    "dropdowns":            false,
    "modals":               false,
    "tooltip":              false,
    "popovers":             false,
    "carousel":             false,
    
    "affix":                false,
    "alert":                false,
    "button":               false,
    "collapse":             false,
    "scrollspy":            false,
    "tab":                  false,
    "transition":           false,

    "utilities":            false,
    "responsive-utilities": false
  }
}
```

### custom.bootstrap.variables.import.less
This file is auto generated once and is then never overwritten. It includes the variables upon which Bootstrap is built. Use these your own stylesheets with `@import "path/in/your/project/custom.bootstrap.variables.import.less"`

### custom.bootstrap.mixins.import.less
This file is auto generated and any changes will be overwritten. It includes the Less mixins that Bootstrap uses to compile its CSS. Use these your own stylesheets with `@import "path/in/your/project/custom.bootstrap.mixins.import.less"`

### custom.bootstrap.import.less
This is the compiled Bootstrap CSS, built according to the specified modules and variables in `custom.bootstrap.variables.import.less`. Although it has a `.import.less` suffix, it's just vanilla CSS. The suffix is there so you can explicitly control when it is loaded in. Reference these styles in your own stylesheet with `@import (reference) "path/in/your/project/custom.bootstrap.import.less"`.

Be sure to include the `(reference)` keyword when importing so that the styles are processed but not copied into the stylesheet (unless you want them copied). If you're including normalize.css or using Bootstrap classes in your HTML you'll want to `import` without the `(reference)` one time somewhere in your application.

## Recommended Usage
Instead of putting Bootstrap in your markup put it in your stylesheets! HTML is where you say what things are, not how they should look. This means that instead of doing something like

```html
<button id="myBtn" class="btn btn-default btn-primary">Click me</button>
```

You can instead do

```html
<button id="myBtn">Click me</button>
```
```less
@import "custom.bootstrap.variables.import.less";
@import (reference) "custom.bootstrap.import.less";

#myBtn {
  &:extend(.btn, .btn-default);
  background-color: @brand-primary;
}
```

Some Bootstrap classes will require an additional `all` keyword when `extend`ing. For example:

```html
<input id="emailInput" placeholder="Enter your email">
```
```less
@import (reference) "custom.bootstrap.import.less";

input {
  &:extend(.form-control all);
}
```
This is because there are many pseudo-classes that `.form-control` has associated with it, but the standard `extend` only finds exact matches. To match those pseudo-classes as well, you need to use the `all` keyword.

### A quirk in `extend`ing
Using `extend` to include the Bootstrap styles in your stylesheets copies in the styles rather than [adding the selector to the properties you wish to use](http://lesscss.org/features/#extend-feature-reducing-css-size). This is a limitation of Meteor since all of the Less files are compiled independently. You can get around this if you have one file that has `@import (reference) custom.bootstrap.import.less` first and then explicitly imports every single stylesheet that will depend on Bootstrap (which will all need to end in `.import.less`). All of those stylesheets will then be compiled in the same step.

## License

This package is licensed with the MIT license.
Also, look at the [Bootstrap license](https://github.com/twbs/bootstrap/blob/v3.2.0/LICENSE).

## Origin

This package is based on and inspired by the [bootstrap3-less](https://github.com/simison/bootstrap3-less) package. I created a new repository because it takes a completely different approach now which is also incompatible.

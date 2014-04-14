# Bootstrap 3 with Less
## Twitter's Bootstrap 3 Packaged for Meteor, using Less

Bootstrap 3, with all Less files for easy style customization.

## How to install

1. `npm install -g meteorite` (if not already installed)
2. `mrt add less`
3. `mrt add bootstrap3-less`
4. create a `costum.bootstrap.json` file in your project (see below)

### costum.bootstrap.json
This file is to configure which bootstrap modules you want. Set those you like to `true`!
```JSON
{"modules": {
  "normalize": true,
  "print": false,

  "scaffolding": false,
  "type": false,
  "code": false,
  "grid": false,
  "tables": false,
  "forms": false,
  "buttons": false,

  "glyphicons": false,
  "button-groups": false,
  "input-groups": false,
  "navs": false,
  "navbar": false,
  "breadcrumbs": false,
  "pagination": false,
  "pager": false,
  "labels": false,
  "badges": false,
  "jumbotron": false,
  "thumbnails": false,
  "alerts": false,
  "progress-bars": false,
  "media": false,
  "list-group": false,
  "panels": false,
  "wells": false,
  "close": false,

  "component-animations": false,
  "dropdowns": false,
  "modals": false,
  "tooltip": false,
  "popovers": false,
  "carousel": false,
  
  "affix": false,
  "alert": false,
  "button": false,
  "collapse": false,
  "scrollspy": false,
  "tab": false,
  "transition": false,

  "utilities": false,
  "responsive-utilities": false
}}
```
As soon as you create that file 2 further files will appear in your project. One is called `costum.bootstrap.import.less` and is for you to overwrite variables. The other (`costum.bootstrap.less`) will then be your bootstrap! Have fun ;)

## License

This package is licensed with the MIT license. [Twitter's Bootstrap License](https://github.com/twbs/bootstrap).

## Contributors
- [Emmanuel Prochasson](https://github.com/eprochasson/)
- [Alan Blount](https://github.com/zeroasterisk/)
- [Marco Pfeiffer](https://github.com/Nemo64)
- [Mikael Korpela](https://github.com/simison)

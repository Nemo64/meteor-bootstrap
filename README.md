# Bootstrap 3 with Less
## Twitter's Bootstrap3 Packaged for Meteor, using Less

Bootstrap 3, with all LESS files for easy style customization.

## How to install

1. `npm install -g meteorite` (if not already installed)
2. `mrt add less`
3. `mrt add bootstrap3-less`
4. Create a .less file anywhere in your project to be served to the client and add `@import "/packages/bootstrap3-less/bootstrap.importless";`

## Meteorite version < pre-0.6.0

Previous version of Meteorite stored the packages in .meteor/meteorite/, in which case you need to change the `@import` path to `@import "/.meteor/meteorite/packages/bootstrap3-less/bootstrap.importless";`

## License

This package is licensed with the MIT license. [Twitter's Bootstrap License](https://github.com/twitter/bootstrap).

## Contributors
- [Emmanuel Prochasson](https://github.com/eprochasson/)
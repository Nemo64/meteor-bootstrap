# Bootstrap 3 with Less
## Twitter's Bootstrap3 Packaged for Meteor, using Less

Bootstrap 3, with all LESS files for easy style customization.

## How to install

1. `npm install -g meteorite` (if not already installed)
2. `mrt add less`
3. `mrt add bootstrap3-less`
4. Create a .less file anywhere in your project to be served to the client and add `@import "/packages/bootstrap3-less/bootstrap.lessimport";`
5. `cd public && ln -s ../packages/bootstrap3-less/lib/fonts ./`

## Meteorite version < pre-0.6.0

Previous version of Meteorite stored the packages in .meteor/meteorite/, in which case you need to change the `@import` path to `@import "/.meteor/meteorite/packages/bootstrap3-less/bootstrap.lessimport";`

## Advanced Usage

https://github.com/zeroasterisk/bootstrap3-less/wiki/How-To-Use-Bootstrap3-less-in-Meteor

## License

This package is licensed with the MIT license. [Twitter's Bootstrap License](https://github.com/twbs/bootstrap).

## Contributors
- [Emmanuel Prochasson](https://github.com/eprochasson/)
- [Alan Blount](https://github.com/zeroasterisk/)

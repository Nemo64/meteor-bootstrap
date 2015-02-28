Bootstrap for meteor
====================

This package integrates bootstrap into meteor and lets you configure what parts you need.

How to install
--------------

1. execute `meteor add nemo64:bootstrap less`
2. create an empty `custom.bootstrap.json` file somewhere in your project. (`/client/lib/custom.bootstrap.json` for example)
3. start meteor and then edit the file you just created (see [custom.bootstrap.json](#custom.bootstrap.json)).
4. (optional) edit `custom.bootstrap.import.less` which now appeared next to the json file

custom.bootstrap.json
---------------------
This file is to configure which bootstrap parts you need in your project. Set those you like to `true`!
If the file is empty, it will be filled for with the following content:
```JSON
{"modules": {
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
}}
```

Contribution
-------

Contributions are always welcome. I'm also searching for collaborators becuase I'm currently not actively deveolping with meteor. If you area interested, write me at git@marco.zone

License
-------

This package is licensed with the MIT license.
Also, look at the [Bootstrap license](https://github.com/twbs/bootstrap/blob/v3.2.0/LICENSE).

Origin
------

This package is based on and inspired by the [bootstrap3-less](https://github.com/simison/bootstrap3-less) package. I created a new repository because it takes a completely different approach now which is also incompatible.

#*Meteor Compatibility* 
`nemo64:bootstrap` does not work with Meteor 1.2+. [`huttonr/bootstrap3`](https://github.com/huttonr/bootstrap3) is a another similar package that works also with 1.2.

Bootstrap for Meteor
====================

This package integrates bootstrap into meteor and lets you configure what parts you need.

How to install
--------------

1. execute `meteor add nemo64:bootstrap less`
2. create an empty `custom.bootstrap.json` file somewhere in your project. (`/client/lib/custom.bootstrap.json` for example)
3. start meteor and then edit the file you just created (see [custom.bootstrap.json](#custombootstrapjson)).
4. (optional) edit `custom.bootstrap.import.less` which now appeared next to the json file

`custom.bootstrap.json`
---------------------
This file is to configure which bootstrap parts you need in your project. Set those you like to `true`!
If the file is empty, it will be filled for with the following content:

```JSON
{
  "modules" : {
    "normalize"            : true,
    "print"                : false,
    "glyphicons"           : false,

    "scaffolding"          : false,
    "type"                 : false,
    "code"                 : false,
    "grid"                 : false,
    "tables"               : false,
    "forms"                : false,
    "buttons"              : false,

    "component-animations" : false,
    "dropdowns"            : false,
    "button-groups"        : false,
    "input-groups"         : false,
    "navs"                 : false,
    "navbar"               : false,
    "breadcrumbs"          : false,
    "pagination"           : false,
    "pager"                : false,
    "labels"               : false,

    "badges"               : false,
    "jumbotron"            : false,
    "thumbnails"           : false,
    "alerts"               : false,
    "progress-bars"        : false,
    "media"                : false,
    "list-group"           : false,
    "panels"               : false,
    "responsive-embed"     : false,
    "wells"                : false,
    "close"                : false,

    "modals"               : false,
    "tooltip"              : false,
    "popovers"             : false,
    "carousel"             : false,

    "affix"                : false,
    "alert"                : false,
    "button"               : false,
    "collapse"             : false,
    "scrollspy"            : false,
    "tab"                  : false,
    "transition"           : false,

    "utilities"            : false,
    "responsive-utilities" : false
  }
}
```

Upgrading
---------

After upgrading using `meteor update`, you may get an error stating:

```
While building the application:
   client/lib/custom.bootstrap.less:1629:18: Less compiler error: ...
```

This is due to the upstream Bootstrap library introducing LESS variables that your project is not aware of. The quickest fix is to execute the following script from within your project:

```
curl https://raw.githubusercontent.com/Nemo64/meteor-bootstrap/master/upgrade/upgrade-3.3.4-3.3.5.sh | /bin/bash
```

Alternately, you can manually apply this [patch](https://github.com/Nemo64/meteor-bootstrap/blob/master/upgrade/3.3.5-upgrade.patch) to `custom.bootstrap.less`: 


Contribution
-------

Contributions are always welcome. I'm also searching for collaborators because I'm currently not actively deveolping with meteor. If you area interested, write me at git@marco.zone

License
-------

This package is licensed with the MIT license.
Also, look at the [Bootstrap license](https://github.com/twbs/bootstrap/blob/v3.2.0/LICENSE).

Origin
------

This package is based on and inspired by the [bootstrap3-less](https://github.com/simison/bootstrap3-less) package. I created a new repository because it takes a completely different approach now which is also incompatible.

### 3.3.5_1
######4 July 2015

Republish so Readme updates are available on Atmosphere.

### 3.3.5
######3 July 2015

Update Bootstrap to latest upstream version 3.3.5.

- e5c2607 Update README.md
- 0292d8e Bump version to 3.3.5
- 618b33c Create tool for fixing upgrade error

### 3.3.4_2
######11 April 2015

Adjust source of the auto-generated `custom.bootstrap.json` file, which previously
could cause errors due to the compnent load sequence diverging from the upstream
Bootstrap.

- 1d60760 bump version
- a1ce591 fix bootstrap load sequence
- 324bb63 Update README.md


### 3.3.4_1
######30 March 2015

Update Bootstrap to latest upstream version 3.3.4.

**Note:** Upstream changes in Bootstrap from 3.3.1 to 3.3.4 cause Meteor to error
on parsing non-existant LESS variables. See https://github.com/Nemo64/meteor-bootstrap/issues/42

- 1340a69 Merge pull request #41 from emgee3/master
- 3f6c950 bump version
- 14351ea Update README.md


### Previously

- c950760 (tag: v3.1.1) adjustments for new version
- d746f23 Merge pull request #26 from cwohlman/master
- c69f1ad Bump versions
- ea5ae2a Merge pull request #19 from ericpedia/master
- c7fa969 Fix tiny typos in readme
- 6aac174 (tag: v3.3.0_1) removed .gitignore file as it sometimes causes problems
- 539e16e (tag: v3.3.0) updated version and added missing responsive-embed module
- 3324e16 added basic test page
- 4db1fbf bumped versions
- b8f3e0e Merge branch 'master' of github.com:Nemo64/meteor-bootstrap
- b39aa6c (tag: v3.2.3) now fixed version
- eab316d set versions
- d95599b removed package from here
- 8117a85 exported package
- 9b388cf cleanup after package splitting
- f436b87 package splitting
- 2731bd9 Merge branch 'master' of github.com:Nemo64/meteor-bootstrap
- 27cb90a Update README.md
- f43210e bump version
- dd99b23 Merge pull request #7 from tanis2000/master
- 64bfc64 Fixes https://github.com/Nemo64/meteor-bootstrap/issues/5
- c3b026c Merge branch 'master' of github.com:Nemo64/meteor-bootstrap
- 7c7a47c Update README.md
- 9fbc6e1 Update README.md
- 6a9cef7 Update README.md
- 08d1d1e Update README.md
- 31dea8f (tag: v3.2.0-1) fixed colon
- bcc8b17 fixed simicolon on in the end, fixes #1
- 5329055 Update README.md
- c6fae0d (tag: v3.2.0) build around meteor limitation for packages
- 140bde9 updated package.js
- e5a29bc Update README.md
- 1ef4b18 publish script that resets the location hack
- dfbf158 rename of module.js
- 5da0ca5 rewrote readme
- 3fe0910 removed location file from ignore
- ae5d797 version that works with 0.9
- 72adf6d moved to 0.9 and finally made ready for release
- 3ba6c8b fixed dependencies
- 8920199 updated bootstrap and now using sub repository
- 9d2ff70 Merge branch 'master' of github.com:Nemo64/bootstrap3-less
- 88dc55a added font path to import file
- 0bf02c1 Update README.md
- d46e6c1 aligned json file booleans
- 0b67f98 custom... not costum
- d36ad29 instructions for the json file
- 483cbf9 bootstrap.json way
- 177e416 Merge pull request #16 from AJ-Acevedo/master
- a1254c3 Cleaned up the README
- b8dc108 fixed example variable not there at @import time
- cbec661 Change maintainer to @simison
- dedf6f5 remove update old script from gitignore
- 5c812c4 (tag: v0.1.9) Pump up smart.json ver, indents from tabs to 2 spaces (meteor style)
- d2dd8a5 Merge pull request #14 from Nemo64/import.less
- 0a06ddb Fix for bootstrap 3.1 and advanced usage examples
- b6433bf fixed icon font path
- 15602fe fixed the order of the js files and created a full bootstra.import.less file
- d157459 using now the >0.7.1 method of using .import.less instead of .lessimport
- a52ec0f update.sh now updates the package.js as well
- 6ccc986 automatic update script added
- 104425b update to 3.1.1
- 48b6db4 (tag: v0.1.8) Used vendor version, not from github.
- 75af717 (tag: v0.1.7) version number
- 21e4abe file renaming
- 6267563 (tag: v0.1.6) gitignore
- ac80d80 cleaning
- c7e43ed Update to 3.0.3
- 5074432 (tag: v0.1.5) Bump version number
- 36c9302 Merge pull request #8 from onengo/master
- 88337b4 Use local fonts instead of CDN.
- 23ec918 (tag: v0.1.4) Merge branch 'master' of github.com:eprochasson/bootstrap3-less
- f779e47 Add jQuery+Less dependency, bump version number
- 595b73f Merge pull request #6 from Pent/master
- f125bc7 added error message that indicates if jquery is unavailable
- 84277eb Merge pull request #5 from zeroasterisk/master
- 109a192 updated
- 14f38af (tag: v0.1.3) bump version number
- c6f57df Use CDN for fonts, should fix issue #3
- f062164 (tag: v0.1.2) Merge pull request #4 from zeroasterisk/master
- 868bc0d version to 0.1.2
- 871660c updated to the latest from bootstrap.master (including a few bugfixes Ive been waiting on)
- 82d3e32 (tag: v0.1.1) bump version number
- 4058e14 Merge pull request #2 from zeroasterisk/master
- 3cb7a55 Update README.md
- e8834f0 Update README.md
- 9f40ebd correction for bootstrap imports
- 8bf3005 correction for bootstrap imports
- c504048 updated to latest bootstrap (update script)
- f9d14d5 (tag: v0.1.0) Update README
- b00ba3a wth
- caad321 cleaning
- 077bc1f Bootstrap 3 final. Bump version number
- 961090b Should fix issue #1
- 4f5a044 remove js file
- 3e6bd0b (tag: v0.0.2) bump version number
- a05b38c fixed package.js
- 22bfcc6 (tag: v0.0.1) Add README
- 729b933 First commit

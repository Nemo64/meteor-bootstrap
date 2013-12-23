#!/bin/bash
# from https://gist.github.com/zeroasterisk/6325556

# ========
# this is a simple script to update with the latest release from bootstrap's repo
# which should be located at ./bootstrap
#
#  git clone https://github.com/twbs/bootstrap.git
#
# https://github.com/twbs/bootstrap/blob/master/Gruntfile.js#L43
#
# ========

DIR="$( cd "$( dirname "$0" )" && pwd )"

cd $DIR
cd bootstrap
git pull
cd ..
cp bootstrap/fonts/* lib/fonts/

rm -f lib/js/bootstrap.js
touch lib/js/bootstrap.js
cat bootstrap/js/transition.js >> lib/js/bootstrap.js
cat bootstrap/js/alert.js >> lib/js/bootstrap.js
cat bootstrap/js/button.js >> lib/js/bootstrap.js
cat bootstrap/js/carousel.js >> lib/js/bootstrap.js
cat bootstrap/js/collapse.js >> lib/js/bootstrap.js
cat bootstrap/js/dropdown.js >> lib/js/bootstrap.js
cat bootstrap/js/modal.js >> lib/js/bootstrap.js
cat bootstrap/js/tooltip.js >> lib/js/bootstrap.js
cat bootstrap/js/popover.js >> lib/js/bootstrap.js
cat bootstrap/js/scrollspy.js >> lib/js/bootstrap.js
cat bootstrap/js/tab.js >> lib/js/bootstrap.js
cat bootstrap/js/affix.js >> lib/js/bootstrap.js

cp bootstrap/less/alerts.less lib/less/alerts.lessimport
cp bootstrap/less/badges.less lib/less/badges.lessimport
cp bootstrap/less/bootstrap.less lib/less/bootstrap.lessimport
cp bootstrap/less/breadcrumbs.less lib/less/breadcrumbs.lessimport
cp bootstrap/less/button-groups.less lib/less/button-groups.lessimport
cp bootstrap/less/buttons.less lib/less/buttons.lessimport
cp bootstrap/less/carousel.less lib/less/carousel.lessimport
cp bootstrap/less/close.less lib/less/close.lessimport
cp bootstrap/less/code.less lib/less/code.lessimport
cp bootstrap/less/component-animations.less lib/less/component-animations.lessimport
cp bootstrap/less/dropdowns.less lib/less/dropdowns.lessimport
cp bootstrap/less/forms.less lib/less/forms.lessimport
cp bootstrap/less/glyphicons.less lib/less/glyphicons.lessimport
cp bootstrap/less/grid.less lib/less/grid.lessimport
cp bootstrap/less/input-groups.less lib/less/input-groups.lessimport
cp bootstrap/less/jumbotron.less lib/less/jumbotron.lessimport
cp bootstrap/less/labels.less lib/less/labels.lessimport
cp bootstrap/less/list-group.less lib/less/list-group.lessimport
cp bootstrap/less/media.less lib/less/media.lessimport
cp bootstrap/less/mixins.less lib/less/mixins.lessimport
cp bootstrap/less/modals.less lib/less/modals.lessimport
cp bootstrap/less/navbar.less lib/less/navbar.lessimport
cp bootstrap/less/navs.less lib/less/navs.lessimport
cp bootstrap/less/normalize.less lib/less/normalize.lessimport
cp bootstrap/less/pager.less lib/less/pager.lessimport
cp bootstrap/less/pagination.less lib/less/pagination.lessimport
cp bootstrap/less/panels.less lib/less/panels.lessimport
cp bootstrap/less/popovers.less lib/less/popovers.lessimport
cp bootstrap/less/print.less lib/less/print.lessimport
cp bootstrap/less/progress-bars.less lib/less/progress-bars.lessimport
cp bootstrap/less/responsive-utilities.less lib/less/responsive-utilities.lessimport
cp bootstrap/less/scaffolding.less lib/less/scaffolding.lessimport
cp bootstrap/less/tables.less lib/less/tables.lessimport
cp bootstrap/less/theme.less lib/less/theme.lessimport
cp bootstrap/less/thumbnails.less lib/less/thumbnails.lessimport
cp bootstrap/less/tooltip.less lib/less/tooltip.lessimport
cp bootstrap/less/type.less lib/less/type.lessimport
cp bootstrap/less/utilities.less lib/less/utilities.lessimport
cp bootstrap/less/variables.less lib/less/variables.lessimport
cp bootstrap/less/wells.less lib/less/wells.lessimport

cd lib/less/
sed -i 1 's/\.less/\.lessimport/g' bootstrap.lessimport
sed -i 1 's/\.less/\.lessimport/g' theme.lessimport

# ---------------------------------
# https://github.com/eprochasson/bootstrap3-less/issues/3
# https://github.com/eprochasson/bootstrap3-less/commit/c6f57df08da22380b3cb8216a7337b902c927077
sed -i 1 's/\@icon-font-path\:[^;]*;/\@icon-font-path:          "//netdna.bootstrapcdn.com/bootstrap/3.0.0/fonts/";/g' variables.lessimport


echo "updated"
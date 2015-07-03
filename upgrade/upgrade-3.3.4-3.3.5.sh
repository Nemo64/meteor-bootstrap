#!/usr/bin/env bash

set -e
set -u
set -o pipefail
# set -x

#---------------------------------------------------
# Sanity checks
#---------------------------------------------------

# We should have `patch` tool available
hash patch 2>/dev/null || { echo >&2 "The patch tool is required, but not found."; exit 1; }

# We should have an unambigious custom.bootstrap.import.less to work with
export BOOTSTRAP_COUNT=`find . -name custom.bootstrap.import.less | wc -l`

if [ "$BOOTSTRAP_COUNT" -ne "1" ];
then
  echo "Run this in the directory of your custom.bootstrap.import.less file"
  exit 1
fi

# Attempt to patch
export BOOTSTRAP=`find . -name custom.bootstrap.import.less`

echo "Attempting to patch custom.bootstrap.import.less"

patch "$BOOTSTRAP" <<EOF

--- custom.bootstrap.import.less	2015-07-03 09:36:25.000000000 -0700
+++ custom.bootstrap.import.less.patched	2015-07-03 09:36:17.000000000 -0700
@@ -181,6 +181,11 @@

 @btn-link-disabled-color:        @gray-light;

+// Allows for customizing button radius independently from global border radius
+@btn-border-radius-base:         @border-radius-base;
+@btn-border-radius-large:        @border-radius-large;
+@btn-border-radius-small:        @border-radius-small;
+

 //== Forms
 //
@@ -394,7 +399,7 @@
 @navbar-default-toggle-border-color:       #ddd;


-// Inverted navbar
+//=== Inverted navbar
 // Reset inverted navbar basics
 @navbar-inverse-color:                      lighten(@gray-light, 15%);
 @navbar-inverse-bg:                         #222;
@@ -495,6 +500,7 @@
 @jumbotron-bg:                   @gray-lighter;
 @jumbotron-heading-color:        inherit;
 @jumbotron-font-size:            ceil((@font-size-base * 1.5));
+@jumbotron-heading-font-size:    ceil((@font-size-base * 4.5));


 //== Form states and alerts
EOF


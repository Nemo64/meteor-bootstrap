#!/bin/bash

BOOTSTRAP_ROOT=$1
BOOTSTRAP_DIRS=("less" "js" "fonts")

# check if the path is given and exists
if [ ! -d $BOOTSTRAP_GIT_ROOT ]
then
	echo "You must have a copy of bootstraps git repository and give a valid path as parameter to this script"
	exit 1
fi

# check if all reaquired directories exist
for DIR in $BOOTSTRAP_DIRS
do
	if [ ! -d "$BOOTSTRAP_ROOT/$DIR" ]
	then
		echo "The required directory '$DIR' wasn't found in your bootstrap copy"
		exit 2
	fi
done

echo "bootstrap installation found, delete old files..."
rm lib/less/*.lessimport lib/js/*.js lib/fonts/*

echo "copy files from bootstrap installation..."
cp $BOOTSTRAP_ROOT/js/*.js lib/js
cp $BOOTSTRAP_ROOT/fonts/* lib/fonts
cp $BOOTSTRAP_ROOT/less/* lib/less
rename "s/\\.less/\\.lessimport/" lib/less/*.less

echo "done!"

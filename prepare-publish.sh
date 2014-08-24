#!/bin/bash

# there is a hack in this package to figure out where it is located.
# this hack requires a file which must not be included in the published version.
# this script resets it, make sure that there isn't a meteor process running.

FILE_CONTENT="packageLocation = null"
FILE_NAME="package.location.js"

echo "reset hack..."
echo "$FILE_CONTENT" > "$FILE_NAME"

echo "wait 5 secounds and then check if the file hasn't changed"
sleep 5

ACTUAL_FILE_CONTENT=`cat $FILE_NAME`

if [ "$FILE_CONTENT" == "$ACTUAL_FILE_CONTENT" ]
then
  echo "file wasn't modified, you're good to go!"
else
  echo "FILE WAS MODIFIED! You probably have a meteor instance running"
fi

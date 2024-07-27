#!/bin/bash

# get modified files from last commit
files_changed=`git diff --name-only HEAD HEAD~1`

# ignore files starting with <pattern> (reverse with -v argument)
files_accepted=`echo "$files_changed" | grep -v projects/frontend | grep -v '\.sh$' | grep -E -v '^projects\/backend\/(docs|@types|maintenance-scripts|roles-permissions|scripts|__tests__).*$'`

echo "changed files are:"
echo "------------------"
echo $files_changed | tr " " "\n"
echo ""
echo "accepted files are:"
echo "---------------------"
echo $files_accepted | tr " " "\n"

if [[ $files_accepted ]];
then
  echo "running command: $1"
  yarn $1
else
  echo "skipping running command: $1"
fi

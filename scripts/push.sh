#!/bin/bash

set -ux

current_branch=`git symbolic-ref HEAD`

if [ $current_branch != "refs/heads/src" ]; then
  echo "Not on branch 'src', skipping push of master"
  exit
fi

git checkout master
git push origin master
git checkout src

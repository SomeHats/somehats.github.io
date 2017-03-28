#!/bin/bash

set -ux

current_branch=`git symbolic-ref HEAD`
current_commit=`git log -1 --oneline`

if [ $current_branch != "refs/heads/src" ]; then
  echo "Not on branch 'src', skipping publish step"
  exit
fi

work_dir=`mktemp -d`

yarn run build
cp -r build/ $work_dir
git checkout master
git merge src
rm -rf static build public scripts src assets icons *.{html,json,ico,md,lock,png,xml}
cp -r $work_dir/* .
git add -A
git commit -m "Build from $current_commit"
git checkout src

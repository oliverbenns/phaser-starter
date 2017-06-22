#!/bin/bash

# Taken from https://github.com/meandavejustice/gh-pages-deploy
git branch -f gh-pages
git checkout gh-pages
git reset --hard origin/master
cp -r public/* .
git add -A .
git commit -a -m 'gh-pages update'
git push origin gh-pages --force
git checkout master

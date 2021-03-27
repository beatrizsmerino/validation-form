#!/usr/bin/env sh

# abort on errors
set -e

rm -rf dist

# build
gulp build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pagesgit push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
# git push -f https://github.com/<USERNAME>/<REPO>.git master:gh-pages
git push -f https://github.com/beatrizsmerino/validation-form.git master:gh-pages

cd -
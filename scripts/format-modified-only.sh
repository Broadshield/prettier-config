#!/usr/bin/env bash
# chmod +x this and save in your PATH. Assumes `prettier` is in your `devDependencies` already

BASE=$(git merge-base dev HEAD) # change master to whatever your trunk branch is
FILES=$(git diff --name-only "${BASE}" HEAD | xargs)
echo "$FILES"
npx prettier --list-different $FILES

# Want eslint too?
# npx eslint --ignore-path=.prettierignore $FILES

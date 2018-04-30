#!/bin/bash
set -eo pipefail

red=`tput setaf 1`
green=`tput setaf 2`
yellow=`tput setaf 3`
blue=`tput setaf 4`
magenta=`tput setaf 5`
cyan=`tput setaf 6`
white=`tput setaf 7`
reset=`tput sgr0`

# echo "$magenta==== using node v8.11.1 $reset"
# nvm use v8.11.1

# echo "$magenta==== jest tests $reset"
# yarn jest

echo "$yellow==== flow type checks $reset"
yarn run flow

echo "$magenta==== flow coverage $reset"
yarn run flow coverage --pretty src/App.js

# echo "$cyan==== linting $reset"
# yarn run eslint src/*.js

echo "$blue==== code formatter $reset"
yarn run prettier --write "src/**/*.js"

echo -e "\n\n$green 😎 Successful!! $reset"

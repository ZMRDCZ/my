#!/usr/bin/env sh

# abort on errors
set -e

# use the shared npm script to handle build and gh-pages publish
npm run deploy

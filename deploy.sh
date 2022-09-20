#!/bin/bash

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

git remote add live 'root@ssh.ncasola.cloud:/var/www/ncasolajimenez/data/gits/dosiscalc_bare.git/'
git push --set-upstream live master --force
cd -
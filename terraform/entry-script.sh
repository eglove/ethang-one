#!/bin/bash
sudo yum -y update && sudo yum -y install git
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
. ~/.nvm/nvm.sh
nvm install 16.15.0
npm i -g pm2

git clone https://github.com/eglove/ethang-one.git
npx --yes nx build graphql-gateway
pm2 start

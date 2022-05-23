#!/bin/bash
sudo yum -y update && sudo yum -y install git
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
. ~/.nvm/nvm.sh
nvm install 16.15.0
npm i -g pm2 nx pnpm

git clone https://github.com/eglove/ethang-one.git
cd ethang-one || exit
pnpm i
pnpm nx build graphql-gateway
pm2 start

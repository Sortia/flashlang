#!/bin/bash

tar -xzvf dbdata.tar.gz
tar -xzvf nginx.tar.gz

cp .env.example .env

docker-compose up -d --build

docker-compose exec app composer install

docker-compose exec app php artisan migrate:fresh

docker-compose exec app php artisan db:seed

docker-compose exec app php artisan key:generate

docker-compose exec app php artisan config:cache

docker-compose exec app composer dump-autoload

yarn install
cd ./nuxt
yarn install
cd ..

yarn build

sudo chmod -R 777 ./storage

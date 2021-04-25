#!/bin/bash

tar -xzvf dbdata.tar.gz
tar -xzvf nginx.tar.gz

cp .env.example .env

sudo docker-compose up -d --build

sudo docker-compose exec app composer install

sudo docker-compose exec app php artisan migrate:fresh

sudo docker-compose exec app php artisan db:seed

sudo docker-compose exec app php artisan key:generate

sudo docker-compose exec app php artisan config:cache

sudo docker-compose exec app composer dump-autoload

yarn install

sudo chmod -R 777 .

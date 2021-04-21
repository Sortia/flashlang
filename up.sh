cp .env.example .env

composer install

yarn install

php artisan migrate:fresh
php artisan db:seed

php artisan key:generate
php artisan config:cache

composer dump-autoload

yarn dev

/*
sudo docker run --rm --interactive --tty \
  --volume $PWD:/app \
  composer install

const mix = require('laravel-mix')

mix
  .copy('nuxt/dist/index.html', 'resources/views/app.blade.php')
  .copyDirectory('nuxt/dist', 'public')

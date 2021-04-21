const mix = require('laravel-mix')

mix
  .copy('dist/index.html', 'resources/views/app.blade.php')
  .copyDirectory('dist', 'public')

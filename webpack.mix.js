const mix = require('laravel-mix');

mix.scripts([
  'src/js/form.js',
  'src/js/navbar.js',
  'src/js/carousel.js',
  'src/js/multiCarousel.js',
  'src/js/techCarousel.js',
], 'dist/js/meta-ui.js');

mix.sass('src/sass/meta-ui.scss', 'dist/css');


// Needed for Windows Users for yarn run dev
mix.setPublicPath('./');


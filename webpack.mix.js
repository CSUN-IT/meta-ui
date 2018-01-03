const mix = require('laravel-mix');
mix.copy('node_modules/font-awesome/fonts', 'dist/latest/fonts');

mix.scripts([
  'src/js/form.js',
  'src/js/carousel.js',
  'src/js/multiCarousel.js',
  'src/js/techCarousel.js',
], 'dist/latest/js/meta-ui.js');

mix.sass('src/sass/meta-ui.scss', 'dist/latest/css');

// Needed for Windows Users for yarn run dev
mix.setPublicPath('./');


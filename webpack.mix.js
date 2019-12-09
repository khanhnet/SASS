let mix = require('laravel-mix');
require('mix-html-builder');
mix.setPublicPath('public');
mix.setResourceRoot('../');
mix.copyDirectory('resources/images', 'public/images');
mix.copyDirectory('resources/fonts', 'public/fonts');
mix.copyDirectory('resources/*.html', 'public/');

mix.sass('resources/sass/app.scss', 'public/css/')
    .scripts(['resources/js/app.js'], 'public/js/app.js');
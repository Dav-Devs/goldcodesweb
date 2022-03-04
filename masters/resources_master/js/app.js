require('./bootstrap');

global.bootstrap = require('./inc/bootstrap.bundle');

window.$ = window.jQuery = require('./inc/jquery-3.6.0.min');

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

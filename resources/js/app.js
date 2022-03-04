require('./bootstrap');

// global.bootstrap = require('./inc/bootstrap.bundle');

import Parsley from '../assets/lib/Parsley.js/src/parsley';

window.$ = window.jQuery = require('./inc/jquery-3.6.0.min');

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

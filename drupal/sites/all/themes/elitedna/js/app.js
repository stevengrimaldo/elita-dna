require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({22:[function(require,module,exports){
'use strict';

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('hello world.');
(0, _jquery2.default)('html').addClass('ready');

// const components = [
//   'header',
//   'mobile-menu',
//   'hero',
//   'featured-content',
//   'resources',
//   'profile',
//   'solutions',
//   'reviews',
//   'accordion',
//   'split-content',
//   'documents',
//   'articles',
//   'locations',
//   'team',
//   'tools',
//   'form',
//   'main-content',
//   'video',
//   'footer'
// ];
//
// const componentLength = components.length;
//
// function loadCss(name) {
//   const link = document.createElement('link');
//   link.rel = 'stylesheet';
//   link.href = './css/components/' + name + '/' + name + '.min.css';
//   document.getElementsByTagName('head')[0].appendChild(link);
// }
//
// function loadJs(name) {
//   const script = document.createElement('script');
//   script.src = './js/components/' + name + '.js';
//   document.getElementById('scripts').appendChild(script);
// }
//
// function loadComponent(name) {
//   loadCss(name);
//   loadJs(name);
// }
//
// for (let i = 0; i < componentLength; i++) {
//   if (typeof(document.querySelector('.' + components[i])) !== 'undefined' && document.querySelector('.' + components[i]) !== null) {
//     loadComponent(components[i]);
//   }
// }

},{"jquery":3}]},{},[22]);

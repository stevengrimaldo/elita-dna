require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({6:[function(require,module,exports){
'use strict';

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)('.articles__more').on('click', function () {
  var visible = (0, _jquery2.default)('.articles__article:visible').length + 6;
  console.log((0, _jquery2.default)('.articles__article:visible').length);
  (0, _jquery2.default)('.articles__article:lt(' + visible + ')').css('display', 'inline-block');
  if ((0, _jquery2.default)('.articles__article:visible').length === (0, _jquery2.default)('.articles__article').length) {
    (0, _jquery2.default)('.articles__more').hide();
  }
});

if ((0, _jquery2.default)('.articles__article').length > 6) {
  (0, _jquery2.default)('.articles__more').show();
}

},{"jquery":3}]},{},[6]);

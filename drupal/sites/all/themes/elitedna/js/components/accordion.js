require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({5:[function(require,module,exports){
'use strict';

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)('.accordion').each(function () {
  (0, _jquery2.default)(this).find('.accordion__item').first().addClass('accordion__item--open');
});

(0, _jquery2.default)('.accordion__item-title').on('click', function () {
  (0, _jquery2.default)('.accordion__item--open .accordion__item-answer').slideUp(400);

  if (!(0, _jquery2.default)(this).parent().parent().hasClass('accordion__item--open')) {
    (0, _jquery2.default)('.accordion__item').removeClass('accordion__item--open');
    (0, _jquery2.default)(this).next().slideDown(400);
    (0, _jquery2.default)(this).parent().parent().addClass('accordion__item--open');
  } else {
    (0, _jquery2.default)(this).next().slideUp(400);
    (0, _jquery2.default)(this).parent().parent().removeClass('accordion__item--open');
  }
});

},{"jquery":3}]},{},[5]);

require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({18:[function(require,module,exports){
'use strict';

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)('.team__filters__filter-location').on('click', function () {
  (0, _jquery2.default)('.team__filters__filter--open .team__filters__filter__departments').slideUp(400);

  if (!(0, _jquery2.default)(this).parent().hasClass('team__filters__filter--open')) {
    (0, _jquery2.default)('.team__filters__filter').removeClass('team__filters__filter--open');
    (0, _jquery2.default)(this).next().slideDown(400);
    (0, _jquery2.default)(this).parent().addClass('team__filters__filter--open');
  } else {
    (0, _jquery2.default)(this).next().slideUp(400);
    (0, _jquery2.default)(this).parent().removeClass('team__filters__filter--open');
  }
});

(0, _jquery2.default)('.team__filters__filter').each(function () {
  (0, _jquery2.default)(this).find('.team__filters__filter__departments-department').each(function () {
    (0, _jquery2.default)(this).attr('data-department', (0, _jquery2.default)(this).children('span').text().toLowerCase().replace(/\s+/g, '-'));
  });
});

(0, _jquery2.default)('.team__filters__filter__departments-department').on('click', function () {
  (0, _jquery2.default)('.team__filters__filter__departments-department').removeClass('team__filters__filter__departments-department--active');
  (0, _jquery2.default)('.team__members__member').hide();
  var currentLocation = (0, _jquery2.default)(this).parent().prev().attr('data-location');
  var currentDepartment = (0, _jquery2.default)(this).attr('data-department');
  (0, _jquery2.default)(this).addClass('team__filters__filter__departments-department--active');
  (0, _jquery2.default)('.team__members__member').each(function () {
    if ((0, _jquery2.default)(this).attr('data-location') === currentLocation && (0, _jquery2.default)(this).attr('data-department') === currentDepartment) {
      (0, _jquery2.default)(this).show();
    }
  });
});

(0, _jquery2.default)('.team__members__member').hide();
(0, _jquery2.default)('.team__members__member[data-location="our-team"]').show();
(0, _jquery2.default)('.team__filters__filter-location[data-location="our-team"]').parent().detach().insertAfter('.team__filters-label');
(0, _jquery2.default)('.team__filters__filter-location[data-location="our-team"]').parent().addClass('team__filters__filter--open');
(0, _jquery2.default)('.team__filters__filter-location[data-location="our-team"]').next().show();

},{"jquery":3}]},{},[18]);

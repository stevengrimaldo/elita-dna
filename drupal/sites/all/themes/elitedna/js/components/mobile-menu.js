require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({13:[function(require,module,exports){
'use strict';

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isOpen = false;
var settings = {
  vpWidth: 0,
  isTouchMoveAllowed: true,
  scrollPosition: 0
};
var $el = {
  bodyEl: (0, _jquery2.default)('body'),
  openbtn: (0, _jquery2.default)('.mobile-menu-open'),
  closebtn: (0, _jquery2.default)('.mobile-menu-close'),
  content: (0, _jquery2.default)('.content-wrap'),
  svg: (0, _jquery2.default)('.hamburger-menu')
};
var util = {
  viewport: function viewport() {
    var ee = window,
        aa = 'inner';
    if (!('innerWidth' in window)) {
      aa = 'client';
      ee = document.documentElement || document.body;
    }

    return { width: ee[aa + 'Width'], height: ee[aa + 'Height'] };
  },
  stopTouchMove: function stopTouchMove() {
    // Disable scroll for the document, we'll handle it ourselves
    (0, _jquery2.default)(document).on('touchmove.overlay', function (ev) {
      ev.preventDefault();
    });

    // Check if we should allow scrolling up or down
    (0, _jquery2.default)('body').on('touchstart.overlay', '.touch', function (ev) {
      // If the element is scrollable (content overflows), then...
      if (this.scrollHeight !== this.clientHeight) {
        // If we're at the top, scroll down one pixel to allow scrolling up
        if (this.scrollTop === 0) {
          this.scrollTop = 1;
        }

        // If we're at the bottom, scroll up one pixel to allow scrolling down
        if (this.scrollTop === this.scrollHeight - this.clientHeight) {
          this.scrollTop = this.scrollHeight - this.clientHeight - 1;
        }
      }

      // Check if we can scroll
      this.allowUp = this.scrollTop > 0;
      this.allowDown = this.scrollTop < this.scrollHeight - this.clientHeight;
      this.lastY = ev.originalEvent.pageY;
    });

    (0, _jquery2.default)('body').on('touchmove.overlay', '.touch', function (ev) {
      var or = ev.originalEvent,
          up = or.pageY > this.lastY,
          down = !up;

      this.lastY = or.pageY;

      if (up && this.allowUp || down && this.allowDown) {
        or.stopPropagation();
      } else {
        or.preventDefault();
      }
    });
  },
  allowScrolling: function allowScrolling(modal) {
    // Disable body scrollTop behavior for disclaimers.
    (0, _jquery2.default)('html, body').css({
      overflow: '',
      position: ''
    });

    (0, _jquery2.default)('body').scrollTop(settings.scrollPosition);
    (0, _jquery2.default)(modal).removeClass('touch').children().removeClass('touch');
    settings.scrollPosition = 0;

    (0, _jquery2.default)(document).off('touchmove.overlay');
    (0, _jquery2.default)('body').off('touchstart.overlay');
    (0, _jquery2.default)('body').off('touchmove.overlay');
  },
  stopScrolling: function stopScrolling(modal) {
    // Disable default body scroll blocking behavior for disclaimers.
    settings.scrollPosition = (0, _jquery2.default)('body').scrollTop();

    (0, _jquery2.default)('html, body').css({
      overflow: 'hidden',
      position: 'relative'
    });

    (0, _jquery2.default)('body').scrollTop(settings.scrollPosition);
    util.stopTouchMove();
    (0, _jquery2.default)(modal).children().addClass('touch');
  },
  closeModal: function closeModal(modal) {
    util.allowScrolling(modal);
    (0, _jquery2.default)(modal).css('z-index', 200);

    setTimeout(function () {
      (0, _jquery2.default)(modal).css('z-index', -1);
    }, 250);

    (0, _jquery2.default)(modal).removeClass('modal--open');
  },
  openModal: function openModal(modal) {
    util.stopScrolling(modal);
    (0, _jquery2.default)(modal).css('z-index', 200).addClass('modal--open');
  }
};
var stopTouchMove = function stopTouchMove() {
  // Disable scroll for the document, we'll handle it ourselves
  (0, _jquery2.default)(document).on('touchmove', function (ev) {
    ev.preventDefault();
  });

  // Check if we should allow scrolling up or down
  (0, _jquery2.default)('body').on('touchstart', '.touch', function (ev) {
    // If the element is scrollable (content overflows), then...
    if (this.scrollHeight !== this.clientHeight) {
      // If we're at the top, scroll down one pixel to allow scrolling up
      if (this.scrollTop === 0) {
        this.scrollTop = 1;
      }

      // If we're at the bottom, scroll up one pixel to allow scrolling down
      if (this.scrollTop === this.scrollHeight - this.clientHeight) {
        this.scrollTop = this.scrollHeight - this.clientHeight - 1;
      }
    }

    // Check if we can scroll
    this.allowUp = this.scrollTop > 0;
    this.allowDown = this.scrollTop < this.scrollHeight - this.clientHeight;
    this.lastY = ev.originalEvent.pageY;
  });

  (0, _jquery2.default)('body').on('touchmove', '.touch', function (ev) {
    var or = ev.originalEvent,
        up = or.pageY > this.lastY,
        down = !up;

    this.lastY = or.pageY;

    if (up && this.allowUp || down && this.allowDown) {
      or.stopPropagation();
    } else {
      or.preventDefault();
    }
  });
};
var allowScrolling = function allowScrolling(modal) {
  (0, _jquery2.default)('html, body').css({
    overflow: '',
    position: ''
  });
  (0, _jquery2.default)('body').scrollTop(settings.scrollPosition);
  (0, _jquery2.default)('.mobile-menu').removeClass('touch');
  (0, _jquery2.default)(document).off('touchmove');
  (0, _jquery2.default)('body').off('touchstart');
  (0, _jquery2.default)('body').off('touchmove');
  settings.scrollPosition = 0;
};
var stopScrolling = function stopScrolling(modal) {
  settings.scrollPosition = (0, _jquery2.default)('body').scrollTop();

  (0, _jquery2.default)('html, body').css({
    overflow: 'hidden',
    position: 'relative'
  });
  (0, _jquery2.default)('body').scrollTop(settings.scrollPosition);
  (0, _jquery2.default)('.mobile-menu').addClass('touch');
  stopTouchMove();
};
var toggleMenu = function toggleMenu(ev) {
  if (isOpen) {
    $el.bodyEl.removeClass('show-menu');
    allowScrolling();
    (0, _jquery2.default)('.expanded').removeClass('open active');
    (0, _jquery2.default)('.parent').removeClass('hide active');
    (0, _jquery2.default)('.mobile-menu-nav-menus ul').removeClass('active');
  } else {
    ev.preventDefault();
    ev.stopPropagation();
    stopScrolling();
    $el.bodyEl.addClass('show-menu');
  }
  isOpen = !isOpen;
};
var bindMobileMenuEvents = function bindMobileMenuEvents(ev) {
  (0, _jquery2.default)('.header__nav__menu > ul.menu > ul.menu').unwrap();
  (0, _jquery2.default)('.mobile-menu-nav-menus > ul').addClass('parent');
  (0, _jquery2.default)('.mobile-menu .expanded > ul').prepend('<li class="back">Go Back</li>');
  (0, _jquery2.default)('.mobile-menu .expanded').on('click', function (ev) {
    var target = ev.target,
        currentTarget = ev.currentTarget;

    if (target.tagName !== 'A') {
      // opens submenu
      ev.stopPropagation();
      (0, _jquery2.default)('.expanded').removeClass('open');
      (0, _jquery2.default)(currentTarget).addClass('open');
      (0, _jquery2.default)(currentTarget).parents('ul').addClass('active');
      if ((0, _jquery2.default)(currentTarget).parent().closest('.expanded').length > 0) {
        (0, _jquery2.default)(currentTarget).parent().closest('.expanded').addClass('active');
      }
      (0, _jquery2.default)(currentTarget).closest('.parent').siblings().addClass('hide');
    } else {
      // opens link
    }
  });
  (0, _jquery2.default)('.back').on('click', function (ev) {
    ev.stopPropagation();
    if ((0, _jquery2.default)(ev.currentTarget).closest('.expanded').parent().closest('.expanded').length > 0) {
      (0, _jquery2.default)(ev.currentTarget).closest('.expanded').parent().closest('.expanded').addClass('open');
    } else {
      (0, _jquery2.default)('.parent').removeClass('hide active');
    }
    (0, _jquery2.default)(ev.currentTarget).closest('.active').removeClass('active');
    (0, _jquery2.default)(ev.currentTarget).closest('.expanded').removeClass('open active');
    (0, _jquery2.default)(ev.currentTarget).parent().closest('.expanded').removeClass('active');
  });
};
var initMobileMenu = function initMobileMenu() {
  bindMobileMenuEvents();
  $el.openbtn.on('click', toggleMenu);

  if ($el.closebtn) {
    $el.closebtn.on('click', toggleMenu);
  }

  // close the menu element if the target it´s not the menu element or one of its descendants..
  $el.content.on('click', function (ev) {
    var target = ev.target;

    if (isOpen && target !== $el.openbtn && target !== $el.svg) {
      toggleMenu();
    }
  });
};
var resizeFunctions = function resizeFunctions() {
  settings.vpWidth = util.viewport().width;

  if (settings.vpWidth < 1024) {
    util.closeModal('.modal--newsletter');
  }
};
var windowResize = function windowResize() {
  if ((0, _jquery2.default)(window).width() !== settings.lastWidth) {
    resizeFunctions();
    settings.lastWidth = (0, _jquery2.default)(window).width();
  }
};

settings.vpWidth = util.viewport().width;

initMobileMenu();

(0, _jquery2.default)('.no-link').on('click', function (ev) {
  ev.preventDefault();
});

(0, _jquery2.default)('.modal .close').on('click', function (ev) {
  ev.stopImmediatePropagation();
  util.closeModal((0, _jquery2.default)(this).parents('.modal'));
});

(0, _jquery2.default)(window).on('resize', windowResize);

},{"jquery":3}]},{},[13]);

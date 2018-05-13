import $ from 'jquery';

let isOpen = false;
let settings = {
  vpWidth: 0,
  isTouchMoveAllowed: true,
  scrollPosition: 0
};
let $el = {
  bodyEl: $('body'),
  openbtn: $('.mobile-menu-open'),
  closebtn: $('.mobile-menu-close'),
  content: $('.content-wrap'),
  svg: $('.hamburger-menu')
};
let util = {
  viewport: () => {
    let ee = window,
      aa = 'inner';
    if (!('innerWidth' in window)) {
      aa = 'client';
      ee = document.documentElement || document.body;
    }

    return {width: ee[aa + 'Width'], height: ee[aa + 'Height']};
  },
  stopTouchMove: () => {
    // Disable scroll for the document, we'll handle it ourselves
    $(document).on('touchmove.overlay', (ev) => {
      ev.preventDefault();
    });

    // Check if we should allow scrolling up or down
    $('body').on('touchstart.overlay', '.touch', function(ev) {
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
      this.allowDown = this.scrollTop < (this.scrollHeight - this.clientHeight);
      this.lastY = ev.originalEvent.pageY;
    });

    $('body').on('touchmove.overlay', '.touch', function(ev) {
      let or = ev.originalEvent,
        up = or.pageY > this.lastY,
        down = !up;

      this.lastY = or.pageY;

      if ((up && this.allowUp) || (down && this.allowDown)) {
        or.stopPropagation();
      } else {
        or.preventDefault();
      }
    });
  },
  allowScrolling: (modal) => {
    // Disable body scrollTop behavior for disclaimers.
    $('html, body').css({
      overflow: '',
      position: ''
    });

    $('body').scrollTop(settings.scrollPosition);
    $(modal).removeClass('touch').children().removeClass('touch');
    settings.scrollPosition = 0;

    $(document).off('touchmove.overlay');
    $('body').off('touchstart.overlay');
    $('body').off('touchmove.overlay');
  },
  stopScrolling: (modal) => {
    // Disable default body scroll blocking behavior for disclaimers.
    settings.scrollPosition = $('body').scrollTop();

    $('html, body').css({
      overflow: 'hidden',
      position: 'relative'
    });

    $('body').scrollTop(settings.scrollPosition);
    util.stopTouchMove();
    $(modal).children().addClass('touch');
  },
  closeModal: (modal) => {
    util.allowScrolling(modal);
    $(modal).css('z-index', 200);

    setTimeout(() => {
      $(modal).css('z-index', -1);
    }, 250);

    $(modal).removeClass('modal--open');
  },
  openModal: (modal) => {
    util.stopScrolling(modal);
    $(modal).css('z-index', 200).addClass('modal--open');
  }
};
let stopTouchMove = () => {
  // Disable scroll for the document, we'll handle it ourselves
  $(document).on('touchmove', (ev) => {
    ev.preventDefault();
  });

  // Check if we should allow scrolling up or down
  $('body').on('touchstart', '.touch', function(ev) {
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
    this.allowDown = this.scrollTop < (this.scrollHeight - this.clientHeight);
    this.lastY = ev.originalEvent.pageY;
  });

  $('body').on('touchmove', '.touch', function(ev) {
    let or = ev.originalEvent,
      up = or.pageY > this.lastY,
      down = !up;

    this.lastY = or.pageY;

    if ((up && this.allowUp) || (down && this.allowDown)) {
      or.stopPropagation();
    } else {
      or.preventDefault();
    }
  });
};
let allowScrolling = (modal) => {
  $('html, body').css({
    overflow: '',
    position: ''
  });
  $('body').scrollTop(settings.scrollPosition);
  $('.mobile-menu').removeClass('touch');
  $(document).off('touchmove');
  $('body').off('touchstart');
  $('body').off('touchmove');
  settings.scrollPosition = 0;
};
let stopScrolling = (modal) => {
  settings.scrollPosition = $('body').scrollTop();

  $('html, body').css({
    overflow: 'hidden',
    position: 'relative'
  });
  $('body').scrollTop(settings.scrollPosition);
  $('.mobile-menu').addClass('touch');
  stopTouchMove();
};
let toggleMenu = (ev) => {
  if (isOpen) {
    $el.bodyEl.removeClass('show-menu');
    allowScrolling();
    $('.expanded').removeClass('open active');
    $('.parent').removeClass('hide active');
    $('.mobile-menu-nav-menus ul').removeClass('active');
  } else {
    ev.preventDefault();
    ev.stopPropagation();
    stopScrolling();
    $el.bodyEl.addClass('show-menu');
  }
  isOpen = !isOpen;
};
let bindMobileMenuEvents = (ev) => {
    $('.header__nav__menu > ul.menu > ul.menu').unwrap();
    $('.mobile-menu-nav-menus > ul').addClass('parent');
    $('.mobile-menu .expanded > ul').prepend('<li class="back">Go Back</li>');
    $('.mobile-menu .expanded').on('click', function (ev) {
        var target = ev.target,
            currentTarget = ev.currentTarget;

        if (target.tagName !== 'A') {
            // opens submenu
            ev.stopPropagation();
            $('.expanded').removeClass('open');
            $(currentTarget).addClass('open');
            $(currentTarget).parents('ul').addClass('active');
            if ($(currentTarget).parent().closest('.expanded').length > 0) {
                $(currentTarget).parent().closest('.expanded').addClass('active');
            }
            $(currentTarget).closest('.parent').siblings().addClass('hide');
        } else {
            // opens link
        }
    });
    $('.back').on('click', function (ev) {
        ev.stopPropagation();
        if ($(ev.currentTarget).closest('.expanded').parent().closest('.expanded').length > 0) {
            $(ev.currentTarget).closest('.expanded').parent().closest('.expanded').addClass('open');
        } else {
            $('.parent').removeClass('hide active');
        }
        $(ev.currentTarget).closest('.active').removeClass('active');
        $(ev.currentTarget).closest('.expanded').removeClass('open active');
        $(ev.currentTarget).parent().closest('.expanded').removeClass('active');
    });
};
let initMobileMenu = () => {
  bindMobileMenuEvents();
  $el.openbtn.on('click', toggleMenu);

  if ($el.closebtn) {
    $el.closebtn.on('click', toggleMenu);
  }

  // close the menu element if the target it´s not the menu element or one of its descendants..
  $el.content.on('click', (ev) => {
    let target = ev.target;

    if (isOpen && target !== $el.openbtn && target !== $el.svg) {
      toggleMenu();
    }
  });
};
let resizeFunctions = () => {
  settings.vpWidth = util.viewport().width;

  if (settings.vpWidth < 1024) {
    util.closeModal('.modal--newsletter');
  }
};
let windowResize = () => {
  if ($(window).width() !== settings.lastWidth) {
    resizeFunctions();
    settings.lastWidth = $(window).width();
  }
};

settings.vpWidth = util.viewport().width;

initMobileMenu();

$('.no-link').on('click', function (ev) {
  ev.preventDefault();
});

$('.modal .close').on('click', function(ev) {
  ev.stopImmediatePropagation();
  util.closeModal($(this).parents('.modal'));
});

$(window).on('resize', windowResize);

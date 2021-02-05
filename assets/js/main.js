
!(function ($) {
  "use strict";

 
  if ($('.typed').length) {
    var typed_strings = $(".typed").data('typed-items');
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  $(window).on('scroll', function () {
    var position = $('.langages').position(); //renvoie la position par rapport au haut de page et la gauche de la page

    if ($(window).scrollTop() >= position.top - 300) {
      //Ton code à éxecuter
        if ($('.python').length) {
          
          var typed_strings = $(".python").data('python-items');
          typed_strings = typed_strings.split(',')
          new Typed('.python', {
            strings: typed_strings,
            loop: false,
            typeSpeed: 500,
          
          });
          $('.python').removeClass('python');
        }
        if ($('.html').length) {
        
          
          var typed_strings = $(".html").data('python-items');
          typed_strings = typed_strings.split(',')
          new Typed('.html', {
            strings: typed_strings,
            loop: false,
            typeSpeed: 500,
          });
          $('.html').removeClass('html');
        }
        if ($('.sql').length) {
        
          
          var typed_strings = $(".sql").data('python-items');
          typed_strings = typed_strings.split(',')
          new Typed('.sql', {
            strings: typed_strings,
            loop: false,
            typeSpeed: 600,
          });
          $('.sql').removeClass('sql');
        }
        if ($('.javascript').length) {
          console.log("1");
          
          var typed_strings = $(".javascript").data('python-items');
          typed_strings = typed_strings.split(',')
          new Typed('.javascript', {
            strings: typed_strings,
            loop: false,
            typeSpeed: 500,
          });
          $('.javascript').removeClass('javascript');
        }
        if ($('.php').length) {
          console.log("1");
          
          var typed_strings = $(".php").data('python-items');
          typed_strings = typed_strings.split(',')
          new Typed('.php', {
            strings: typed_strings,
            loop: false,
            typeSpeed: 600,
          });
          $('.php').removeClass('php');
        }
      }

    }
  )




  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .scrollto', function (e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top;

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('fa-plus fa-times text-blue');
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function () {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $(document).on('click', '.mobile-nav-toggle', function (e) {
    $('body').toggleClass('mobile-nav-active');
    $('.mobile-nav-toggle i').toggleClass('fa-plus fa-times');
  });

  $(document).click(function (e) {
    var container = $(".mobile-nav-toggle");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($('body').hasClass('mobile-nav-active')) {
        $('body').removeClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass('fa-plus fa-times');
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, .mobile-nav');

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function () {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });



  // competences
  $('.competences-content').waypoint(function () {
    $('.progress .progress-bar').each(function () {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });

  // Porfolio isotope and filter
  $(window).on('load', function () {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });

  });



  // Init AOS
  function aos_init() {
    AOS.init({
     
    });
  }
  $(window).on('load', function () {
    aos_init();
  });

})(jQuery);
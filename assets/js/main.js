/**
 * Template Name: Arsha - v2.3.1
 * Template URL: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
!(function($) {
    "use strict";

    // Preloader
    $(window).on('load', function() {
        if ($('#preloader').length) {
            $('#preloader').delay(100).fadeOut('slow', function() {
                $(this).remove();
            });
        }
    });

    // Smooth scroll for the navigation menu and links with .scrollto classes
    var scrolltoOffset = $('#header').outerHeight() - 2;
    $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {
                e.preventDefault();

                var scrollto = target.offset().top - scrolltoOffset;
                if ($(this).attr("href") == '#header') {
                    scrollto = 0;
                }

                $('html, body').animate({
                    scrollTop: scrollto
                }, 1500, 'easeInOutExpo');

                if ($(this).parents('.nav-menu, .mobile-nav').length) {
                    $('.nav-menu .active, .mobile-nav .active').removeClass('active');
                    $(this).closest('li').addClass('active');
                }

                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
                    $('.mobile-nav-overly').fadeOut();
                }
                return false;
            }
        }
    });

    // Activate smooth scroll on page load with hash links
    $(document).ready(function() {
        if (window.location.hash) {
            var initial_nav = window.location.hash;
            if ($(initial_nav).length) {
                var scrollto = $(initial_nav).offset().top - scrolltoOffset;
                $('html, body').animate({
                    scrollTop: scrollto
                }, 1500, 'easeInOutExpo');
            }
        }
    });

    // Mobile Navigation
    if ($('.nav-menu').length) {
        var $mobile_nav = $('.nav-menu').clone().prop({
            class: 'mobile-nav d-lg-none'
        });
        $('body').append($mobile_nav);
        $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
        $('body').append('<div class="mobile-nav-overly"></div>');

        $(document).on('click', '.mobile-nav-toggle', function(e) {
            $('body').toggleClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
            $('.mobile-nav-overly').toggle();
        });

        $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
            e.preventDefault();
            $(this).next().slideToggle(300);
            $(this).parent().toggleClass('active');
        });

        $(document).click(function(e) {
            var container = $(".mobile-nav, .mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
                    $('.mobile-nav-overly').fadeOut();
                }
            }
        });
    } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
        $(".mobile-nav, .mobile-nav-toggle").hide();
    }

    // Navigation active state on scroll
    var nav_sections = $('section');
    var main_nav = $('.nav-menu, #mobile-nav');

    $(window).on('scroll', function() {
        var cur_pos = $(this).scrollTop() + 200;

        nav_sections.each(function() {
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

    // Toggle .header-scrolled class to #header when page is scrolled
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('header-scrolled');
        } else {
            $('#header').removeClass('header-scrolled');
        }
    });

    if ($(window).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
    }

    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });



    // Porfolio isotope and filter
    // $(window).on('load', function() {
    //   var portfolioIsotope = $('.portfolio-container').isotope({
    //     itemSelector: '.portfolio-item'
    //   });
    $(window).on('load', function() {
        var FAQIsotope = $('.faq-container').isotope({
            itemSelector: '.faq-list'
        });


        $('#portfolio-flters li').on('click', function() {
            $("#portfolio-flters li").removeClass('filter-type1');
            $(this).addClass('filter-type1');

            FAQIsotope.isotope({
                filter: $(this).data('filter')
            });
            aos_init();
        });

        // Initiate venobox (lightbox feature used in portofilo)
        $(document).ready(function() {
            $('.venobox').venobox({
                'share': false
            });
        });
    });

    // Portfolio details carousel
    $(".portfolio-details-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        items: 1
    });

    // Init AOS
    function aos_init() {
        AOS.init({
            duration: 1000,
            once: true
        });
    }
    $(window).on('load', function() {
        aos_init();
    });


})(jQuery);


//firebase

// firebase.initializeApp({
//     databaseURL: "https://hackathon-c32d0-default-rtdb.firebaseio.com/"
// });

var firebaseConfig = {
    apiKey: "AIzaSyDrxqp3Sz-JZAPFW6uZfRiwmbtCzcM4MGk",
    authDomain: "hackathon-c32d0.firebaseapp.com",
    databaseURL: "https://hackathon-c32d0-default-rtdb.firebaseio.com",
    projectId: "hackathon-c32d0",
    storageBucket: "hackathon-c32d0.appspot.com",
    messagingSenderId: "87309438119",
    appId: "1:87309438119:web:01c750d070a7651ef45f82",
    measurementId: "G-TVNM2ME4N9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref('/commons/type1/questions').on('value', e => {
    //console.log(e.val());
    let list = '';

    $.each(e.val(), function(i, item) {
        console.log(item)

        list = `${list}<li data-aos="fade-up" data-aos-delay="${i[1]}00">
        <i class="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" class="collapse" href="#faq-list-${i}">${item.subject}<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
        <div id="faq-list-${i}" class="collapse show" data-parent=".faq-list">
            <p> ${item.answer}
            </p>
        </div>
    </li>`;
        $('#faqclass1 ul').html(list);
    });
});

database.ref('/commons/type2/questions').on('value', e => {
    //console.log(e.val());
    let list = '';

    $.each(e.val(), function(i, item) {


        list = `${list}<li data-aos="fade-up" data-aos-delay="${i[1]}00">
      <i class="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" class="collapse" href="#faq-list-${i}">${item.subject}<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
      <div id="faq-list-${i}" class="collapse show" data-parent=".faq-list">
          <p> ${item.answer}
          </p>
      </div>
  </li>`;
        $('#faqclass2 ul').html(list);
    });
});

database.ref('/commons/type3/questions').on('value', e => {
    //console.log(e.val());
    let list = '';

    $.each(e.val(), function(i, item) {

        list = `${list}<li data-aos="fade-up" data-aos-delay="${i[1]}00">
      <i class="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" class="collapse" href="#faq-list-${i}">${item.subject}<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
      <div id="faq-list-${i}" class="collapse show" data-parent=".faq-list">
          <p> ${item.answer}
          </p>
      </div>
  </li>`;
        $('#faqclass3 ul').html(list);
    });
});

database.ref('/commons/type4/questions').on('value', e => {
    //console.log(e.val());
    let list = '';

    $.each(e.val(), function(i, item) {
        // console.log(i[1])

        list = `${list}<li data-aos="fade-up" data-aos-delay="${i[1]}00">
      <i class="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" class="collapse" href="#faq-list-${i}">${item.subject}<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
      <div id="faq-list-${i}" class="collapse show" data-parent=".faq-list">
          <p> ${item.answer}
          </p>
      </div>
  </li>`;
        $('#faqclass4 ul').html(list);
    });
});
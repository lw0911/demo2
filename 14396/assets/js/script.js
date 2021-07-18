(function ($) {

    "use strict";

    $(document).on('ready', function () {

        // Header Style and Scroll to Top
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 250) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }
        headerStyle();



        // dropdown menu
        $('.main-menu li.dropdown > a').on('click', function () {
            $(this).next('ul').slideToggle(300);
            $(this).parent('li').toggleClass('drop');
        });


        //Submenu Dropdown Toggle
        if ($('.main-menu li.dropdown ul').length) {
            $('.main-menu li.dropdown').append('<div class="dropdown-btn"><i class="fas fa-chevron-right"></i></div>');

            //Dropdown Button
            $('.main-menu li.dropdown .dropdown-btn').on('click', function () {
                $(this).prev('ul').slideToggle(300);
                $(this).parent('li').toggleClass('drop');
            });

            //Disable dropdown parent link
            $('.main-menu li.dropdown > a').on('click', function (e) {
                e.preventDefault();
            });
        }

        
        
        //Main Slider Carousel
        if ($('.main-slider-carousel').length) {
            $('.main-slider-carousel').owlCarousel({
                loop:true,
                items: 1,
                margin: 0,
                nav: false,
                dots: true,
                animateOut: 'slideOutDown',
                animateIn: 'fadeIn',
                active: true,
                smartSpeed: 1000,
                autoplay: 5000,			
            });    		
        }
        
        
        
        //Photography Carousel
        if ($('.photography-carousel').length) {
            $('.photography-carousel').owlCarousel({
                loop:true,
                items: 3,
                margin: 30,
                nav: true,
                dots: false,
                active: true,
                smartSpeed: 1000,
                autoplay: 5000,
                navText: ['<i class="flaticon-right-arrow"></i>', '<i class="flaticon-left-arrow"></i>'],
                responsive:{
                    0:{
                        items:1
                    },
                    768:{
                        items:2
                    },
                    990:{
                        items:3
                    }
                }
            });    		
        }
        
        
        //Team Carousel
        if ($('.team-carousel').length) {
            $('.team-carousel').owlCarousel({
                loop:true,
                items: 3,
                margin: 10,
                nav: false,
                dots: true,
                active: true,
                dotsEach: 2,
                smartSpeed: 1000,
                autoplay: 5000,
                responsive:{
                    0:{
                        items:1
                    },
                    620:{
                        items:2
                    },
                    990:{
                        items:3
                    }
                }
            });    		
        }
        
        
                
        
        //Testimonial Carousel
        if ($('.testimonial-carousel').length) {
            $('.testimonial-carousel').owlCarousel({
                loop:true,
                items: 1,
                margin: 0,
                nav: false,
                dots: true,
                animateOut: 'fadeOutDown',
                animateIn: 'fadeIn',
                active: true,
                smartSpeed: 1000,
                autoplay: 5000,
                mouseDrag: false,
            });    		
        }
        
        
        
        // News Carousel
        if ($('.news-carousel').length) {
            $('.news-carousel').owlCarousel({
                loop:true,
                items: 3,
                margin: 30,
                nav: true,
                dots: false,
                active: true,
                smartSpeed: 1000,
                autoplay: false,
                navText: ['<i class="flaticon-right-arrow"></i>', '<i class="flaticon-left-arrow"></i>'],
                responsive:{
                    0:{
                        items:1
                    },
                    768:{
                        items:2
                    },
                    990:{
                        items:3
                    }
                }
            });    		
        }
        
        
        // Gallery Three Carousel
        if ($('.gallery-three-carousel').length) {
            $('.gallery-three-carousel').owlCarousel({
                loop:true,
                items: 3,
                margin: 15,
                nav: true,
                dots: false,
                active: true,
                smartSpeed: 1000,
                autoplay: false,
                navText: ['<i class="flaticon-right-arrow"></i>', '<i class="flaticon-left-arrow"></i>'],
                responsive:{
                    0:{
                        items:1
                    },
                    768:{
                        items:2
                    },
                    990:{
                        items:3
                    }
                }
            });    		
        }
        
        
        
        //Gallery Four Carousel
        if ($('.gallery-four-carousel').length) {
            $('.gallery-four-carousel').owlCarousel({
                loop:true,
                items: 1,
                margin: 0,
                nav: false,
                dots: true,
                active: true,
                smartSpeed: 1000,
                autoplay: 5000,
                mouseDrag: false,
            });    		
        }
        
        
        
        
        // Client Carousel
        if ($('.client-carousel').length) {
            $('.client-carousel').owlCarousel({
                loop:true,
                margin: 30,
                nav: true,
                dots: false,
                active: true,
                smartSpeed: 1000,
                autoplay: 5000,
                navText: ['<i class="flaticon-right-arrow"></i>', '<i class="flaticon-left-arrow"></i>'],
                responsive:{
                    0:{
                        items:2
                    },
                    575:{
                        items:3
                    },
                    768:{
                        items:4
                    },
                    992:{
                        items:6
                    },
                    1200:{
                        items:7
                    }
                }
            });    		
        }
        
        
        // instagram magnific popup
        if ($.fn.magnificPopup) {
            $('.instagram-posts a').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true,
                    duration: 300,
                    easing: 'ease-in-out',
                    opener: function(openerElement) {
                        return openerElement.is('a') ? openerElement : openerElement.find('a');
                    }
                }
            });
        }
        
        
        // gallery Isotope Filtering
        $(".gallery-filter li").on('click', function () {
            $(".gallery-filter li").removeClass("current");
            $(this).addClass("current");

            var selector = $(this).attr('data-filter');
            $(".gallery-wrap").isotope({
                itemSelector: '.item',
                masonry: {
                    columnWidth: '.item'
                },
                filter: selector,
            });

        });
        

        
        // gallery magnific popup
        if ($.fn.magnificPopup) {
            $('.gallery-overlay .zoom').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true,
                    duration: 300,
                    easing: 'ease-in-out',
                    opener: function(openerElement) {
                        return openerElement.is('a') ? openerElement : openerElement.find('a');
                    }
                }
            });
        }
        
        
        
        // photography magnific popup
        if ($.fn.magnificPopup) {
            $('.photography-content a').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true,
                    duration: 300,
                    easing: 'ease-in-out',
                    opener: function(openerElement) {
                        return openerElement.is('a') ? openerElement : openerElement.find('a');
                    }
                }
            });
        }
        

        /* Fact Counter + Text Count */
        if ($('.success-box').length) {
            $('.success-box').appear(function () {

                var $t = $(this),
                    n = $t.find(".count-text").attr("data-stop"),
                    r = parseInt($t.find(".count-text").attr("data-speed"), 10);

                if (!$t.hasClass("counted")) {
                    $t.addClass("counted");
                    $({
                        countNum: $t.find(".count-text").text()
                    }).animate({
                        countNum: n
                    }, {
                        duration: r,
                        easing: "linear",
                        step: function () {
                            $t.find(".count-text").text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $t.find(".count-text").text(this.countNum);
                        }
                    });
                }

            }, {
                accY: 0
            });
        }

        
        
        //* Skill bar */
        if ($('.skillbar').length) {
            $(window).on('scroll.skillbar', function () {
                var stat = $('.skillbar');
                if ($(this).scrollTop() >= stat.offset().top - $(window).height() + 50) {
                    $('.skillbar').skillBars({
                        from: 0,
                        speed: 2000, 
                        interval: 100,
                        decimals: 0,
                    });
                    $(window).off('scroll.skillbar');
                }
            });
        }
        
        
        /*Video Magnific Popup */
        if ($.fn.magnificPopup) {
            $('.video-play').magnificPopup({
                type: 'video',
            });
        }
        
        
        
        /* custom audio player */
        $(function() {
          $('audio').audioPlayer();
        });
        

        // Scroll to a Specific Div
        if ($('.scroll-to-target').length) {
            $(".scroll-to-target").on('click', function () {
                var target = $(this).attr('data-target');
                // animate
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 1000);

            });
        }


        // main-menu open
        $(".menu-toggler button").on('click', function () {
            $('.main-header').addClass('open-menu');
        });
        // main-menu close
        $(".menu-close button").on('click', function () {
            $('.main-header').removeClass('open-menu');
        });


        // Elements Animation
        if ($('.wow').length) {
            var wow = new WOW({
                boxClass: 'wow', // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 0, // distance to the element when triggering the animation (default is 0)
                mobile: true, // trigger animations on mobile devices (default is true)
                live: true // act on asynchronously loaded content (default is true)
            });
            wow.init();
        }


    });

    
    
    /* ==========================================================================
       When document is resize, do
       ========================================================================== */

    $(window).on('resize', function () {
       
        

    });


    /* ==========================================================================
       When document is scroll, do
       ========================================================================== */

    $(window).on('scroll', function () {

        // Header Style and Scroll to Top
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 100) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }

        headerStyle();
        
        
    });

    /* ==========================================================================
       When document is loaded, do
       ========================================================================== */

    $(window).on('load', function () {

        //Hide Loading Box (Preloader)
        function handlePreloader() {
            if ($('.preloader').length) {
                $('.preloader').delay(200).fadeOut(500);
            }
        }
        handlePreloader();
        
         // Isotope active on gallery
        if ($('.gallery-wrap').length) {
            $('.gallery-wrap').isotope({
                // options
                itemSelector: '.item',
                masonry: {
                    columnWidth: '.item'
                }
            });
        }
        
        
    });



})(window.jQuery);

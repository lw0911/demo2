jQuery(document).ready(function($) {

    'use strict';
    
    /*=== section Scroll ====*/
    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $('.section-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 69
            }, 1000);
            event.preventDefault();
        });
    });
    
    /*=== clients ====*/
    $(".clients").owlCarousel({ 
        autoplay: true,
        loop: true,
        nav: true,
        margin: 20,
        navText: ['<i class="lnr lnr-chevron-left"></i>', '<i class="lnr lnr-chevron-right"></i>'],
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav: true
            },
            600:{
                items:3,
                nav: true
            },
            1000:{
                items:6,
                loop:true,
                nav: true,
            }
        }    
    });
    
});       
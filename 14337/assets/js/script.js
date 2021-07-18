(function ($) {

    "use strict";

    $(document).ready(function () {
        
        
        // Menu Height 
        function menuHeight() {
            var menuHeight = $('.main-header').innerHeight();
            $('.main-header + section').css('margin-top', menuHeight);
        }
        menuHeight();
        
        
        //Main Menu Close button
        if ($('.main-menu > ul').length) {
            $('.main-menu > ul').append('<button><i class="flaticon-cross"></i></button>');
        }
        
              
        //Main Menu dropdown
        if ($('.main-menu .dropdown > ul').length) {
            $('.main-menu .dropdown > ul').after('<div class="dropdown-btn"><span class="flaticon-add-plus-button"></span></div>');
        }
        
        // toggle dropdown menu
        $(".main-menu .dropdown-btn").on('click', function () {
            $(this).prev('ul').slideToggle();
        });
        
        // open main menu
        $(".main-menu > button").on('click', function () {
            $('.main-menu').addClass('open-menu');
            $('.menu-overlay').fadeIn();
        });
        
        // close main menu
        $(".main-menu ul > button").on('click', function () {
            $('.main-menu').removeClass('open-menu');
            $('.menu-overlay').fadeOut();
        });
        
        // close menu on click outside
        $(".menu-overlay").on('click', function () {
            $('.main-menu').removeClass('open-menu');
            $(this).fadeOut();
        });

        
        // collections dropdown
        $(".categories button").on('click', function () {
            $('.categories ul').slideToggle(300);
            $('.collection-close').show();
        });


        // collection items
        $(".collection-item i").on('click', function () {
            $(this).next('.collection-inner').toggle();
            $('.collection-close').show();
        });


        // close collection & Categories on click outside
        $(".collection-close").on('click', function () {
            $('.collection-inner').hide();
            $('.collection-close').hide();
            $('.categories ul').slideUp(300);
        });

        
        

        // hero Item Carousel
        if ($('.hero-slider').length) {
            $('.hero-slider').slick({
                dots: true,
                infinite: true,
                autoplay: false,
                arrows: false,
                pauseOnHover: false,
                autoplaySpeed: 2000,
                slidesToShow: 1,
                slidesToScroll: 1,
            });
        }

        
        //Four Item Carousel
        if ($('.special-offer-slider').length) {
            $('.special-offer-slider').slick({
                infinite: true,
                arrows: true,
                prevArrow: '<button class="center-array-prev"><i class="flaticon-angle-pointing-to-left"></i></button>',
                nextArrow: '<button class="center-array-next"><i class="flaticon-angle-arrow-pointing-to-right"></i></button>',
                pauseOnHover: false,
                autoplay: 2000,
                slidesToShow: 4,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1600,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            });
        }
        
        
        // Shop page Load More Ajax
        if($('.shop-items').length){
            $('.shop-items').simpleLoadMore({
              item: '.product',
              count: 12,
              itemsToLoad: 4,
              btnHTML: '<div class="blog-btn text-center w-100 mt-25 mb-30"><a href="blog.html" class="theme-btn br-30">Show More</a></div>'
            });
        }




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


        // Number Input Minus on Click
        $(".minus").on('click', function () {
            this.parentNode.querySelector('input[type=number]').stepDown();
        });

        // Number Input Plus on Click
        $(".plus").on('click', function () {
            this.parentNode.querySelector('input[type=number]').stepUp();
        });

        
        
        //  Price Totaling Function
        function priceTotaling() {
            var quantity = $(this).parent().find('input[type=number]').val();
            var price = $(this).parent().parent().find('.product-price').text();
            $(this).parent().parent().find('.product-total-price').text(quantity*price);
            
            var subTotal = 0;
            
            $('.product-total-price').each(function(){
                
                var singleVal = $(this).text();
                if($.isNumeric(singleVal)){
                    subTotal += parseFloat(singleVal);
                }
                
            });
            
            $('.sub-total .price').text(subTotal);
            
            var shipping = $('.shipping .price').text();
            var discount = $('.discount .price').text();
            
            $('.total .price').text((+subTotal) + (+shipping) - discount);

        }

        //  Cart Single Item box removed with Animation and Price Totaling
        $(".cart-single-item .close").on('click', function(){
            $(this).parent().fadeOut(500, function(){
                $(this).remove();
                priceTotaling();
            });
        });
        
        //  Price Totaling when product quantity increment or decrement
        $(".number-input button").on('click', priceTotaling);
        
        //  Price Totaling when input in product quantity number in input field
        $(".number-input").on('input', '.quantity', priceTotaling);


        // add-wishlist collections
        $(".add-wishlist").on('click', function () {
            $(this).toggleClass('wish');
        });

        
        // jQuery Nice Select
        $('select').niceSelect();


        // Elements Animation
        if ($('.wow').length) {
            var wow = new WOW({
                boxClass: 'wow', // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 0, // distance to the element when triggering the animation (default is 0)
                mobile: false, // trigger animations on mobile devices (default is true)
                live: true // act on asynchronously loaded content (default is true)
            });
            wow.init();
        }


    });

    
    
    /* ==========================================================================
       When document is resize, do
       ========================================================================== */

    $(window).on('resize', function () {
        
         
        // Menu Height 
        function menuHeight() {
            var menuHeight = $('.main-header').innerHeight();
            $('.main-header + section').css('margin-top', menuHeight);
        }
        menuHeight();
        
        

    });


    /* ==========================================================================
       When document is scroll, do
       ========================================================================== */

    $(window).on('scroll', function () {
        

        
        
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
        
    });



})(window.jQuery);

; (function () {

    'use strict';

    var carousels = function () {
        $(".owl-carousel").owlCarousel(
            {
                loop: true,
                margin: 0,
                responsiveClass: true,
                nav: false,
                dots: true,
                center: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: false
                    },
                    600: {
                        items: 1,
                        nav: false
                    },
                    1000: {
                        items: 3,
                        nav: false,
                        loop: true
                    }
                }
            }

        );

        $(".owl-carousel2").owlCarousel(
            {
                loop: true,
                margin: 20,
                responsiveClass: true,
                nav: false,
                dots: true,
                center: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: false
                    },
                    600: {
                        items: 2,
                        nav: false
                    },
                    1000: {
                        items: 3,
                        nav: false,
                        loop: true,
                        margin: 20
                    }
                }
            }

        );
    }


    var wowAnimate = function () {
        var wow = new WOW(
            {
                animateClass: 'animated',
                offset: 150,
                callback: function (box) {
                    console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
                }
            }
        );
        wow.init();
    };

    var parallax = function () {
        $('.parallax-window').parallax({ imageSrc: 'images/project-bg2.jpg' });
    };

    var browserCompatibility = function () {
        $('.gtco-head-right li .sp').each(function (index) {
            var characters = $(this).text().split("");

            var $this = $(this);
            $this.empty();
            $.each(characters, function (i, el) {
                $this.append("<span class='char'>" + el + "</span");
            });

        });
    };

    (function ($) {
        carousels();
        wowAnimate();
        parallax();
        browserCompatibility();
    })(jQuery);


}());

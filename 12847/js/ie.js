
// =============================================
//  Dropdown menu
// =============================================
jQuery(function ($) {

(function () {

    function getIEVersion() {
        var agent = navigator.userAgent;
        var reg = /MSIE\s?(\d+)(?:\.(\d+))?/i;
        var matches = agent.match(reg);
        if (matches != null) {
            return { major: matches[1], minor: matches[2] };
        }
        return { major: "-1", minor: "-1" };
    }

    var ie_version = getIEVersion();

    if (ie_version.major == 10) {
        $('html').addClass('ie10');
    }


    if ($('html').hasClass('ie9') || $('html').hasClass('ie10')) {

        $('.submenu-wrapper').each(function () {

            $(this).addClass('no-pointer-events');

        });

    }


    var timer;

    $('li.dropdown').on('mouseenter', function (event) {


        event.stopImmediatePropagation();
        event.stopPropagation();

        $(this).removeClass('open menu-animating').addClass('menu-animating');
        var that = this;


        if (timer) {
            clearTimeout(timer);
            timer = null;
        }


        timer = setTimeout(function () {

            $(that).removeClass('menu-animating');
            $(that).addClass('open');

        }, 300);   // 300ms as animation end time


    });

    // on mouse leave

    $('li.dropdown').on('mouseleave', function (event) {

        var that = this;

        $(this).removeClass('open menu-animating').addClass('menu-animating');


        if (timer) {
            clearTimeout(timer);
            timer = null;
        }

        timer = setTimeout(function () {

            $(that).removeClass('menu-animating');
            $(that).removeClass('open');

        }, 300);  // 300ms as animation end time

    });

}());

}());


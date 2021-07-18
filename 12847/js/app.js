 /* Template Options, change features functionality */
var templateOptions = function() {
    /*
     * Color Themes
     */
    var colorList = $('.sidebar-themes');
    var themeLink = $('#theme-link');
    var theme;

    if (themeLink.length) {
        theme = themeLink.attr('href');

        $('li', colorList).removeClass('active');
        $('a[data-theme="' + theme + '"]', colorList).parent('li').addClass('active');
    }

    $('a', colorList).click(function(e){
        // Get theme name
        theme = $(this).data('theme');

        $('li', colorList).removeClass('active');
        $(this).parent('li').addClass('active');

        if (theme === 'default') {
            if (themeLink.length) {
                themeLink.remove();
                themeLink = $('#theme-link');
            }
        } else {
            if (themeLink.length) {
                themeLink.attr('href', theme);
            } else {
                $('link[href="css/themes.css"]').before('<link id="theme-link" rel="stylesheet" href  ="' + theme + '">');
                themeLink = $('#theme-link');
            }
        }
    });

    // Prevent template options dropdown from closing on clicking options
    $('.dropdown-options a').click(function(e){ e.stopPropagation(); });
};

/* Initialize app when page loads */
$(function(){
    templateOptions();
});
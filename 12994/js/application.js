$(document).ready(function() {
'use strict';

/******************** STICKY NAVBAR ********************/
if ( matchMedia( 'only screen and (min-width: 768px)' ).matches ) {
   //Get navbar brand logo image
   var navLogoCh = function(imageName) {
      return $('.navbar-brand img').attr('src', 'images/' + imageName + '.png');
   };

   navLogoCh('logo-alt');

   $(document).on('scroll', function() {
      var scrollPos = $(this).scrollTop();

      if( scrollPos > 100 ) {
         $('.navbar-fixed-top').removeClass('navbar-anim');
         navLogoCh('logo');

      } else {
         $('.navbar-fixed-top').addClass('navbar-anim');
         navLogoCh('logo-alt');
      }
   });
}


/******************** VIDEO BG ********************/
var vidContainer = $('.video-bg').parent('body');

$(vidContainer).videoBG({
  position: 'fixed',
  zIndex:0,
  mp4:'video/video.mp4',
  ogv:'video/video.ogv',
  webm:'video/video.webm',
  poster:'video/video.jpg',
  opacity:1,
  fullscreen:true
});


/******************** MAIN NAV SCROLL ********************/
$('#main-nav').onePageNav();



/******************** OWL CAROOUSEL ********************/
$('#owl-screenshots').owlCarousel({
	margin: 30,
   loop: true,
   responsive: {
      0: {
         items: 1
      },
      481: {
         items: 2
      },
      768: {
         items: 3
      },
      992: {
         items: 4
      }
   }
   
});



/******************** AJAX SUBSCRIBE ********************/

$("#subscribe").ajaxChimp({
    callback: mailchimpCallback,
    url: "http://bdpark.us7.list-manage1.com/subscribe/post?u=d6649e6cfae99f3bc710a85a5&id=07db0b4bd6" // Replace your mailchimp post url inside double quote "".  
});

function mailchimpCallback(resp) {
     if(resp.result === 'success') {
        $('.home .success-msg')
            .html(resp.msg)
            .delay(500)
            .fadeIn(1000);

        $('.home .error-msg').fadeOut(500);
        
    } else if(resp.result === 'error') {
        $('.home .error-msg')
            .html(resp.msg)
            .delay(500)
            .fadeIn(1000);
            
        $('.home .success-msg').fadeOut(500);
    }  
};


// Function for email address validation
function isValidEmail(emailAddress) {

var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    return pattern.test(emailAddress);

};


/******************** AJAX CONTACT FORM ********************/

$("#contact-form").on('submit', function(e) {
    e.preventDefault();
    var data = {
        name: $('#contact-name').val(),
        email: $("#contact-email").val(),
        sub: $("#contact-sub").val(),
        message: $("#contact-msg").val(),
        dataString: 'name=' + $(this).name + '&email=' + $(this).email + '&sub=' + $(this).sub + '&message=' + $(this).message
    };

    if ( isValidEmail( data.email ) && (data.message.length > 1) && (data.name.length > 1) ) {
        $.ajax({
            type: "POST",
            url: "sendmail.php",
            data: data.dataString,
            success: function() {
                $('.get-in-touch .success-msg').delay(500).fadeIn(1000);
                $('.get-in-touch .error-msg').fadeOut(500);
            }
        });
    } else {
        $('.get-in-touch .error-msg').delay(500).fadeIn(1000);
        $('.get-in-touch .success-msg').fadeOut(500);
    }

    return false;
});



/******************** NIVO LIGHTBOX ********************/
$('.lightbox').nivoLightbox();


/******************** FIT VIDS ********************/
$('.video-container').fitVids();


/******************** SCROLL ANIMATION ********************/
window.sr = new scrollReveal();



});
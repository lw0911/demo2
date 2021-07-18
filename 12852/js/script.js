"use strict";

/**
 * navbar fixed top
 */
var navbar = $('.site-header');
var heroSection = $('.politics-slider');
var pageBanner = $('.page-banner');
//var origOffsetY = heroSection.offset().top;
var targetHeight;

if($('body').hasClass('home')){
	targetHeight = heroSection.offset().top + heroSection.height();
}else{
	targetHeight = pageBanner.offset().top + pageBanner.height();
}

function scroll() {


    if ($(window).scrollTop() >= targetHeight) {
        navbar.addClass('navbar-fixed-top');
        //$('body').css('padding-top', navbar.height());
    } else {
        navbar.removeClass('navbar-fixed-top');
        //$('body').css('padding-top', 0);
    }


}

document.onscroll = scroll;



/**
 * Initializing bootstrap carousel
 */

$('.carousel').carousel(); 


/* animated carousel */
//Function to animate slider captions 
function doAnimations( elems ) {
    //Cache the animationend event in a variable
    var animEndEv = 'webkitAnimationEnd animationend';
    
    elems.each(function () {
        var $this = $(this),
            $animationType = $this.data('animation');
        $this.addClass($animationType).one(animEndEv, function () {
            $this.removeClass($animationType);
        });
    });
}

//Variables on page load 
var $politicsCarousel = $('#politics-carousel'),
    $firstAnimatingElems = $politicsCarousel.find('.item:first').find("[data-animation ^= 'animated']");
    
//Initialize carousel 
$politicsCarousel.carousel();

//Animate captions in first slide on page load 
doAnimations($firstAnimatingElems);

//Pause carousel  
//$politicsCarousel.carousel('pause');


//Other slides to be animated on carousel slide event 
$politicsCarousel.on('slide.bs.carousel', function (e) {
    var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
    doAnimations($animatingElems);
});




// initializing smooth-scroll

smoothScroll.init({
	offset: 100
});


// calling testimonial carousel

$('#testimonial-carousel').slick({
	prevArrow: '<a class="carousel-nav prev-arrow"><span class="icon ion-ios-arrow-back"></span><span class="sr-only">Prev</span></a>',
	nextArrow: '<a class="carousel-nav next-arrow"><span class="icon ion-ios-arrow-forward"></span><span class="sr-only">Next</span></a>',
	
});


// election countdown
$('.event-counting').downCount({
    date: '08/27/2018 12:00:00',
    offset: -5
});

// facts block

$('.facts-block').waypoint(function(){

	$('.facts-content .timer').countTo();

}, { offset:500});

// donation counter

$('.donation-banner').waypoint(function(){
	$('.donation-banner .donation-amount h3').countTo();
}, { offset: 500 });



// bootstrap carousel, making image to background image

$('#politics-carousel .carousel-bg').each(function(){
	var imgSrc = $(this).attr('src');

	$(this).parent().css('background-image', 'url(' + imgSrc + ')');

	$(this).remove();
});


// initializing the google map


if( $('body').hasClass('contact-page')){



	function initialize() {
	var mapCanvas = document.getElementById('google-map'),
		myPos = new google.maps.LatLng(23.782095, 90.3290822);

	var mapOptions = {
	  center: myPos,
	  zoom: 8,
	  mapTypeId: google.maps.MapTypeId.ROADMAP,
	  scrollwheel: false
	}
	var map = new google.maps.Map(mapCanvas, mapOptions);


	var marker = new google.maps.Marker({
	   position: myPos,
	   map: map,
	   title: "Politics"
	});

	marker.setMap(map);

	}
	google.maps.event.addDomListener(window, 'load', initialize);


}


/**
 * CONTACT FORM PROCESSING
 */

$(function() {
    // Here is the form
    var form = $('#politics-contact');

    // Getting the messages div
    var formMessages = $('.form-message p');

    // Setting up an event listener for the contact form
	$(form).submit(function(event) {
	    // Stopping the browser to submit the form
	    event.preventDefault();
	    
	    // Serializing the form data
		var formData = $(form).serialize();

		// Submitting the form using AJAX
		$.ajax({
		    type: 'POST',
		    url: $(form).attr('action'),
		    data: formData
		}).done(function(response) {
			
		    // Making the formMessages div to have the 'success' class
		    $(formMessages).removeClass('error');
		    $(formMessages).addClass('success');

		    // Setting the message text
		    $(formMessages).text(response);

		    // Clearing the form after successful submission 
		    $('#name').val('');
		    $('#email').val('');
		    $('#url').val('');
		    $('#message').val('');
		}).fail(function(data) {
			
		    // Making the formMessages div to have the 'error' class
		    $(formMessages).removeClass('success');
		    $(formMessages).addClass('error');

		    // Setting the message text
		    if (data.responseText !== '') {
		        $(formMessages).text(data.responseText);
		    } else {
		        $(formMessages).text('Oops! An error occured and your message could not be sent.');
		    }
		});

	});

});
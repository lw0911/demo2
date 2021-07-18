

	$(document).ready(function() {	
		if($('.close').length > 0){
			$('.close').click(function () {
				$('#video').hide();
				$('#video iframe').attr("src", jQuery("#video iframe").attr("src"));
			});
		}	
	});	

	
	$(document).ready(function() {	
		if($('.navbar-onepage .nav a').length > 0){	
			$('.navbar-onepage .nav a').on('click', function(){								
				if ($(window).width() < 991) {
				   $('.btn-navbar').click(); //bootstrap 2.x
					$('.navbar-toggle').click() //bootstrap 3.x by Richard
				}
				else {
				   return;
				}								
			});	
		}	
	});	

	
	//gmaps
	
	$(document).ready(function() {	
		if($('#map').length > 0){			
			map = new GMaps({
			  div: '#map',
			  zoom: 16,
			  lat: -12.043333,
			  lng: -77.028333,
			  infoWindow: {
				  content: '<p>HTML Content</p>'
				}
			});
			
			map.addMarker({
			  lat: -12.043333,
			  lng: -77.028333,
			  title: 'Lima',
			  infoWindow: {
				  content: '<h5>Kepler Home Office</h5> <p> Silicon Valley California, USA</p> <p>Tel #: +123 456 789</p>'
				}
			});
			
		}	
	});	

	//prevent # links from moving to top
	
	$('a[href="#"][data-top!=true]').click(function(e){
		e.preventDefault();
	});
	
	
	//	SMOOTH SCROLL
	$(document).ready(function() {	
		smoothScroll.init({
			offset: 80
		});
	});
	
	
	// COUNTER
	$(document).ready(function() {	
		if($('.counter').length > 0){
			$('.counter').counterUp({
				delay: 100,
				time: 5000
			});
		 }	
	});
	
	
	
	// BACKSTRETCH
	
	$(document).ready(function() {	
		if($('.business-banner').length > 0){
			$(".business-banner").backstretch([
			"images/banner1.jpg"
			, "images/banner2.jpg"
			, "images/banner3.jpg"
			], {duration: 4000, fade: 1000});
		 }	
	});
	
	
	//	SCROLL

	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();

		if (scroll >= 200) {
			$(".kepler-nav").addClass("navbar-scroll");
		} else {
			$(".kepler-nav").removeClass("navbar-scroll");
		}
				
	});
	
	
	
	//	ONEPAGE ACTIVE LINK
	
	jQuery(document).ready(function() {
	
		var sections = $('section')
		  , nav = $('nav')
		  , nav_height = nav.outerHeight();
		 
		$(window).on('scroll', function () {
		  var cur_pos = $(this).scrollTop();
		 
		  sections.each(function() {
			var top = $(this).offset().top - nav_height,
				bottom = top + $(this).outerHeight();
		 
			if (cur_pos >= top && cur_pos <= bottom) {
			  nav.find('a').removeClass('active');
			  sections.removeClass('active');
		 
			  $(this).addClass('active');
			  nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
			}
		  });
		});
	});
	
	
	
	
	//paste this code under the head tag or in a separate js file.
	// Wait for window load
	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
	});
	
	
	
	
	$(document).ready(function() {	
	if($('#contactForm').length > 0){
    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // something to have when submit produces an error ?
            // Not decided if I need it yet
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            var email = $("input#email").val();
            var message = $("textarea#message").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "contact-process.php",
                type: "POST",
                data: {
                    name: name,
                    email: email,
                    message: message
                },
                cache: false,
                success: function() {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("Your message has been sent.");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("Sorry " + firstName + " it seems that my mail server is not responding... Could you please email me directly to <a href='mailto:me@example.com?Subject=Message_Me from myprogrammingblog.com;>me@example.com</a> ? Sorry for the inconvenience!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
	
	 }
	
});
	
	
	
	
	
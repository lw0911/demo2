jQuery(window).load(function() {
	jQuery('#preloader').delay(0).fadeOut(100);// will fade out the white DIV that covers the website.
}) 

 jQuery(document).ready(function() {
    // "use strict";
     
	 // Owl Carousel for clients
	
	if(jQuery('.clients-carousel').length){
    jQuery('.clients-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        margin:10,
        dots:true,
        navigation:true,
        navigationText: ["<i class='fa fa-angle-right'></i>","<i class='fa fa-angle-left'></i>"],
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            400:{
                items:1
            },
            600:{
                items:3
            },
            992:{
                items:5
            }
        }
    });
	}
	
    
           
     
       
	
	// Owl Carousel for achivement-carousel
	if(jQuery('.achivement-carousel').length){
    jQuery('.achivement-carousel').owlCarousel({
        loop:true,
        pagination:false,
        navigation:true,
        navigationText: ["<i class='fa fa-angle-right'></i>","<i class='fa fa-angle-left'></i>"],
        autoPlay:false,
        items : 4,
        responsive:{
            0:{
                items:1
            },
            400:{
                items:1
            },
            600:{
                items:3
            }
        }
    });
	}
	
	// Owl Slider "some of my achivement"
	if(jQuery('#owl-partner').length){
	jQuery('#owl-partner').owlCarousel({
            loop:true,
            margin:0,
            autoplay:true,
            pagination : false,
            navigation:true,
            navigationText: ["<i class='fa fa-angle-right'></i>","<i class='fa fa-angle-left'></i>"],
            responsive:{
                320:{
                    items:1
                },
                480:{
                    items:2
                },
                768:{
                    items:3
                },
                992:{
                    items:5
                }
            }
        });
		}
		
		
		// home three lovely-clients
		if(jQuery('#owl-lovely-clients').length){
		jQuery('#owl-lovely-clients').owlCarousel({
            loop:true,
            margin:0,
            autoplay:true,
            pagination : true,
            navigation:true,
            navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            responsive:{
                320:{
                    items:1
                },
                480:{
                    items:2
                },
                768:{
                    items:3
                },
                992:{
                    items:5
                }
            }
        }); 
		}
   
	   //pretty photo//

		if(jQuery('.image-link').length){
			jQuery("a[data-gal^='prettyPhoto']").prettyPhoto();
		}
    

    
	// home three google map slider
		if(jQuery('#owl-map-slider').length){
			jQuery('#owl-map-slider').owlCarousel({
				loop:true,
				margin:0,
				autoplay:true,
				pagination:false,
				navigation:true,
				navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
				autoplayHoverPause: true,
				singleItem:true
			});
			}
	// Blog slider
		if(jQuery('#owl-blog-slider').length){
			jQuery('#owl-blog-slider').owlCarousel({
				loop:true,
				margin:0,
				autoplay:true,
				pagination:false,
				navigation:true,
				navigationText: ["<i class='fa fa-angle-right'></i>","<i class='fa fa-angle-left'></i>"],
				autoplayHoverPause: false,
				singleItem:true
			});
		}
	
	
		// home three expand menu
	   jQuery(".hidden-menu").hide();
			jQuery("#hide").click(function(){
			jQuery(".hidden-menu").delay(10).toggle( "slide", { direction: "right"  }, 1000);
		});
	// Various color part
	  jQuery(".icon-fixed").click(function(){
		  jQuery( ".color-code" ).toggleClass( "opens", 500);
			  
	  });
      
	
	//Contact page slider
	if(jQuery('#owl-comtact-map').length){
        jQuery('#owl-comtact-map').owlCarousel({
            loop:true,
            pagination:false,
            navigation:true,
            navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            autoplay:false,
            items : 2,
            responsive:{
                0:{
                    items:1
                },
                400:{
                    items:1
                },
                600:{
                    items:1
                }
            }
        });
	}



	// jQuery MixItUp home page one
    if(jQuery('.practice-filter').length){
    jQuery('.practice_all_item').mixItUp(); 
    
    }
    
	// jQuery MixItUp home page three
     if(jQuery('.practice_all_item-home-three').length){
    jQuery('.practice_all_item-home-three').mixItUp(); 
    }
	
	
	// jQuery counter
    if(jQuery('.counter').length){
        jQuery('.counter').counterUp({
        delay: 50,
        time: 3000
        });   
    }
    
	// Thumb slider Blog
	if(jQuery('.flexslider').length){
    jQuery('.flexslider').flexslider({
        animation: "slide",
        controlNav: "thumbnails"
    });
	}
   
   


	if(jQuery('.side-nav').length){
		jQuery('.side-nav').affix({
			offset: {     
			  top: $('.side-nav').offset().top,
			  bottom: ($('footer').outerHeight(true) + $('.application').outerHeight(true)) + 65
			}
		});
	}

    jQuery('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        jQuery('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    
	
	//Free Case Evaluation Drop Down menu
	 jQuery(".custom-select").each(function(){
            jQuery(this).wrap("<span class='select-wrapper'></span>");
            jQuery(this).after("<span class='holder'></span>");
        });
        jQuery(".custom-select").change(function(){
            var selectedOption = $(this).find(":selected").text();
            jQuery(this).next(".holder").text(selectedOption);
        }).trigger('change');
		
		// rs slider
	if(jQuery('.tp-banner').length){
			 jQuery('.tp-banner').revolution({
				delay:9000,
				startwidth:1170,
				startheight:700,
				navigationType:"bullet",
				navigationArrows:"solo",
				hideThumbs:10,
				fullWidth:"on",
				fullScreen:"on",
				forceFullWidth:"on"
			});
		}
		
	jQuery('#totop').fadeOut();
       jQuery(window).scroll(function(){
			if ($(this).scrollTop() > 750) {
				$('#totop').fadeIn();
			} else {
				$('#totop').fadeOut();
			}
		}); 
		jQuery('#totop').click(function(){
			$("html, body").animate({ scrollTop: 0 }, 600);
			return false;
		});
		
		//progressbar
		if(jQuery('#skills').length){
			jQuery('.about-us-skill').waypoint(function(direction) {
			  jQuery('progress').each(function() {
					var max = $(this).val();
					jQuery(this).val(0).animate({ value: max }, { duration: 1000});
				});
			},  
{ 
    triggerOnce: true ,
	offset: '100%'
});
		}
		
		 
}(jQuery)); 


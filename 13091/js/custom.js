
/* Navbar script */
$(window).scroll(function(){

	if($(window).scrollTop() > 30) {
		  $('.navbar').addClass('navbar-bg');
	  } 
		else{
			$('.navbar').removeClass('navbar-bg');
		}
		
	});

if($(window).scrollTop() > 30){
	$('.navbar').addClass('navbar-bg');
}

/* clients logo */
$(".clients-logo").owlCarousel({ 
    autoplay: true,
    loop: true,
    nav: false,
    margin: 0,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
        },
        600:{
            items:4,
        },
        1000:{
            items:6,
            loop:true,
        }
    }    
});

/* skillbars */
jQuery('.skillbar').each(function(){
    jQuery(this).find('.skillbar-bar').animate({
        width:jQuery(this).attr('data-percent')
    },1000);
});

/* Scroll script */
$(function() {
    $('a.scrollto').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 57
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

/* portfolio */
jQuery(window).on("load resize",function(e){
	var $container = $('.portfolio-items'),
	colWidth = function () {
		var w = $container.width(), 
		columnNum = 1,
		columnWidth = 0;
        
	//Select what will be your porjects columns according to container width
	if (w > 1040)     { columnNum  = 4; }  
	else if (w > 850) { columnNum  = 3; }  
	else if (w > 768) { columnNum  = 2; }  
	else if (w > 480) { columnNum  = 2; }
	else if (w > 300) { columnNum  = 1; }
	columnWidth = Math.floor(w/columnNum);

	//Default item width and height
	$container.find('.single-item').each(function() {
		var $item = $(this), 
		width = columnWidth,
		height = columnWidth;
		$item.css({ width: width, height: height });
	}); 

	return columnWidth;
	},
	isotope = function () {
		$container.isotope({
			resizable: true,
			itemSelector: '.single-item',
			masonry: {
				columnWidth: colWidth(),
				gutterWidth: 10
			}
		});
	};
	isotope(); 

	// bind portfolio filter list click
	$('.portfolio-filter').on( 'click', 'li', function() {
		var filterValue = $( this ).attr('data-filter');
		$container.isotope({ filter: filterValue });
	});

	// change active class on list
	$('.portfolio-filter').each( function( i, buttonGroup ) {
		var $buttonGroup = $( buttonGroup );
		$buttonGroup.on( 'click', 'li', function() {
			$buttonGroup.find('.active').removeClass('active');
			$( this ).addClass('active');
		});
	}); 

});

/*=== home slide ====*/  
$(function() {
			
    $('#da-slider').cslider({
        autoplay	: true,
        bgincrement	: 550
    });

});

/*=== testimonial slide ====*/  
    $(".testimonial-slide").owlCarousel({  
        autoplay: true,
        loop:true,
        margin:10,
        nav: true,
        navText: ['<i class="icon ion-ios-arrow-thin-left"></i>', '<i class="ion ion-ios-arrow-thin-right"></i>'],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:true
            },
            1000:{
                items:2,
                nav:true,
                loop:true
            }
        }
    });

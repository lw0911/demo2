/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Scrolling
5. Init Isotope


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var header = $('.header');

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();

		setTimeout(function()
		{
			$(window).trigger('resize.px.parallax');

			var w = $(window).innerWidth();

			if(w < 992)
			{
				$('.models_container').isotope(
				{
					itemSelector:'.model',
					masonry:
					{
						columnWidth: $('.models_container').width() / 2
					}
				});
			}
			else if(w < 576)
			{
				$('.models_container').isotope(
				{
					itemSelector:'.model',
					masonry:
					{
						columnWidth: $('.models_container').width()
					}
				});
			}
			else
			{
				$('.models_container').isotope(
				{
					itemSelector:'.model',
					masonry:
					{
						columnWidth: $('.models_container').width() / 5
					}
				});
			}
		}, 375);

			
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	initMenu();
	initScrolling();
	initIsotope();

	/* 

	2. Set Header

	*/

	function setHeader()
	{
		if($(window).scrollTop() > 91)
		{
			header.addClass('scrolled');
		}
		else
		{
			header.removeClass('scrolled');
		}
	}

	/* 

	3. Init Menu

	*/

	function initMenu()
	{
		if($('.menu').length)
		{
			var menu = $('.menu');
			var hamburger = $('.hamburger');
			var close = $('.menu_close');

			hamburger.on('click', function()
			{
				menu.toggleClass('active');
			});

			close.on('click', function()
			{
				menu.toggleClass('active');
			});
		}
	}

	/* 

	4. Init Scrolling

	*/

	function initScrolling()
	{
		if($('.scroll_to').length)
		{
			var links = $('.scroll_to');
	    	links.each(function()
	    	{
	    		var ele = $(this);
	    		var target = ele.data('scroll-to');
	    		ele.on('click', function(e)
	    		{
	    			e.preventDefault();
	    			$(window).scrollTo(target, 1500, {offset: -75, easing: 'easeInOutQuart'});
	    		});
	    	});
		}	
	}

	/* 

	5. Init Isotope

	*/

	function initIsotope()
	{
		if($('.models_container').length)
		{
			var models = $('.models_container');
			var w = $(window).innerWidth();

			if(w < 992)
			{
				models.isotope(
				{
					itemSelector:'.model',
					masonry:
					{
						columnWidth: models.width() / 2
					}
				});
			}
			else if(w < 576)
			{
				models.isotope(
				{
					itemSelector:'.model',
					masonry:
					{
						columnWidth: models.width()
					}
				});
			}
			else
			{
				models.isotope(
				{
					itemSelector:'.model',
					masonry:
					{
						columnWidth: models.width() / 5
					}
				});
			}

			// Filtering
	        $('.item_filter_btn').on('click', function()
	        {
	        	$('.item_filter_btn').removeClass('active');
	        	$(this).addClass('active');
		        var filterValue = $(this).attr('data-filter');
				models.isotope(
				{
					filter: filterValue
				});
	        });
		}
	}

});
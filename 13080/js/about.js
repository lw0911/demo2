/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Scrolling
5. Init Testimonials Slider


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
		}, 375);

			
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	initMenu();
	initScrolling();
	initTestSlider();

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

	5. Init Testimonials Slider

	*/

	function initTestSlider()
	{
		if($('.test_slider').length)
		{
			var testSlider = $('.test_slider');
			testSlider.owlCarousel(
			{
				items:1,
				loop:true,
				autoplay:true,
				nav:false
			});

			/* Custom dots events */
			if($('.test_slider_custom_dot').length)
			{
				$('.test_slider_custom_dot').on('click', function()
				{
					$('.test_slider_custom_dot').removeClass('active');
					$(this).addClass('active');
					testSlider.trigger('to.owl.carousel', [$(this).index(), 1200]);
				});
			}

			/* Change active class for dots when slide changes by nav or touch */
			testSlider.on('changed.owl.carousel', function(event)
			{
				$('.test_slider_custom_dot').removeClass('active');
				$('.test_slider_custom_dots li').eq(event.page.index).addClass('active');
			});
		}
	}

});
/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Home Slider
5. Init Milestones
6. Init Isotope
7. Init Model Slider


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var header = $('.header');
	var ctrl = new ScrollMagic.Controller();

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
	initHomeSlider();
	initMilestones();
	initIsotope();
	initModelSlider();

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

	4. Init Home Slider

	*/

	function initHomeSlider()
	{
		if($('.home_slider').length)
		{
			var homeSlider = $('.home_slider');
			homeSlider.owlCarousel(
			{
				items:1,
				loop:true,
				autoplay:true,
				smartSpeed:1200,
				mouseDrag:false,
				nav:false
			});

			/* Custom dots events */
			if($('.home_slider_custom_dot').length)
			{
				$('.home_slider_custom_dot').on('click', function()
				{
					$('.home_slider_custom_dot').removeClass('active');
					$(this).addClass('active');
					homeSlider.trigger('to.owl.carousel', [$(this).index(), 1200]);
				});
			}

			/* Change active class for dots when slide changes by nav or touch */
			homeSlider.on('changed.owl.carousel', function(event)
			{
				$('.home_slider_custom_dot').removeClass('active');
				$('.home_slider_custom_dots li').eq(event.page.index).addClass('active');
			});

			// add animate.css class(es) to the elements to be animated
			function setAnimation ( _elem, _InOut )
			{
				// Store all animationend event name in a string.
				// cf animate.css documentation
				var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

				_elem.each ( function ()
				{
					var $elem = $(this);
					var $animationType = 'animated ' + $elem.data( 'animation-' + _InOut );

					$elem.addClass($animationType).one(animationEndEvent, function ()
					{
						$elem.removeClass($animationType); // remove animate.css Class at the end of the animations
					});
				});
			}

			// Fired before current slide change
			homeSlider.on('change.owl.carousel', function(event)
			{
				var $currentItem = $('.home_slider_item', homeSlider).eq(event.item.index);
				var $elemsToanim = $currentItem.find("[data-animation-out]");
				setAnimation ($elemsToanim, 'out');
			});

			// Fired after current slide has been changed
			homeSlider.on('changed.owl.carousel', function(event)
			{
				var $currentItem = $('.home_slider_item', homeSlider).eq(event.item.index);
				var $elemsToanim = $currentItem.find("[data-animation-in]");
				setAnimation ($elemsToanim, 'in');
			});

			// Custom Nav
			if($('.home_slider_prev').length)
			{
				var prev = $('.home_slider_prev');
				prev.on('click', function()
				{
					homeSlider.trigger('prev.owl.carousel');
				});
			}

			if($('.home_slider_next').length)
			{
				var next = $('.home_slider_next');
				next.on('click', function()
				{
					homeSlider.trigger('next.owl.carousel');
				});
			}
		}
	}

	/* 

	5. Init Milestones

	*/

	function initMilestones()
	{
		if($('.milestone_counter').length)
		{
			var milestoneItems = $('.milestone_counter');

	    	milestoneItems.each(function(i)
	    	{
	    		var ele = $(this);
	    		var endValue = ele.data('end-value');
	    		var eleValue = ele.text();

	    		/* Use data-sign-before and data-sign-after to add signs
	    		infront or behind the counter number */
	    		var signBefore = "";
	    		var signAfter = "";

	    		if(ele.attr('data-sign-before'))
	    		{
	    			signBefore = ele.attr('data-sign-before');
	    		}

	    		if(ele.attr('data-sign-after'))
	    		{
	    			signAfter = ele.attr('data-sign-after');
	    		}

	    		var milestoneScene = new ScrollMagic.Scene({
		    		triggerElement: this,
		    		triggerHook: 'onEnter',
		    		reverse:false
		    	})
		    	.on('start', function()
		    	{
		    		var counter = {value:eleValue};
		    		var counterTween = TweenMax.to(counter, 4,
		    		{
		    			value: endValue,
		    			roundProps:"value", 
						ease: Circ.easeOut, 
						onUpdate:function()
						{
							document.getElementsByClassName('milestone_counter')[i].innerHTML = signBefore + counter.value + signAfter;
						}
		    		});
		    	})
			    .addTo(ctrl);
	    	});
		}
	}

	/* 

	6. Init Isotope

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

	/* 

	7. Init Model Slider

	*/

	function initModelSlider()
	{
		if($('.model_slider').length)
		{
			var modelSlider = $('.model_slider');
			modelSlider.owlCarousel(
			{
				items:1,
				loop:true,
				autoplay:true,
				nav:false,
				dots:false
			});

			// Custom Nav
			if($('.model_slider_prev').length)
			{
				var prev = $('.model_slider_prev');
				prev.on('click', function()
				{
					modelSlider.trigger('prev.owl.carousel');
				});
			}

			if($('.model_slider_next').length)
			{
				var next = $('.model_slider_next');
				next.on('click', function()
				{
					modelSlider.trigger('next.owl.carousel');
				});
			}
		}
	}

});
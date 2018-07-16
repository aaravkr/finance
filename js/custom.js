$(function($){

	"use strict";

	/*
	|----------------------------------------------------------------------------
	| STICKY NAVBAR
	|----------------------------------------------------------------------------
	*/
	
	if ( matchMedia( 'only screen and (min-width: 991px)' ).matches ) {
	   $(document).on('scroll', function() {
		  var scrollPos = $(this).scrollTop();

		  if( scrollPos > 140 ) {
			 $('.navbar').addClass('navbar-fixed-top');
			  $('.navbar.navbar-2').removeClass('navbar-transparent');
		  } else {
			 $('.navbar').removeClass('navbar-fixed-top');
			  $('.navbar.navbar-2').addClass('navbar-transparent');
		  }
	   });
	}

	/*==========================================================
	Revolution Slider(Index-1)
	===========================================================*/
  
	var revapi; 
	revapi = jQuery("#rev_slider_1").revolution({
		sliderType:"standard",
		sliderLayout:"fullwidth",
		responsiveLevels:[4096,1280,770,480],
		delay:9000,
		navigation: {
			touch:{
				touchenabled:"on",
				swipe_threshold: 75,
				swipe_min_touches: 1,
				swipe_direction: "horizontal",
				drag_block_vertical: false
			},
			arrows:{
				enable:true
			},
			bullets:{
				enable:false,
				hide_onmobile:false,
				style:"border-radius: 50%",
				hide_onleave:false,
				direction:"horizontal",
				h_align:"center",
				v_align:"bottom",
				h_offset:0,
				v_offset:40,
				space:20,
				tmp:'<span class="tp-bullet-inner"></span>'
			}
		},      
		gridwidth:[1140,930,720,300],
		gridheight:[625,500,500,400]			    
	});

	/*==========================================================
	Revolution Slider(Index-2)
	===========================================================*/
  
	var revapi; 
	revapi = jQuery("#rev_slider_2").revolution({
		sliderType:"standard",
		sliderLayout:"fullwidth",
		responsiveLevels:[4096,1400,992,768],
		delay:9000,
		navigation: {
			touch:{
				touchenabled:"on",
				swipe_threshold: 75,
				swipe_min_touches: 1,
				swipe_direction: "horizontal",
				drag_block_vertical: false
			},
			arrows:{
				enable:true
			},
			bullets:{
				enable:true,
				hide_onmobile:false,
				style:"border-radius: 50%",
				hide_onleave:false,
				direction:"horizontal",
				h_align:"center",
				v_align:"bottom",
				h_offset:0,
				v_offset:40,
				space:20,
				tmp:'<span class="tp-bullet-inner"></span>'
			}     
		},      
		gridwidth:[1140,1140,720,320],
		gridheight:[750,750,600,400]    
	});

	/*==========================================================
	Revolution Slider(Index-3)
	===========================================================*/
  
	var revapi; 
	revapi = jQuery("#rev_slider_3").revolution({
		sliderType:"standard",
		sliderLayout:"fullwidth",
		responsiveLevels:[4096,1400,992,768],
		delay:9000,
		navigation: {
			touch:{
				touchenabled:"on",
				swipe_threshold: 75,
				swipe_min_touches: 1,
				swipe_direction: "horizontal",
				drag_block_vertical: false
			},
			arrows:{
				enable:true
			},
			bullets:{
				enable:true,
				hide_onmobile:false,
				style:"border-radius: 50%",
				hide_onleave:false,
				direction:"horizontal",
				h_align:"center",
				v_align:"bottom",
				h_offset:0,
				v_offset:40,
				space:20,
				tmp:'<span class="tp-bullet-inner"></span>'
			}     
		},      
		gridwidth:[1140,1140,720,320],
		gridheight:[880,750,600,500]  
	});
  
	/*==========================================================
	Revolution Slider(Index-4)
	===========================================================*/
  
	var revapi; 
	revapi = jQuery("#rev_slider_4").revolution({
		sliderType:"standard",
		sliderLayout:"fullscreen",
		fullScreenOffsetContainer:"#header",
		responsiveLevels:[4096,1600,992,768],
		delay:9000,
		navigation: {
			touch:{
				touchenabled:"on",
				swipe_threshold: 75,
				swipe_min_touches: 1,
				swipe_direction: "horizontal",
				drag_block_vertical: false
			},
			arrows:{
				enable:true
			},
			bullets:{
				enable:false,
				hide_onmobile:false,
				style:"border-radius: 50%",
				hide_onleave:false,
				direction:"horizontal",
				h_align:"center",
				v_align:"bottom",
				h_offset:0,
				v_offset:40,
				space:20,
				tmp:'<span class="tp-bullet-inner"></span>'
			}
		},      
		gridwidth:[1140,1140,720,320],
		gridheight:[750,750,600,400]    
	});
  
	/*==========================================================
	Revolution Slider(Index-5)
	===========================================================*/
  
	var revapi; 
	revapi = jQuery("#rev_slider_5").revolution({
		sliderType:"standard",
		sliderLayout:"fullscreen",
		fullScreenOffsetContainer:"#header",
		responsiveLevels:[4096,1600,992,768],
		delay:9000,
		navigation: {
			touch:{
				touchenabled:"on",
				swipe_threshold: 75,
				swipe_min_touches: 1,
				swipe_direction: "horizontal",
				drag_block_vertical: false
			},
			arrows:{
				enable:true
			},
			bullets:{
				enable:false,
				hide_onmobile:false,
				style:"border-radius: 50%",
				hide_onleave:false,
				direction:"horizontal",
				h_align:"center",
				v_align:"bottom",
				h_offset:0,
				v_offset:40,
				space:20,
				tmp:'<span class="tp-bullet-inner"></span>'
			}
		},      
		gridwidth:[1140,1140,720,320],
		gridheight:[750,750,600,400]    
	});

	/*
	|----------------------------------------------------------------------------
	| MIXITUP FOR PORTFOLIO 
	|----------------------------------------------------------------------------
	*/

	$('#project-mixitup').mixItUp({
		layout: {
		  display: 'block'
		}
	});

	/*
	|----------------------------------------------------------------------------
	|   RELATED WORKS
	|----------------------------------------------------------------------------
	*/
	
	var related_works_carousel = $('#related-works-carousel');
	related_works_carousel.owlCarousel({
		items:3,
		loop:true,
		margin:30,
		autoplay:true,
		navigation:true,
		autoplayHoverPause:true,
		nav: true,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:3
			}
		}
	});

	/*
	|----------------------------------------------------------------------------
	| PARTNER START HERE
	|----------------------------------------------------------------------------
	*/
	
	$('#partner-carousel').owlCarousel({
		items:6,
		loop: true,
		margin: 30,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:2
			},
			600:{
				items:3
			},
			1000:{
				items:6
			}
		}
	})

	/*
	|----------------------------------------------------------------------------
	| TEAM CAROUSEL START HERE
	|----------------------------------------------------------------------------
	*/

	var team_carousel = $('#team-carousel');
	team_carousel.owlCarousel({
		items: 4,
		loop: true,
		margin: 30,
		nav: true,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:4
			}
		}
	});

	/*
	|----------------------------------------------------------------------------
	| TESTIMONIAL CAROUSEL START HERE
	|----------------------------------------------------------------------------
	*/

	var testimonial_carousel = $('#testimonial_carousel');
	testimonial_carousel.owlCarousel({
		items: 1,
		nav: true,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', 
		'<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		loop: true,
		autoplayHoverPause:true,
	});

	/*
	|----------------------------------------------------------------------------
	| TESTIMONIAL CAROUSEL START HERE
	|----------------------------------------------------------------------------
	*/
	
	var testimonial_carousel = $("#testimonial_carousel_style_2");
 
	testimonial_carousel.owlCarousel({
		items : 1,
		pagination: true,
		nav:false,
		dots: true
	});

	/*
	|----------------------------------------------------------------------------
	|   COUNTERUP JS
	|----------------------------------------------------------------------------
	*/

	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});

	/*
	|----------------------------------------------------------------------------
	|   MAGNIFIC JS
	|----------------------------------------------------------------------------
	*/
  
	$('.image-large').magnificPopup({
		type: 'image'
	});
  
	$('.play-video').magnificPopup({
		type: 'iframe'
	});
  
	$.extend(true, $.magnificPopup.defaults, {
		iframe: {
			patterns: {
				youtube: {
					index: 'youtube.com/', 
					id: 'v=', 
					src: 'http://www.youtube.com/embed/%id%?autoplay=1' 
				}
			}
		}
	});
	/*-----------------------------------------------
			Ajax Contact Form
	------------------------------------------------- */
	function isValidEmail(emailAddress) {
	var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

		return pattern.test(emailAddress);

	};
	$(".form-common").on('submit', function(e) {
		e.preventDefault();
		var data = {
			name: $("#name").val(),
			phone: $("#phone").val(),
			email: $("#email").val(),
			subject: $("#subject").val(),
			message: $("#message").val()
		};

		if (isValidEmail(data['email']) && (data['message'].length > 1) && (data['name'].length > 1) ) {
			$.ajax({
				type: "POST",
				url: "sendmail.php",
				data: data,
				success: function() {
					$('.form-common .input-success').delay(500).fadeIn(1000);
					$('.form-common .input-error').fadeOut(500);
				}
			});
		} else {
			$('.form-common .input-error').delay(500).fadeIn(1000);
			$('.form-common .input-success').fadeOut(500);
		}

		return false;
	});
    
 // '.tbl-content' consumed little space for vertical scrollbar, scrollbar width depend on browser/os/platfrom. Here calculate the scollbar width .
$(window).on("load resize ", function() {
  var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
  $('.tbl-header').css({'padding-right':scrollWidth});
}).resize();
	
}(jQuery));
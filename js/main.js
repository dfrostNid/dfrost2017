/** 
 * ===================================================================
 * Main js
 *
 * ------------------------------------------------------------------- 
 */ 

(function($) {

	"use strict";

	/* --------------------------------------------------- */
	/* Preloader
	------------------------------------------------------ */ 
   $(window).load(function() {
      // will first fade out the loading animation 
    	$("#loader").fadeOut("slow", function(){

        // will fade out the whole DIV that covers the website.
        $("#preloader").delay(300).fadeOut("slow");

      }); 
  	})

  if($(window).width()>768) {
	  $(document).ready(function() {
	  $(".rippler").rippler({
	    effectClass      :  'rippler-effect'
	    ,effectSize      :  16      // Default size (width & height)
	    ,addElement      :  'div'   // e.g. 'svg'(feature)
	    ,duration        :  400
	  });
	});
}
  	/*---------------------------------------------------- */
	/* FitVids
	------------------------------------------------------ */ 
  	$(".fluid-video-wrapper").fitVids();


	/* --------------------------------------------------- */
	/*  Vegas Slideshow
	------------------------------------------------------ */
	$(".home-slides").vegas({
		transition: 'fade',
		transitionDuration: 2500,
		delay: 5000,
    	slides: [
       	{ src: "images/slides/03.jpg" },
        	{ src: "images/slides/02.jpg" },
        	{ src: "images/slides/01.jpg" }
    	]
	});


	/* --------------------------------------------------- */
	/*  Particle JS
	------------------------------------------------------ */
	$('.home-particles').particleground({
	   dotColor: '#982cff',/*'#982cff'*/
	   lineColor: '#17ffdd',
	   particleRadius: 5,
	   curveLines: true,
	   density: 10000,
	   proximity: 10
	}); 


	/*-----------------------------------------------------*/
	/* tabs
  	-------------------------------------------------------*/	
	$(".tab-content").hide();
	$(".tab-content").first().show();

	$("ul.tabs li").click(function () {
	   $("ul.tabs li").removeClass("active");
	   $(this).addClass("active");
	   $(".tab-content").hide();
	   var activeTab = $(this).attr("data-id");
	   $("#" + activeTab).fadeIn(700);
	});


	/*----------------------------------------------------*/
  	/* Smooth Scrolling
  	------------------------------------------------------*/
  	$('.smoothscroll').on('click', function (e) {
	 	
	 	e.preventDefault();

   	var target = this.hash,
    	$target = $(target);

    	$('html, body').stop().animate({
       	'scrollTop': $target.offset().top
      }, 800, 'swing', function () {
      	window.location.hash = target;
      });

  	});


  	/* --------------------------------------------------- */
	/*  Placeholder Plugin Settings
	------------------------------------------------------ */
	$('input, textarea, select').placeholder()  


  	/*---------------------------------------------------- */
   /* ajaxchimp
	------------------------------------------------------ */

	// Example MailChimp url: http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
	var mailChimpURL = 'http://facebook.us8.list-manage.com/subscribe/post?u=cdb7b577e41181934ed6a6a44&amp;id=e65110b38d'

	$('#mc-form').ajaxChimp({

		language: 'es',
	   url: mailChimpURL

	});

	// Mailchimp translation
	//
	//  Defaults:
	//	 'submit': 'Submitting...',
	//  0: 'We have sent you a confirmation email',
	//  1: 'Please enter a value',
	//  2: 'An email address must contain a single @',
	//  3: 'The domain portion of the email address is invalid (the portion after the @: )',
	//  4: 'The username portion of the email address is invalid (the portion before the @: )',
	//  5: 'This email address looks fake or invalid. Please enter a real email address'

	$.ajaxChimp.translations.es = {
	  'submit': 'Submitting...',
	  0: '<i class="fa fa-check"></i> We have sent you a confirmation email',
	  1: '<i class="fa fa-warning"></i> You must enter a valid e-mail address.',
	  2: '<i class="fa fa-warning"></i> E-mail address is not valid.',
	  3: '<i class="fa fa-warning"></i> E-mail address is not valid.',
	  4: '<i class="fa fa-warning"></i> E-mail address is not valid.',
	  5: '<i class="fa fa-warning"></i> E-mail address is not valid.'
	}


	/*---------------------------------------------------- */
	/*	contact form
	------------------------------------------------------ */

	/* local validation */
	$('#contactForm').validate({

		/* submit via ajax */
		submitHandler: function(form) {

			var sLoader = $('#submit-loader');

			$.ajax({      	

		      type: "POST",
		      url: "inc/sendEmail.php",
		      data: $(form).serialize(),
		      beforeSend: function() { 

		      	sLoader.fadeIn(); 

		      },
		      success: function(msg) {

	            // Message was sent
	            if (msg == 'OK') {
	            	sLoader.fadeOut(); 
	               $('#message-warning').hide();
	               $('#contactForm').fadeOut();
	               $('#message-success').fadeIn();   
	            }
	            // There was an error
	            else {
	            	sLoader.fadeOut(); 
	               $('#message-warning').html(msg);
		            $('#message-warning').fadeIn();
	            }

		      },
		      error: function() {

		      	sLoader.fadeOut(); 
		      	$('#message-warning').html("Something went wrong. Please try again.");
		         $('#message-warning').fadeIn();

		      }

	      });     		
  		}

	});


	/*----------------------------------------------------*/
	/* Final Countdown Settings
	------------------------------------------------------ */
	var finalDate = '2018/01/01';

	$('div#counter').countdown(finalDate)
   	.on('update.countdown', function(event) {

   		$(this).html(event.strftime('<div class=\"half\">' +
   											 '<span>%D <sup>days</sup></span>' + 
   										 	 '<span>%H <sup>hours</sup></span>' + 
   										 	 '</div>' +
   										 	 '<div class=\"half\">' +
   										 	 '<span>%M <sup>mins</sup></span>' +
   										 	 '<span>%S <sup>secs</sup></span>' +
   										 	 '</div>'));

   });     

   	$.extend({
	 		 getWidth: function(bool)
            {
                var w = $(window).width() ;
                if(bool) w = $(window).width();
                return w; 
            },
            
            getHeight: function(bool)
            {
                var h = $(window).height() ;
                if(bool) h = $(window).height();
                
                
                return h;
            },
	 		getHalfWidth: function()
            {
                return parseInt($.getWidth() * .5);
            },
            
            getHalfHeight: function()
            {
                return parseInt($.getHeight() * .5);
            }
        }
	)
	
	function addLogoMovement()
    {
        var logoBackHolder = document.getElementById('logo_back');
        var logoMidHolder = document.getElementById('logo_mid');
        var logoFrontHolder = document.getElementById('logo_front');
        
        var offsetTiny = 25, offsetMid = 30, offsetBig = 35; // offsetCloud = 200;
        
         	
            $("html").unbind("mousemove");
            $("html").bind("mousemove",function(e)
            {
                
                var x = e.clientX, y = e.clientY;
                var middleX = $.getHalfWidth(), middleY = $.getHalfHeight();
                
                if(x < middleX) x = -(middleX - x);
                else x = x - middleX;
                
                if(y < middleY) y = -(middleY - y);
                else y = y - middleY;
                
                var tinyX = -(parseInt((x / middleX) * offsetTiny)), tinyY = -(parseInt((y / middleY) * offsetTiny));
                var midX = -(parseInt((x / middleX) * offsetMid)), midY = -(parseInt((y / middleY) * offsetMid));
                var bigX = -(parseInt((x / middleX) * offsetBig)), bigY = -(parseInt((y / middleY) * offsetBig));
            
                var logoBackX = -100 + tinyX;
                var logoBackY = 100 + tinyY;
				var logoMidX = -100 + midX; 	
				var logoMidY = 100 + midY;
                var logoFrontX = -100 + bigX; 	
                var logoFrontY = 100 + bigY;

                TweenMax.to(logo_back,1,{marginLeft:logoBackX,top:logoBackY,ease:Expo.easeOut});
                TweenMax.to(logo_mid,1,{marginLeft:logoMidX,top:logoMidY,ease:Expo.easeOut});
                TweenMax.to(logo_front,1,{marginLeft:logoFrontX,top:logoFrontY,ease:Expo.easeOut});
                               
            })
        
        }

	
    $(document).ready(function()
        {
        	if($(window).width()>768) {
            	addLogoMovement();
        	}
            $(document).delegate('.open', 'click', function(event){
				$(this).addClass('oppenned');
				event.stopPropagation();
			})
			$(document).delegate('body', 'click', function(event) {
				$('.open').removeClass('oppenned');
			})
			$(document).delegate('.cls', 'click', function(event){
				$('.open').removeClass('oppenned');
				event.stopPropagation();
			});
        });


 

})(jQuery);
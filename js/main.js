/** 
 * ===================================================================
 * Main js
 *
 * ------------------------------------------------------------------- 
 */ 
//Nav switch
$(document).ready (function() {

  //reset the navbar to hide elemnets by default
  $('#hamburger-menu').hide();
  $('#menu').hide();

  if(window.innerWidth < 1200){
    $('#hamburger-menu').show();
    $('#menu').hide();  
    console.log("hamburger menu"+window.innerWidth);  
  }
  else if (window.innerWidth >= 1200){
    $('#menu').show();
    $('#hamburger-menu').hide();
    console.log("navbar menu"+window.innerWidth);
  }
});

$(window).resize(function() {

  if ($(this).innerWidth() < 1200) {

    $('#menu').hide();
    $('#hamburger-menu').show();
    console.log("hamburger menu"+window.innerWidth);


  } 
  else if($(this).innerWidth() >= 1200) {

    $('#menu').show();
    $('#hamburger-menu').hide();
    console.log("navbar menu"+window.innerWidth);
    }

});
//Nav switch ends here

//Countdown timer
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);
//Coountdown timer ends


(function($) {

  "use strict";

  /*--START REVEAL ON SCROLL SCRIPT--*/
  var $window           = $(window),
      win_height_padded = $window.height() * 1.1,
      isTouch           = Modernizr.touch;

  if (isTouch) { $('.revealOnScroll').addClass('animated'); }

  $window.on('scroll', revealOnScroll);

  function revealOnScroll() {
    var scrolled = $window.scrollTop(),
        win_height_padded = $window.height() * 1.1;

    // Showed...
    $(".revealOnScroll:not(.animated)").each(function () {
      var $this     = $(this),
          offsetTop = $this.offset().top;

      if (scrolled + win_height_padded > offsetTop) {
        if ($this.data('timeout')) {
          window.setTimeout(function(){
            $this.addClass('animated ' + $this.data('animation'));
          }, parseInt($this.data('timeout'),10));
        } else {
          $this.addClass('animated ' + $this.data('animation'));
        }
      }
    });
    // Hidden...
   $(".revealOnScroll.animated").each(function (index) {
      var $this     = $(this),
          offsetTop = $this.offset().top;
      if (scrolled + win_height_padded < offsetTop) {
        $(this).removeClass('animated fadeInUp fadeInDown')
      }
    });
  }

  revealOnScroll();
  /*--END REVEAL ON SCROLL SCRIPT--*/


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


/* Rippler effect*/
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

  /*function resize_canvas(){
            canvas = document.getElementsByClassName("home-particles");
            if (canvas.width  < window.innerWidth)
            {
                canvas.width  = window.innerWidth;
            }

            if (canvas.height < window.innerHeight)
            {
                canvas.height = window.innerHeight;
            }
        }*/

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
  //   'submit': 'Submitting...',
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
  /*  contact form
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
            
                var logoBackX = -120 + tinyX;
                var logoBackY = 100 + tinyY;
        var logoMidX = -120 + midX;   
        var logoMidY = 100 + midY;
                var logoFrontX = -120 + bigX;   
                var logoFrontY = 100 + bigY;

                TweenMax.to(logo_back,1,{marginLeft:logoBackX,top:logoBackY,ease:Expo.easeOut});
                TweenMax.to(logo_mid,1,{marginLeft:logoMidX,top:logoBackY,ease:Expo.easeOut});
                TweenMax.to(logo_front,1,{marginLeft:logoFrontX,top:logoBackY,ease:Expo.easeOut});
                               
            })
        
        }

  
  
    $(document).ready(function()
        {
          
            addLogoMovement();
           
            $(document).delegate('.open', 'click', function(event){
        $(this).addClass('oppenned');
        //$(this).attr('id','close');
        event.stopPropagation();
      })
      $(document).delegate('body', 'click', function(event) {
        $('.open').removeClass('oppenned');
      })
      $(document).delegate('#cls', 'click', function(event){
        $('.open').removeClass('oppenned');
        //$('.open').removeAttr('id');
        event.stopPropagation();
      });
        });


 

})(jQuery);





/*One Page Navigation JQuery*/
$(document).ready(function($) {
 
  // Hook up the current state to the nav bar
  $('.page-navigation').onePageNav();
  
});

//Navbar element underline hide when top is reached

var waypoint = new Waypoint({
  element: document.getElementById('menu'),
  handler: function(direction) {    
    if(direction == 'up') {
      //notify('Direction: ' + direction)
      //console.log("working");
      $('#a').addClass('hidden');
      console.log("hidden");
    }
  }
})


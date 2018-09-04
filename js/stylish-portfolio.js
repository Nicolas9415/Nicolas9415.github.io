(function($) {
  "use strict"; // Start of use strict

  // Closes the sidebar menu
  $(".menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    $(this).toggleClass("active");
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('#sidebar-wrapper .js-scroll-trigger').click(function() {
    $("#sidebar-wrapper").removeClass("active");
    $(".menu-toggle").removeClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
  });

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();

    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  $(document).on("scroll",function()
  {
    var scrollD=$(this).scrollTop();
    if(scrollD >730)
    {
      $(document).off("scroll");
      $('#progressbar1').LineProgressbar({
        percentage: 85,
        width: '100%',
        duration: 3000,
        height: '20px',
        radius: '15px',
        fillBackgroundColor: '#e67e22'

    });
    $('#progressbar2').LineProgressbar({
        percentage: 65,
        width: '100%',
        duration: 3000,
        height: '20px',
        radius: '15px',
        fillBackgroundColor: '#e67e22'


    });
    $('#progressbar3').LineProgressbar({
        percentage: 45,
        width: '100%',
        duration: 3000,
        height: '20px',
        radius: '15px',
        fillBackgroundColor: '#e67e22'


    });
    $('#progressbar4').LineProgressbar({
        percentage: 40,
        width: '100%',
        duration: 3000,
        height: '20px',
        radius: '15px',
        fillBackgroundColor: '#e67e22'


    });
    $('#progressbar').LineProgressbar({
        percentage: 60,
        width: '100%',
        duration: 3000,
        height: '20px',
        radius: '15px',
        fillBackgroundColor: '#e67e22'


    }); 

    }
  });


}


)(jQuery);
 // End of use strict

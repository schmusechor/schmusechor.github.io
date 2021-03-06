/*!
 * Based on Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});

$(function(){
      $(".typed-tag").typed({
          strings: ["zum Tanzen",
                    "zum Träumen",
                    "♬ la la la la ♬",
                    "zum Schmusen",
                    "zum Lieben",
                    "♬ come on skinny love ♬",
                    "zum Küssen",
                    "zum Mitwippen",
                    "♬ ich will doch nur schmusen ♬",
                    "zum Umarmen",
                    "mit dem Schlafzimmerblick",
                    "♬ dass du süßer träumen kannst! ♬"],
          backDelay: 750,
          typeSpeed: 80,
          loop: true,
      });
  });

  $('.show_all').click(function(){
    $(this).text(function(i,old){
        return old=='alle anzeigen' ?  'highlights anzeigen' : 'alle anzeigen';
    });
});
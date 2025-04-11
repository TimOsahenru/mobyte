(function ($) {
  "use strict";

  // Initialize text on page load
$(document).ready(function() {
  var $colorModeText = $('.color-mode span');
  if ($('body').hasClass('dark-mode')) {
      $colorModeText.text('Light mode');
  } else {
      $colorModeText.text('Dark mode');
  }
});

    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active');
        $('body').toggleClass('dark-mode');
        
        // Update the text
        var $colorModeText = $(this).find('span'); // or use a specific selector
        if ($('body').hasClass('dark-mode')) {
            $colorModeText.text('Light mode');
        } else {
            $colorModeText.text('Dark mode');
        }
    });

    // HEADER
    $(".navbar").headroom();


    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);
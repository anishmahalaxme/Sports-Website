$(document).ready(function() {
    const scrollBtn = $("#scroll-to-top");
  
    // Event listener for scrolling
    $(window).scroll(function() {
      if ($(window).scrollTop() > 300 && $(window).scrollTop() < $(document).height() - $(window).height()) {
        scrollBtn.show();  // Show the button when scrolling
      } else {
        scrollBtn.hide();  // Hide the button when at the top or bottom
      }
    });
  });
  
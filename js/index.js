    /* JavaScript for Navigation */
      $(document).ready(function(){
        $('.togglemenu').click(function(){
          $('.fa-times').toggleClass('active');
          $('.fa-bars').toggleClass('active');          
          $('nav').toggleClass('active');            
        });   
      });
      /* JavaScript for Scroll top menu */
      $(window).scroll(function(){
        if($(this).scrollTop()>130){
          $(".stickynavber").addClass("sticky");
        }
        else{
          $(".stickynavber").removeClass("sticky");
        }
      });
    /* JavaScript for CounterUp */
      $('.counter').counterUp({
        delay: 10,
        time: 2000
      });

 /* JavaScript for ScrollTop hash div */
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 2000, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

/* JavaScript for Owl Carousel */
$("#course-slider").owlCarousel({
  items: 3,
  itemsDesktop:[1199,3],
  itemsDesktopSmall:[599,1],
  pagination:false,
  navigationTest:false,
  autoPlay:true,
});
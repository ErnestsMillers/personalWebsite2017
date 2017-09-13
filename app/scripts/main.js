
$(function() {
	// $('.spinner').delay(1000).slideUp(function() {
    	$('#loader').fadeOut(2000);
	// });

	function fade(pageLoad) {
    var windowBottom = $(window).scrollTop() + $(window).innerHeight();
    var min = 0.0;
    var max = 1;
    var threshold = 0.01;
    
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + 250;
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")<=min+threshold || pageLoad) {$(this).fadeTo(500,max);}
      }
    });
  } fade(true); //fade elements on page-load
  $(window).scroll(function(){fade(false);}); //fade elements on scroll

    $('.chart').easyPieChart({
        scaleColor: "#e8eaf6",
        lineWidth: 12,
        lineCap: 'round',
        barColor: '#536dfe',
        trackColor: "#ffffff",
        size: 160,
        animate: 500
    });

    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });

    $('#isotope-controls').on('click', 'div', function() {
    	var toFilter = $(this).data('filter');
    	$grid.isotope({ filter: toFilter });
    });

    $('a[href="#about"], a[href="#portfolio"]').on('click', function(event) {
	    var target = $(this.getAttribute('href'));
	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').stop().animate({
	            scrollTop: target.offset().top
	        }, 1000);
	    }
	});
});
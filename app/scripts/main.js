
$(function() {
	$('.spinner').delay(1000).slideUp(function() {
    	$('#loader').fadeOut(2000);
	});

    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });

    $('#isotope-controls').on('click', 'div', function() {
    	var toFilter = $(this).data('filter');
    	$grid.isotope({ filter: toFilter });
    });

    $('a[href="#about"], a[href="#skills"], a[href="#blog"], a[href="#portfolio"], a[href="#contact"], a[href="#landing"]').on('click', function(event) {
	    var target = $(this.getAttribute('href'));
	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').stop().animate({
	            scrollTop: target.offset().top
	        }, 1000);
	    }
	});

	window.sr = ScrollReveal();
	sr.reveal('.scrollreveal', {duration: 1000,});
	sr.reveal('.graphs', { beforeReveal: function(el) {
      $('.chart').easyPieChart({
	        scaleColor: "#e8eaf6",
	        lineWidth: 12,
	        lineCap: 'round',
	        barColor: '#536dfe',
	        trackColor: "#ffffff",
	        size: 160,
	        animate: 2000
	    });
    }}, 250);
    sr.reveal('.each', 250);


    $( window ).scroll(function() {
    	if ($( window ).scrollTop() > 0) {
    		$('nav').addClass('scrolled-nav');
    		$('#go-to-blog, #centered-nav > li > a, #navbar-brand').addClass('scrolled-nav-color');
    	} else {
    		$('nav').removeClass('scrolled-nav');
    		$('#go-to-blog, #centered-nav > li > a, #navbar-brand').removeClass('scrolled-nav-color');

    	}
	});
});
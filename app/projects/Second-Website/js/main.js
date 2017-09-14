var options = {
  //segmentShowStroke: false,
  percentageInnerCutout: 70,
  //animation: true,
  animationEasing: 'easeOutQuint',
  //animateRotate: false,
  animateScale: true
};
var data = {
  html_css: [
    { value: 85, color: "hsl(120, 39%, 54%)" },
    { value: 15, color: "hsl(120, 10%, 90%)" }
  ],
  sass: [
    { value: 70, color: "hsl(120, 39%, 54%)" },
    { value: 30, color: "hsl(120, 10%, 90%)" }
  ],
  jquery: [
    { value: 40, color: "hsl(120, 39%, 54%)" },
    { value: 60, color: "hsl(120, 10%, 90%)" }
  ],
  rails: [
    { value: 50, color: "hsl(120, 39%, 54%)" },
    { value: 50, color: "hsl(120, 10%, 90%)" }
  ],
  backbone: [
    { value: 30, color: "hsl(120, 39%, 54%)" },
    { value: 70, color: "hsl(120, 10%, 90%)" }
  ],
  photoshop: [
    { value: 60, color: "hsl(120, 39%, 54%)" },
    { value: 40, color: "hsl(120, 10%, 90%)" }
  ]
};


    var offset = 0;
    $.each(data, function(key, data) {
      var canvas = document.querySelector('#' + key);
      if(canvas) {
        offset += 250;
        setTimeout(function() {
          var ctx = canvas.getContext('2d');
          var chart = new Chart(ctx);
          chart.Doughnut(data, options);
        }, offset);
      }
    });


$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

$(document).ready(function(){

	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 500) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});

	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

});

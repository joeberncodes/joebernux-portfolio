$(document).ready(function(){
  $('.owl-carousel-slideshow').owlCarousel({
  	items: 1,
  	nav: true,
  	loop:true

  });
  $('.owl-carousel-homepage').owlCarousel({
  	autoplay:true,
  	loop: true,
  	autoWidth:true,
  	margin: 20,
  	autoplayHoverPause: true,

  	responsive: {
  		0: {
  			items:1
  		},
  		768: {
  			items:3
  		}
  	}

  });
});


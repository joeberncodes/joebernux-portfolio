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
  $('.owl-carousel-sketches').owlCarousel({
    autoplay: false,
    loop: true,
    items: 1,
    centered: true,
    margin: 10
  })
});


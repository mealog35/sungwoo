$(document).ready(function () {

	// main slide section
	var slideIndex = 0;

	autoSlide();

	function autoSlide() {

		var i;
		var slide = $('.slideshow_container');
		var num_line = $('.slide_icon_right span');


		for (i = 0; i < slide.length; i++) {
			slide.eq(i).css({
				'display': 'none'
			});
		}


		slideIndex++;


		if (slideIndex > slide.length) {
			slideIndex = 1;
		}

		slide.eq(slideIndex - 1).stop().show();


		num_line.eq(slideIndex - 1).css({
			'border-bottom': '#fff',
			'color': '#fff',
			'font-size': '200%'
		});
		num_line.eq(slideIndex - 2).css({
			'border-bottom': '#ccc',
			'color': '#ccc',
			'font-size': '100%'
		});
		num_line.eq(slideIndex - 3).css({
			'border-bottom': '#ccc',
			'color': '#ccc',
			'font-size': '100%'
		});

		setTimeout(autoSlide, 2000);

	};
	

	
	//intro section
	$('.intro_title a').stop().hide();
	$('.intro_title').mouseenter(function(){
		$('.intro_title a').stop().fadeIn();
	});
	$('.intro_title').mouseleave(function(){
		$('.intro_title a').stop().fadeOut();
	});
	
	
	
	
	
	
});

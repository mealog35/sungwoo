//헤더 스크립트
$(function(){
	$('.korean').click(function(e){
		e.preventDefault();
		$('.korean').css({'display':'none'});
		$('.english').css({'display':'block'});
	});
	$('.english').click(function(e){
		e.preventDefault();
		$('.english').css({'display':'none'});
		$('.korean').css({'display':'block'});
	});
	$('.search_icon').click(function(e){
		e.preventDefault();
		$('.search').css({'display':'block'});
	});
	$('.search_close').click(function(e){
		e.preventDefault();
		$('.search').css({'display':'none'});
	});
});
//자동슬라이더 스크립트
$(function(){
	var mainSlider = $('.slide_gallery').bxSlider({
		auto: true,
		pause: 5000,
		speed: 800,
		moveSlides:1,
		controls:false,
		/*onSlideLoad: function(currentIndex){
    		$('.slide_gallery').eq(currentIndex+1);
			console.log(currentIndex);
		},*/
    	onSlideAfter: function($slideElement, newIndex){
    		
//			console.log($slideElement, newIndex);
			
			var classNew = newIndex
			if(classNew==0){
				$('.slide_label').eq(0).removeClass('slide_page_label');
				$('.slide_label').eq(1).addClass('slide_page_label');
			};
			if(classNew==1){
				$('.slide_label').eq(1).removeClass('slide_page_label');
				$('.slide_label').eq(2).addClass('slide_page_label');
			}
			if(classNew==2){
				$('.slide_label').eq(2).removeClass('slide_page_label');
				$('.slide_label').eq(0).addClass('slide_page_label');
			}
		}
	});
	//슬라이더 컨트롤러
	$('.prev').click(function(e){
		e.preventDefault();
		mainSlider.goToPrevSlide();
		return false;
	});
	$('.next').click(function(e){
		e.preventDefault();
		mainSlider.goToNextSlide();
		return false;
	});
	
});

//플레이 버튼(재생,정지)모양
$(function(){
	var video = $('#sw_video');
	var btn = $('#play_btn');
	$(btn).click(function(){
		if(video.get(0).paused){
		   video.get(0).play();
			$(this).html('<i class="fa fa-pause-circle-o" aria-hidden="true"></i>');
			$(btn).mouseleave(function(){
				$(btn).css({'opacity':'0'});
			});
			$(btn).mouseover(function(){
				$(btn).css({'opacity': '0.8'});
			});
		}else{
		   video.get(0).pause();
			$(this).html('<i class="fa fa-play-circle-o" aria-hidden="true"></i>');
			$(btn).mouseleave(function(){
				$(btn).css({'opacity':'0.5'});
			});
		};
	});
});

//푸터 슬라이드
/*$(function(){
	$('.footer_banner').simplyScroll();
});*/
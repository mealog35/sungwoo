    var slideIndex =1;
showSlide(slideIndex);

function plusSlides(num){
  showSlide(slideIndex += num);  
}
function showSlide(num){
    var i;
    var slide = $('.background img');
   
   
    //1.좌우화살표 클릭시 이미지 슬라이드 구현
//  1-1.만약 매개변수값이 3보다 (슬라이드박스갯수)보디 크게되면 변수값1로 세팅
//  (num>3이상이 되면 sludeIndex값 1로 세팅)
    if(num>slide.length){
       slideIndex =1;
       }
//    1-2.만약 매개변수값이 마이너스 값이면 변수값은 슬라이드 갯수로 세팅
    
    if(num<1){
       slideIndex = slide.length;
       }
    //2.수동 이미지 슬라이드 구현 
    //2-1.모든 슬라이드 이미지를 가려줌 
    for(i=0;i<slide.length;i++){
       slide.eq(i).css({'display':'none'});
        $('#dot'+(i+1) ).css({'background-color':'#fff'}); 
    }
//    2-2.로딩시 첫번째 이미지 슬라이드만 보기기
    slide.eq(slideIndex-1).css({'display':'block'});
//     console.log(slideIndex);
    $('#dot'+slideIndex).css({'background-color':'red'});
} 







$(function() {
            $('.korean').click(function() {
                $('.korean').css({
                    'display': 'none'
                });
                $('.english').css({
                    'display': 'block'
                });
            });
            $('.english').click(function() {
                $('.english').css({
                    'display': 'none'
                });
                $('.korean').css({
                    'display': 'block'
                });
            });
            $('.search_icon').click(function() {
                $('.search').css({
                    'display': 'block'
                });
            });
            $('.search_close').click(function() {
                $('.search').css({
                    'display': 'none'
                });
            })
        })

	var $banner = $(".footer_banner").find("ul");

	var $bannerWidth = $banner.children().outerWidth();
	var $bannerHeight = $banner.children().outerHeight();
	var $length = $banner.children().length;
	var rollingId;


	rollingId = setInterval(function () {
		rollingStart();
	}, 2500);

	function rollingStart() {
		$banner.css("width", $bannerWidth * $length + "px");
		$banner.css("height", $bannerHeight + "px");

		$banner.animate({
			left: -$bannerWidth + "px"
		}, 400, function () {
			$(this).append("<li>" + $(this).find("li:first").html() + "</li>");

			$(this).find("li:first").remove();

			$(this).css("left", 0);
		});
	}

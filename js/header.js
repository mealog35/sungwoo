 $(function () {
 	$('.korean').click(function () {
 		$('.korean').css({
 			'display': 'none'
 		});
 		$('.english').css({
 			'display': 'block'
 		});
 	});
 	$('.english').click(function () {
 		$('.english').css({
 			'display': 'none'
 		});
 		$('.korean').css({
 			'display': 'block'
 		});
 	});
 	$('.search_icon').click(function () {
 		$('.search').css({
 			'display': 'block'
 		});
 	});
 	$('.search_close').click(function () {
 		$('.search').css({
 			'display': 'none'
 		});
 	})
 });

// function scrollSlide(element, newClass, originElement){
// 	$(window).scroll(function(){
// 		var scroll = $(window).scrollTop();
// 		var os = $(originElement).offset().top;
// 		var ht = $(originElement).height();
// 		if(scroll > os + ht){
// 			$(element).addClass(newClass);
// 			return "sdf";
// 		}
// 	});
// }



$(document).ready(function(){

	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		var os = $('.landing').offset().top;
		var ht = $('.landing').height();
		if(scroll > os + ht){
			$('.navbar').addClass('navbar-color');
		} else if (scroll < os + ht) {
			$('.navbar').removeClass('navbar-color');
		}
	});

	
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		var os = $('.feedback').offset().top;
		var ht = $('.feedback').height() / 2;
		if(scroll > os + ht){
			$('.graphic-stats').addClass('graphic-stats-slide');
			// scrollFar($('.graphic-stats-slide'));
		}
	});
});
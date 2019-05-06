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

	// function scrollFar(element){
	// 	element.addClass('graphic-stats-slide');
	// }
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		var os = $('.feedback').offset().top;
		var ht = $('.feedback').height() / 1.5;
		if(scroll > os + ht){
			$('.graphic-stats').addClass('graphic-stats-slide');
			// scrollFar($('.graphic-stats-slide'));
		}
	});
});
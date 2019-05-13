$(document).ready(function(){
	$('body').scrollspy();

	function setNavColorOnLoad(){
		var scrollPage = $(window).scrollTop();
		var originalScroll = $('body').offset().top;
		var pageHeight = $('body').height();
		if(scrollPage > originalScroll + pageHeight){
			$('.navbar').addClass('navbar-color');
		}
	}

	function setNavItemActiveClick(){
		$('.nav-item').on("click", function(){
			$(this).addClass("active");
			$(this).siblings().removeClass("active");
		});	
	}


	function setBusinessOtherOption(){
		var businessSelection = $('select#business');
		var otherBusiness = $('#other-business');
		businessSelection.on("change", function(){
		var selectedOption = businessSelection.children("option:selected").val();
			if(selectedOption == "Other"){
				otherBusiness.show();
			} else if (selectedOption !== "Other"){
				otherBusiness.hide();
			}
		});
	}


	function setPricingTier(){
		var tierZeroButton = $('#tier-0-button');
		var tierOneButton = $('#tier-1-button');
		var tierTwoButton = $('#tier-2-button');

		var tierZeroString = 'Pay Per Change';
		var tierOneString = 'Tier 1 Monthly';
		var tierTwoString = 'Tier 2 Monthly';
		var pricingSelection = $('#paymenttype');
		tierZeroButton.on("click", function(){
			pricingSelection.val(tierZeroString);
		});
		tierOneButton.on("click", function(){
			pricingSelection.val(tierOneString);
		});
		tierTwoButton.on("click", function(){
			pricingSelection.val(tierTwoString);
		});
	}

	function setNavItemActiveScroll(){
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
	}

	function setStatGraphicScroll(){
		$(window).scroll(function(){
			var scroll = $(window).scrollTop();
			var os = $('.feedback').offset().top;
			var ht = $('.feedback').height() / 2;
			if(scroll > os + ht){
				$('.graphic-stats').addClass('graphic-stats-slide');
			}
		});
	}

	setNavColorOnLoad();
	setNavItemActiveClick();
	setBusinessOtherOption();
	setPricingTier();
	setNavItemActiveScroll();
	setStatGraphicScroll();

});
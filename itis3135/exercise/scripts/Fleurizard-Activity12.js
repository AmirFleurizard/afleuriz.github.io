$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
		maxSlides: 1,
		minSlides: 1,
        slideWidth: 500,
        slideMargin: 20,
		randomStart: true,
		captions: true,
		speed: 3000,
		pagerType: 'short',
        pagerSelector: '#id_pager',
		moveSlides: 1
		
    });
});
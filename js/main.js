$(document).ready(function(){
    
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollup').addClass('appear');
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 800);
        return false;
    });
    
	var altura = $('.ism-slider').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('header').addClass('fixed');
		} else {
			$('header').removeClass('fixed');
		}
	});

});
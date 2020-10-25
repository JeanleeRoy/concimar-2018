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
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > 0 ){
			$('header').addClass('fixed');
		} else {
			$('header').removeClass('fixed');
		}
	});

});
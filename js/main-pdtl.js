window.addEventListener('load', () => {

    const header = document.getElementsByTagName('header')[0];
    const buttonUp = document.getElementsByName('.scrollup')[0];

    window
        .addEventListener('scroll', (ev) => {

            // --- Toggle Header

            if (this.scrollY > 0) {
                header.classList.add('fixed');
            } else {
                header.classList.remove('fixed');
            }

            // --- Button Fade in/out

            if (this.scrollY > 100) {
                buttonUp.style.opacity = 1;
            } else {
                buttonUp.style.opacity = 0;
            }
        });

    // --- Up button

    buttonUp.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });

});
/*
$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').addClass('appear');
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 800);
        return false;
    });

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 0) {
            $('header').addClass('fixed');
        } else {
            $('header').removeClass('fixed');
        }
    });

}); */
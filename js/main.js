window.addEventListener('load', () => {

    const header = document.getElementById('header');
    const buttonUp = document.getElementById('scrollup');

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

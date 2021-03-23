/* =========================================
            Preloader
============================================ */
$(window).on('load', function () {
    // makes sure that whole site is loaded
    $('#preloader-gif, #preloader').fadeOut(5000, function () {});
});
/* =========================================
            Simple-Scroll-Spy
    ============================================ */
window.onload = function() {
    scrollSpy('#header__list', {
        sectionClass: '.scrollspy',
        menuActiveTarget: '.header__link',
        offset: 100
    });
}

$(document).ready(function() {
    /*===================================================================================
    toggleMenu Function - toggles the header__burger, header__menu, and body with classes
    * active or lock
    ======================================================================================*/
    function toggleMenu() {
        $('.header__burger').toggleClass('active');
        $('.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    }
    $('.header__burger').on('click tap', function () {
        toggleMenu();
    });
    /*===================================================================
    * clicking on a link or anywhere in the header__menu closes the menu and
    * enables scroll on the body
    =====================================================================*/
    $('.header__list, .header__link').on('click', function() {
        $('.header__burger').removeClass('active');
        $('.header__menu').removeClass('active');
        $('body').removeClass('lock');
    })
    /*===================================================================
    * clicking on header__link, hero__button, and logo enables smooth
    * scroll to different sections
    =====================================================================*/
    $('.header__logo, .header__link, #hero__button').on('click', function (event) {
        if (this.hash !== '') {
            event.preventDefault();
            //store hash in a new variable
            let hash = this.hash;
            $('html, body').animate({
                    scrollTop: $(hash).offset().top
                },
                1500,
                function () {
                    window.location.hash = hash;
                }
            );
        }
    });
    /*===================================================================
    * add active class to the current header__link, highlight it, and
    * remove from the previous active link
    =====================================================================*/
    let list = document.getElementById('header__list');
    let links = list.getElementsByClassName('header__link');

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function () {
            console.log(`link - ${i}`)
            let current = list.getElementsByClassName('active');
            console.log(links[i+1]);
            current[0].className = links[i-1].className.replace('.active', '');
            this.className += ' active';
            console.log(`this -> ${this.classList}`);
        })
        // console.log(list);
    }
    /*===================================================================
    * add active class to the current hero__button, highlight it, and
    * remove from the previous active link
    =====================================================================*/
    let button = document.getElementById('hero__button');
    let link = document.getElementById('tour__link');
    button.addEventListener('click', function () {
        let current = list.getElementsByClassName('active');
        current[0].className = current[0].className.replace(' active', ' ');
        link.className += ' active';
    });

})
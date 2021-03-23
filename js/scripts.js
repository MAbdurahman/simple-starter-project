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
    *
    =====================================================================*/







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

})
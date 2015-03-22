/* Registration, login, password recovery, sms auth PopUps */
$(document).ready(function () {

    /* Show registration popup */
    $('.js__find--reg').click(function (event) {
        event.preventDefault();
        $('body').addClass('popup-scrolltop');
        $(this).parents('.popup-login').addClass('display-none');
        $('.js__find--reg-popup').removeClass('display-none');
    });

    /* Show login popup */
    $('.js__find--login').click(function (event) {
        event.preventDefault();
        $('body').addClass('popup-scrolltop');
        $(this).parents('.popup-login').addClass('display-none');
        $('.js__find--login-popup').removeClass('display-none');
    });

    /* Show recovery popup */
    $('.js__find--recovery').click(function (event) {
        event.preventDefault();
        $('body').addClass('popup-scrolltop');
        $(this).parents('.popup-login').addClass('display-none');
        $('.js__find--recovery-popup').removeClass('display-none');
    });

    /* Show SMS popup */
    $('.js__find--sms').click(function (event) {
        event.preventDefault();
        $('body').addClass('popup-scrolltop');
        $(this).parents('.popup-login').addClass('display-none');
        $('.js__find--sms-popup').removeClass('display-none');
    });

    /* Close popups */
    $('.popup-login__close').click(function (event) {
        event.preventDefault();
        $('body').removeClass('popup-scrolltop');
        $(this).parents('.popup-login').addClass('display-none');
    });

    /* Toogle heart checkbox */
    $('.popup-login__check').click(function (event) {
        event.preventDefault();
        $(this).toggleClass('popup-login__check--active');
    });

});

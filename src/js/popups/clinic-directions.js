$(document).ready(function () {
    if ($('.js__find--clinic-directions').length) {

        $('.js__find--clinic-directions').click(function (event) {
            event.preventDefault();
            $('body').addClass('popup-scrolltop');
            $('.clinic-directions__wrapper').toggleClass('display-none');
        });

        $('.clinic-directions__close').click(function (event) {
            event.preventDefault();
            $('body').removeClass('popup-scrolltop');
            $('.clinic-directions__wrapper').addClass('display-none');
        });

        $('.clinic-directions__btn').click(function (event) {
            event.preventDefault();
            $('body').removeClass('popup-scrolltop');
            $('.clinic-directions__wrapper').addClass('display-none');
        });

    }
});
/* Get cupon PopUp */
$(document).ready(function () {

    $('.vita__enroll-link').click(function (event) {
        event.preventDefault();
        $('body').addClass('popup-scrolltop');
        $('.vita-popup').removeClass('display-none');
    });

    $('.vita-popup').click(function (event) {
        event.preventDefault();
        $('body').removeClass('popup-scrolltop');
        $('.vita-popup').addClass('display-none');
    });
});

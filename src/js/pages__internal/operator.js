/*  Show/hide tasks filter om main operator page*/
$(document).ready(function () {

    $('.operator-tasks-filer__value').click(function (event) {
        event.preventDefault();
        $(this).children('.operator-tasks-filer__dropdown').toggleClass('display-none')
    });
});

/*  Toogle heart checkbox on operator profile page */
$(document).ready(function () {

    $('.operator-profile-data__check-round').click(function (event) {
        event.preventDefault();
        $(this).toggleClass('operator-profile-data__check-round--active');
    });

});

/* Call BX-Slider */
$(document).ready(function () {
    if ($('.bxslider').length) {
        $('.bxslider').bxSlider({
            pager: false,
            mode: 'fade'
        });
    }
});
/* Show/Hide form errors */

$(document).ready(function () {

    $('.widget-btn--submit-yes').click(function (event) {
        event.preventDefault();
        $('.medcard-errors').toggleClass('display-none');
        $('.js__find--textarea-for-err').toggleClass('widget__textarea--error');
        $('.widget__textarea-wrapper').toggleClass('widget__textarea-wrapper--asterisk');
    });
});

/* Show/hide popup in stoma scheme */

$(document).ready(function () {

    var $schemePopup = '<div class="stoma-scheme__popup-body"> <h3 class="stoma-scheme__popup-title">До лечения</h3> <span class="stoma-scheme__popup-text">Глубокий кариес с поражением нервов</span> <h3 class="stoma-scheme__popup-title">После лечения</h3> <span class="stoma-scheme__popup-text">Пломба, удалены нервы</span> </div>';

    $('.stoma-scheme__tooth').click(function (event) {
        event.preventDefault();

        $('.stoma-scheme').find('.stoma-scheme__popup-body').remove();
        $(this).children('.stoma-scheme__num').after($schemePopup);

    });


});
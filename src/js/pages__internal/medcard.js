/* Show/Hide form errors */

$(document).ready(function () {

    $('.widget-btn--submit-yes').click(function (event) {
        event.preventDefault();
        $('.medcard-errors').toggleClass('display-none');
        $('.js__find--textarea-for-err').toggleClass('widget__textarea--error');
        $('.widget__textarea-wrapper').toggleClass('widget__textarea-wrapper--asterisk');
    });
});
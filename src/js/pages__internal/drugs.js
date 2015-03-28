/* Toggle doctor info pop-up */
$(document).ready(function() {

    $('.drugs__doctor-name').click(function(event){
        event.preventDefault();
        $('.medcard-docinfo').toggleClass('display-none');
    });

    $('.js-doc-find').click(function(event){
        event.preventDefault();
        $('.medcard-docinfo').toggleClass('display-none');
    });

});

/* Toggle reaction popup */
$(document).ready(function() {

    $('.js-drugs-popup-toogle').mouseover(function(event){
        event.preventDefault();
        $('.drugs__drug-reaction-popup').toggleClass('display-none');
    });

    $('.js-drugs-popup-toogle').click(function(event){
        event.preventDefault();
        $('.drugs__drug-reaction-popup').toggleClass('display-none');
    });

});

/* Toggle dosage types and items popups */
$(document).ready(function() {

    $('.drugs__link--type').click(function(event){
        event.preventDefault();
        $(this).next().toggleClass('display-none');
    });

    $('.drugs__link--item').click(function(event){
        event.preventDefault();
        $(this).next().toggleClass('display-none');
    });

    $('.js__find-add-drug').click(function(event){
        event.preventDefault();
        $('.drugs__modal-wrapper').removeClass('display-none')
    });

    $('.drugs__modal-close').click(function(event){
        event.preventDefault();
        $('.drugs__modal-wrapper').addClass('display-none')
    });

});

/* Toggle days state */
$(document).ready(function() {

    $('.js__drug-day').click(function(event){
        event.preventDefault();
        $(this).toggleClass('drugs__drug-day--active');
    });
});

/* Toggle doc select display */
$(document).ready(function() {

    $('.js__drugs-doc-select').click(function(event){
        event.preventDefault();
        $('.medcard-doctor__wrapper').toggleClass('display-none');
    });
});

/* Show/Hide form errors */
$(document).ready(function () {

    $('.widget-btn--submit-yes').click(function (event) {
        event.preventDefault();
        $('.drugs-errors').toggleClass('display-none');
        $('.drugs__drug-comment').toggleClass('drugs__drug-comment--error');
        $('.drugs__link').toggleClass('drugs__link--error');
        $('.drugs__dosage-wrapper').toggleClass('drugs__dosage-wrapper--asterisk');
        $('.drugs__dosage').toggleClass('drugs__dosage--error');
        $('.js__drug-day').not('.drugs__drug-day--active').toggleClass('drugs__drug-day--error');
    });
});
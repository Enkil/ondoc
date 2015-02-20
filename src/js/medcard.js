/*
Show-hide specialisations select pop-up
 */
$(document).ready(function() {

    $('.medcard-filter__link').click(function(event){
        event.preventDefault();
        $('.medcard-spec__wrapper').toggleClass('display-none');
    });

    $('.medcard-spec__close').click(function(event){
        event.preventDefault();
        $('.medcard-spec__wrapper').addClass('display-none');
    });

    $('.medcard-spec__btn').click(function(event){
        event.preventDefault();
        $('.medcard-spec__wrapper').addClass('display-none');
    });

});

/*
Change status of specialisation items (non-checked/checked)
 */

$(document).ready(function() {

    $('.medcard-spec__item').click(function(event){
        event.preventDefault();
        $(this).toggleClass('medcard-spec__item--checked');
    });

});

/*
Show-hide/Change state Select Doctor Pop-Up
 */

$(document).ready(function() {

    // Show pop-up
    $('#js-find-doctor').click(function(event){
        event.preventDefault();
        $(".medcard-doctor__wrapper").toggleClass('display-none');
    });

    // Hide pop-up onclick to close btn (cross icon)
    $('.medcard-doctor__close').click(function(event){
        event.preventDefault();
        $(".medcard-doctor__wrapper").toggleClass('display-none');
    });

    // Change state to "add new doctor form"
    $('.medcard-doctor__icon-plus, .medcard-doctor__notfind-btn').click(function(event){
        event.preventDefault();
        $(".medcard-doctor__head, .medcard-doctor__body").addClass('display-none')
        $(".medcard-doctor__add-body").removeClass('display-none');
    });

    // Change state to "Doctor searching" on click to cancel btn
    $('.medcard-doctor__add-btn-no').click(function(event){
        event.preventDefault();
        $(".medcard-doctor__add-body").addClass('display-none');
        $(".medcard-doctor__head, .medcard-doctor__body").removeClass('display-none')
    })

});


/*
Start lightbox and set some options
 */

$(document).ready(function ($) {

    // delegate calls to data-toggle="lightbox"
    $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
        event.preventDefault();
        return $(this).ekkoLightbox({
            always_show_close: true,
            left_arrow_class: '.glyphicon .glyphicon-menu-left',
            right_arrow_class: '.glyphicon .glyphicon-menu-right'
        });
    });
});

/*
Toogle doctor info pop-up
 */

$(document).ready(function() {

    $('.widget-doctor__name').click(function(event){
        event.preventDefault();
        $('.medcard-docinfo').toggleClass('display-none');
    });

});
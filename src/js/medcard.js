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
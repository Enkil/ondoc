/*
 Toggle doctor info pop-up
 */
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

/*
* Toggle reaction popup
*/
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

/*
 * Toggle dosage types and items popups
 */
$(document).ready(function() {

    $('.drugs__link--type').click(function(event){
        event.preventDefault();
        $('.drugs__dosage-popup--types').toggleClass('display-none');
    });

    $('.drugs__link--item').click(function(event){
        event.preventDefault();
        $('.drugs__dosage-popup--items').toggleClass('display-none');
    });

});


/*
 * Toggle days state
 */
$(document).ready(function() {

    //$('.drugs__drug-day').click(function(){
    //    $('.drugs__drug-day--active').removeClass('drugs__drug-day--active');
    //    $(this).addClass('drugs__drug-day--active');
    //});

    $('.js__drug-day').click(function(event){
        event.preventDefault();
        $(this).toggleClass('drugs__drug-day--active');
    });
});

/*
 * Toggle doc select display
 */
$(document).ready(function() {

    $('.js__drugs-doc-select').click(function(event){
        event.preventDefault();
        $('.medcard-doctor__wrapper').toggleClass('display-none');
    });
});
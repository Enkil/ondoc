/*
 Toogle doctor info pop-up
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
* Toogle reaction popup
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
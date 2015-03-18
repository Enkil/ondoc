/*
Toogle promo form
 */

$(document).ready(function() {

    $('.promo-form__submit').click(function(event){
        event.preventDefault();
        $('.promo-form.display-none').toggleClass('display-none');
        $(this).parents('.promo-form').toggleClass('display-none');
    });

});

/*
Init animation in scroll
 */
new WOW().init();
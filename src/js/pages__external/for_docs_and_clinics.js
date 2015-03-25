/* Toggle promo form */

$(document).ready(function() {

    $('.promo-form__submit').click(function(event){
        event.preventDefault();
        $('.promo-form.display-none').toggleClass('display-none');
        $(this).parents('.promo-form').toggleClass('display-none');
    });

});

/* Animation on scroll */

$(window).on('scroll', function(){
    if(!$('#js__animate-1').length) {
        return true;
    }

    var scrollpos = $(this).scrollTop() + ($(window).height()/2+500);

    if( scrollpos > $('#js__animate-1').offset().top ){
        $('#js__animate-1').addClass('fdc-section__devices--active');
    }
    if( scrollpos > $('#js__animate-2').offset().top ){
        $('#js__animate-2').addClass('fdc-section__devices--active');
    }
    if( scrollpos > $('#js__animate-3').offset().top ){
        $('#js__animate-3').addClass('fdc-section__devices--active');
    }
    if( scrollpos > $('#js__animate-4').offset().top ){
        $('#js__animate-4').addClass('fdc-section__devices--active');
    }
    if( scrollpos > $('#js__animate-5').offset().top ){
        $('#js__animate-5').addClass('fdc-section__devices--active');
    }
    if( scrollpos > $('#js__animate-6').offset().top ){
        $('#js__animate-6').addClass('fdc-section__devices--active');
    }
    if( scrollpos > $('#js__animate-7').offset().top ){
        $('#js__animate-7').addClass('fdc-section__devices--active');
    }
});

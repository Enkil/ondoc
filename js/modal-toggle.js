/*
Toggle css class to modal window for delete consultation.
Start by click on "Delete" button
 */

$(document).ready(function() {

    $('.widget-btn--delete').click(function(event){
        event.preventDefault();
        $('.modal-consultation-delete__wrapper').toggleClass('display-none');
        $('body').toggleClass('bg-blur');
    });

    $('.modal-consultation-delete__close').click(function(event){
        event.preventDefault();
        $('.modal-consultation-delete__wrapper').toggleClass('display-none');
        $('body').toggleClass('bg-blur');
    });

    $('.modal-consultation-delete__btn-no').click(function(event){
        event.preventDefault();
        $('.modal-consultation-delete__wrapper').toggleClass('display-none');
        $('body').toggleClass('bg-blur');
    });

});


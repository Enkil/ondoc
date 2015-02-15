/*
Toggle css class to modal window for delete consultation.
Start by click on "Delete" button
 */

$(document).ready(function() {

    $('.widget-btn--delete').click(function(event){
        event.preventDefault();
        $('.modal-consultation-delete__wrapper').toggleClass('display-none');
        //$('body').toggleClass('bg-blur');
        //$('.modal-consultation-delete__wrapper').toggleClass('bg-blur');
    });

    $('.modal-consultation-delete__close').click(function(event){
        event.preventDefault();
        $('.modal-consultation-delete__wrapper').toggleClass('display-none');
        //$('body').toggleClass('bg-blur');
    });

    $('.modal-consultation-delete__btn-no').click(function(event){
        event.preventDefault();
        $('.modal-consultation-delete__wrapper').toggleClass('display-none');
        //$('body').toggleClass('bg-blur');
    });

});

/*
 Show-hide "monitorings settings" modal block on monitoring.html
 */
$(document).ready(function() {

    $('.icon-setting').click(function(event){
        event.preventDefault();
        $('.settings-block').toggleClass('display-none');
    });

    $('.icon-exit').click(function (){
        $('.settings-block').toggleClass('display-none');
    });
});
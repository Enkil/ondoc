/*
Toggle search input display none
 */

$(document).ready(function() {

    $('.clinics__search').click(function(event){
        event.preventDefault();
        $('.js__search-form').toggleClass('display-none');
        $(this).toggleClass('display-none');
    });

});

/*
Toogle heart checkbox
*/
$(document).ready(function() {

    $('.filter__check-round').click(function(event){
        event.preventDefault();
        $(this).toggleClass('filter__check-round--active');
    });

});

/*
Toogle filter
 */
$(document).ready(function() {

    $('.clinics__head-link--filter').click(function(event){
        event.preventDefault();
        $('.medcard-filter').toggleClass('display-none');
        $(this).toggleClass('arrow-up');
    });

    // lets open modal

    $(".clinics__enroll-link").click(function(event){
        event.preventDefault();
        $(this).parent()
            .find(".clinics-modal").removeClass("display-none");
    });


    // lets close modal

    $(".clinics-modal__close").click(function(event){
        event.preventDefault();
        $(this).parent().parent().parent().parent().parent().parent()
            .find(".clinics-modal").addClass("display-none");
    });

});

$(document).ready(function(){

    //// show-hide branch offices
    $('.clinics__show-all').click(function(event){
        if($(this).hasClass("js__show-all--closed")){
            event.preventDefault();
            $('.clinics__info-block.display-none').removeClass('display-none').addClass("js__clinics__info-block--displayed");
            $(this).addClass('arrow-up');
            $(this).html("Скрыть филиалы");
            $(this).removeClass("js__show-all--closed")
            $(this).addClass("js__show-all--openned")
        }
        else{
            if($(this).hasClass("js__show-all--openned")){
                console.log("finded");
                event.preventDefault();
                $('.clinics__info-block.js__clinics__info-block--displayed').addClass('display-none');
                $(this).removeClass('arrow-up');
                $(this).html("Показать все филиалы");
                $(this).removeClass("js__show-all--openned");
                $(this).addClass("js__show-all--closed");
            }
        };
    });

});

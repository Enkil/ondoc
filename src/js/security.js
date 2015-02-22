$(document).ready(function() {

    $("#security-authorisation-double + label:before").click(function(){
        $(this).parent().find(".security-authorisation__label--checked").css("display","block");
    });

    // Модальные окна

    $(".security-modal").css('display','none');

});
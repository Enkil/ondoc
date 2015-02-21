$(document).ready(function() {

    $("#security-authorisation-double + label:before").click(function(){
        $(this).next().find(".security-authorisation__label--checked").css("display","block");
    });

});
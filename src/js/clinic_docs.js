/*  Show-hide clinics branch offices    */
$(document).ready(function() {

    $('.clinic-docs__link--addr').click(function(event){
        event.preventDefault();
        $('.clinic-docs__dropdown').toggleClass('display-none');
        $(this).toggleClass('arrow-up');
    });

});
/*
 Toggle display: none; for header dropdown
 */

$(document).ready(function() {

    $('.main-header__dropdown-toggle').click(function(event){
        event.preventDefault();
        $(this).siblings('.main-header__dropdown').toggleClass('display-none');
    });

});
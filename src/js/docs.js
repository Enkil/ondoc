/*
 Toggle search input display none
 */

$(document).ready(function() {

    $('.docs__search').click(function(event){
        event.preventDefault();
        $('.js__search-form').toggleClass('display-none');
        $(this).toggleClass('display-none');
    });

});
/*
 Toggle css class to some dropdown blocks
 */


/*
Show-hide month dropdown list in content header
 */
$(document).ready(function() {

    $('.content-header__sort-link--dropdown').click(function(event){
        event.preventDefault();
        $('.widget-header__dropdown').toggleClass('display-none');
    });

});

/*
Show-hide "show by" dropdown in pagination
 */
$(document).ready(function() {

    $('.widget-pagination__show-by--dropdown').click(function(event){
        event.preventDefault();
        $('.widget-pagination__dropdown').toggleClass('display-none');
    });

});
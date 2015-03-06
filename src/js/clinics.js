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

});
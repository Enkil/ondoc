/* Show-hide medcard filter block */
$(document).ready(function() {

    $('.content-header__sort-link--filter').click(function(event){
        event.preventDefault();
        $('.medcard-filter').toggleClass('display-none');
        $(this).toggleClass('arrow-up');
    });

});

/* Onclick hide tag in filter block */
$(document).ready(function() {

    $(".medcard-filter__tag-close").click(function () {
        $(this).parents(".medcard-filter__tag").addClass('display-none');
    });

});

/* Hide all tags onclick to Clear filters */
$(document).ready(function() {

    $(".medcard-filter__tag--clear").click(function () {
        $(".medcard-filter__tag").addClass('display-none');
    });

});

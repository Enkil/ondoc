/*
 Toggle search input display none
 */

$(document).ready(function() {

    $('.docs__search').click(function(event){
        event.preventDefault();
        $('.js__search-form').toggleClass('display-none');
        $(this).toggleClass('display-none');
    });

    $('.docs__head-link--filter').click(function(event){
        event.preventDefault();
        $('.medcard-filter').toggleClass('display-none');
        $(this).toggleClass('arrow-up');
    });

    // lets open modal
	
	$(".docs__enroll-link").click(function(event){
		event.preventDefault();
    	$(this).parent()
    	.find(".docs-modal").removeClass("display-none");
    });


    // lets close modal
	
	$(".docs-modal__close").click(function(event){
		event.preventDefault();
    	$(this).parent().parent().parent().parent().parent().parent()
    	.find(".docs-modal").addClass("display-none");
    });

});

/*
Range slider
 */

$(document).ready(function() {

    var $range = $("#filter__range");

    $range.ionRangeSlider({
        type: "double",
        min: 1,
        max: 50,
        from: 3,
        to: 25,
        hide_min_max: true,
        hide_from_to: true,
        grid: false
    });

    $range.on("change", function () {
        var $this = $(this),
            from = $this.data("from"),
            to = $this.data("to");
        $('#filter__rank-from').html(from);
        $('#filter__rank-to').html(to);
    });

});

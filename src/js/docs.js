/*
 Toggle search input display none
 */

$(document).ready(function() {

    $('.docs__search').click(function(event){
        event.preventDefault();
        $('.js__search-form').toggleClass('display-none');
        $(this).toggleClass('display-none');
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
/*
Toggle search input display none
 */

$(document).ready(function() {

    $('.clinics__search').click(function(event){
        event.preventDefault();
        $('.js__search-form').toggleClass('display-none');
        $(this).toggleClass('display-none');
    });

    // lets open modal
	
	$(".clinics__enroll-link").click(function(event){
		event.preventDefault();
    	$(this).parent()
    	.find(".clinics-modal").removeClass("display-none");
    });


    // lets close modal
	
	$(".clinics-modal__close").click(function(event){
		event.preventDefault();
    	$(this).parent().parent().parent().parent().parent().parent()
    	.find(".clinics-modal").addClass("display-none");
    });

});
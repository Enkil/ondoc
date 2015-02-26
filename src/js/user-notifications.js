$(document).ready(function(){

	// icons active / not active

	$(".notifications-info span").click(function(){
		$(this).toggleClass("notifications-info__active");
	});


	// lets open modal time zone

	$(".notifications-delivery__umt").click(function(event){
		event.preventDefault();
		$(this).parent().parent().find(".notifications-modal").removeClass("display-none");
	});


	// lets close modal
	
	$(".notifications-modal__close").click(function(event){
		event.preventDefault();
    	$(this).parent().parent().parent().parent().parent().parent().find(".notifications-modal").addClass("display-none");
    });


    // lets close modal after choosing time

    $(".notifications-modal__zone-item").click(function(event){
    	event.preventDefault();
    	$(this).parent().parent().parent().parent().parent().parent().parent().find(".notifications-modal").addClass("display-none");
    });
}); 
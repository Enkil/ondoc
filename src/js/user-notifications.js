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

    $(".notifications-modal__close, .notifications-modal__btn").click(function (event) {
		event.preventDefault();
        $(this).parents().find(".notifications-modal").addClass("display-none");
    });


    // Set check on GMT modal

    $(".notifications-modal__zone-item").click(function(event){
    	event.preventDefault();

        $(".notifications-modal__check").addClass("display-none");
        $(this).children(".notifications-modal__check").removeClass("display-none");

    });

}); 
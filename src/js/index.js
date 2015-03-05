$(document).ready(function() {

    // lets close modal
	
	$(".steps-modal__close").click(function(event){
		event.preventDefault();
    	$(this).parent().parent().parent().parent().parent().parent()
    	.find(".steps-modal").addClass("display-none");
    });


    // lets open step 2

    $(".steps-modal__step--first .steps-modal__btn--next").click(function(event){
		event.preventDefault();
    	$(this).parent().parent().parent().parent()
    	.find(".steps-modal__step--first").addClass("display-none").parent()
    	.find(".steps-modal__step--second").removeClass("display-none");
    });


    // lets open step 3

    $(".steps-modal__step--second .steps-modal__btn--next").click(function(event){
		event.preventDefault();
    	$(this).parent().parent().parent().parent()
    	.find(".steps-modal__step--second").addClass("display-none").parent()
    	.find(".steps-modal__step--third").removeClass("display-none");
    });


    // lets open step 4

    $(".steps-modal__step--third .steps-modal__btn--next").click(function(event){
		event.preventDefault();
    	$(this).parent().parent().parent().parent()
    	.find(".steps-modal__step--third").addClass("display-none").parent()
    	.find(".steps-modal__step--fourth").removeClass("display-none");
    });


    // lets open step 5

    $(".steps-modal__step--fourth .steps-modal__btn--next").click(function(event){
		event.preventDefault();
    	$(this).parent().parent().parent().parent()
    	.find(".steps-modal__step--fourth").addClass("display-none").parent()
    	.find(".steps-modal__step--fifth").removeClass("display-none");
    });


    // lets open step 6

    $(".steps-modal__step--fifth .steps-modal__btn--next").click(function(event){
		event.preventDefault();
    	$(this).parent().parent().parent().parent()
    	.find(".steps-modal__step--fifth").addClass("display-none").parent()
    	.find(".steps-modal__step--sixth").removeClass("display-none");
    });


    // lets close modal

    $(".steps-modal__step--sixth .steps-modal__btn--next").click(function(event){
		event.preventDefault();
    	$(this).parent().parent().parent().parent().parent().parent()
    	.find(".steps-modal").addClass("display-none");
    });


});
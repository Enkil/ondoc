$(document).ready(function(){

	// lets close modal
	
	$(".agreement-modal__close, .agreement-modal__btn--reject").click(function(event){
		event.preventDefault();
    	$(this).parent().parent().parent().parent().parent().parent()
    	.find(".agreement-modal").addClass("display-none");
    });


    // lets close feedback modal
	
	$(".feedback-modal__close").click(function(event){
		event.preventDefault();
    	$(this).parent().parent().parent().parent().parent().parent()
    	.find(".feedback-modal")
    	.addClass("display-none");
    });


    // lets open thank you text
	
	$(".feedback-modal__btn--send").click(function(event){
		event.preventDefault();
    	$(this).parent().parent()
    	.find(".feedback-modal__contact")
    	.addClass("display-none")
    	.parent().parent()
    	.find(".feedback-modal__success")
    	.removeClass("display-none")
    	.parent().parent().parent().parent()
    	.find(".feedback-modal")
    	.fadeOut(3000);
    	
    });

  
}); 
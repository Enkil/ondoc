$(document).ready(function(){

	// lets close modal
	
	$(".agreement-modal__close, .agreement-modal__btn--reject").click(function(event){
		event.preventDefault();
    	$(this).parent().parent().parent().parent().parent().parent().find(".agreement-modal").addClass("display-none");
    });


}); 
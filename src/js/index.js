$(document).ready(function() {

    // lets close modal
	
	$(".steps-modal__close").click(function(event){
		event.preventDefault();
    	$(this).parent().parent().parent().parent().parent().parent()
    	.find(".steps-modal").addClass("display-none");
    });

});
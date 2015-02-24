$(document).ready(function() {

    $("#security-authorisation-double + label:before").click(function(){
        $(this).parent().find(".security-authorisation__label--checked").css("display","block");
    });

    // modals


    // lets close modal by clicking close button and cancel button

    $(".security-modal__close, .security-modal__btn--cancel").click(function(event){
    	event.preventDefault();
    	$(this).parent().parent().parent().parent().parent().find(".security-modal").addClass("display-none");
    });


    // lets open modal delete email

    $(".security-email__delete").click(function(event){
    	event.preventDefault();
    	$(this).parent().parent().parent().find(".security-modal__email-disconnect").removeClass("display-none");
    });


    // lets show modal successful 

    $(".security-modal__btn--disconnect").click(function(event){
    	event.preventDefault();
    	$(this).parent().parent().parent().parent().parent().find(".security-modal__email-disconnect").addClass("display-none").parent().parent().parent().parent().parent().find(".security-modal__email-success").removeClass("display-none").fadeOut(3000);
    });


    // lets save email 

    $(".security-link__save--email").click(function(event){
    	event.preventDefault();
    	$(this).parent().parent().parent().parent().parent().find(".security-modal__email-success").removeClass("display-none").fadeOut(3000);
    });


    // lets save telephone 

    $(".security-link__save--telephone").click(function(event){
    	event.preventDefault();
    	$(this).parent().parent().parent().parent().parent().find(".security-modal__telephone-success").removeClass("display-none").fadeOut(3000);
    });


    // lets  proove telephone 

    $(".security-link__proove-telephone").click(function(event){
    	event.preventDefault();
    	$(this).parent().parent().parent().parent().parent().find(".security-modal__telephone-proove").removeClass("display-none");
    });

    // ... and then show success modal

    $(".security-modal__telephone-proove .security-modal__btn--proove").click(function(event){
    	event.preventDefault();
    	$(this).parent().parent().parent().parent().parent().parent().parent().find(".security-modal__telephone-proove").addClass("display-none").parent().parent().parent().parent().parent().find(".security-modal__telephone-success").removeClass("display-none").fadeOut(3000);
    });    

   
});













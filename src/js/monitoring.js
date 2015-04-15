/*
JS for monitoring page
 */

/*
Toggle display: none; for period dropdown
 */

$(document).ready(function() {

    $('.monitoring-widget__period').click(function(event){
        event.preventDefault();
        $(this).siblings('.monitoring-widget__dropdown').toggleClass('display-none');
    });

});


/*
 Change state to Add value and return to graph
 */

$(document).ready(function() {

    $('.monitoring-widget__add-btn').click(function(event){
        event.preventDefault();
        $(this).parents('.monitoring-widget').find('.monitoring-widget__subheader, .monitoring-widget__body').addClass('display-none');
        $(this).parents('.monitoring-widget').find('.monitoring-widget__value-body').removeClass('display-none');
        if($(this).parents('.monitoring-widget').find('.monitoring-widget__chol-shedule').length){
            $(this).parents('.monitoring-widget').find('.monitoring-widget__chol-shedule').first().addClass('display-none');
        }
        if($(this).parents('.monitoring-widget').find('.monitoring-widget__sugar-shedule').length){
            $(this).parents('.monitoring-widget').find('.monitoring-widget__sugar-shedule').first().addClass('display-none');
        }
    });

    $('.monitoring-widget__close').click(function(event){
        event.preventDefault();
        $(this).parents('.monitoring-widget').find('.monitoring-widget__subheader, .monitoring-widget__body').removeClass('display-none');
        $(this).parents('.monitoring-widget').find('.monitoring-widget__value-body').addClass('display-none');

        if($(this).parents('.monitoring-widget').find('.monitoring-widget__chol-shedule').length){
            $(this).parents('.monitoring-widget').find('.monitoring-widget__chol-shedule').removeClass('display-none');
        }

        if($(this).parents('.monitoring-widget').find('.monitoring-widget__sugar-shedule').length){
            $(this).parents('.monitoring-widget').find('.monitoring-widget__sugar-shedule').removeClass('display-none');
        }
    });

    $('.monitoring-widget__save').click(function(event){
        event.preventDefault();
        $(this).parents('.monitoring-widget').find('.monitoring-widget__value--error').removeClass('display-none');
        $(this).parents('.monitoring-widget').find('.monitoring-widget__value-add').addClass('monitoring-widget__value-add--error');
    });

    /*
    Special styles for error for sugar  
     */

     $('.monitoring-widget__sugar .monitoring-widget__save').click(function(event){
        event.preventDefault();
        $(this).parents('.monitoring-widget').find('.monitoring-widget__value--error').removeClass('display-none').addClass("monitoring-widget__value--error-special"); 
        $(this).parents('.monitoring-widget').find('.monitoring-widget__value-add').addClass('monitoring-widget__value-add--error');
        $(this).parents('.monitoring-widget__sugar').find('.monitoring-widget__values').addClass('monitoring-widget__values--special');
        $(this).parents('.monitoring-widget__sugar').find('.monitoring-widget__value-body').addClass('monitoring-widget__value-body--special');
    });

     /*
    Special styles for error for cholesterol  
     */

     $('.monitoring-widget__cholesterol .monitoring-widget__save').click(function(event){
        event.preventDefault();
        $(this).parents('.monitoring-widget').find('.monitoring-widget__value--error').removeClass('display-none').addClass("monitoring-widget__value--error-special"); 
        $(this).parents('.monitoring-widget').find('.monitoring-widget__value-add').addClass('monitoring-widget__value-add--error');
         $(this).parents('.monitoring-widget').find('.monitoring-widget__chol-shedule--add-value').addClass('monitoring-widget__chol-shedule--add-value--special');
        $(this).parents('.monitoring-widget').find('.monitoring-widget__values').addClass('monitoring-widget__values--special');
        $(this).parents('.monitoring-widget').find('.monitoring-widget__value-body').addClass('monitoring-widget__value-body--special');
    });

});


/*
Show tooltips
 */

$(document).ready(function() {

    $('[data-toggle="tooltip"]').tooltip({
        animation: true,
        selector: false,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div><div class="tooltip-cross"></div></div>',
        trigger: 'hover focus',
        title: '',
        delay: 0,
        html: true,
        container: false,
        viewport: {
            selector: 'body',
            padding: 0
        }
        });

    $('[data-toggle="tooltip"]').tooltip('show')
});

/*
Hide tooltips onclick to cross
 */

$(document).ready(function() {

    $('.tooltip-cross').click(function(event){
        event.preventDefault();
        $(this).parents('.tooltip').removeClass('in');
    });

});

/*
Toogle state of sugar shedule block items
 */
$(document).ready(function() {
    $('.monitoring-widget__sugar-shedule-block').click(function(){
        $('.monitoring-widget__sugar-shedule-block--active').removeClass('monitoring-widget__sugar-shedule-block--active');
        $(this).addClass('monitoring-widget__sugar-shedule-block--active');
    });
});

/*
Toogle state of cholesterol block items
 */
$(document).ready(function() {
    if($('.js-chol-find').length){
        $('.js-chol-find').click(function(event){
            event.preventDefault();
            $('.monitoring-widget__chol-shedule--active').removeClass('monitoring-widget__chol-shedule--active');
            $(this).addClass('monitoring-widget__chol-shedule--active');
        });
    }
});

function open_popup($el) {
    var isOpened = $('.milk-bg').length > 0;
    var $body = $('body');
    var $bg = isOpened ? $('.milk-bg') : $('<div />').addClass("milk-bg");
    var $container = isOpened ? $('.milk-container') : $('<div />').addClass("milk-container");
    var $dismiss = isOpened ? $('.milk-close-popup') : $("<div />").addClass("milk-close-popup");
    var $wrap = isOpened ? $('.milk-wrapper') : $('<div />').addClass("milk-wrapper");

    if (!isOpened) {
        $container.append($("<div />").addClass("milk-loader").css('opacity', 1).css('display', 'none'));
        $bg.prependTo($body);
        $container.prependTo($body);
        $wrap.appendTo($container);
    }

    $wrap.html($el);
    $dismiss.appendTo($el);

    $body.addClass('milk-scrollstop');
    $container.fadeIn(400);
    $bg.fadeIn(400);
}

function close_popup() {
    $('.milk-bg').fadeOut(400);
    $('.milk-container').fadeOut(400, function() {
        $('.milk-bg').remove();
        $('.milk-container').remove();
        $('body').removeClass('milk-scrollstop');
    });
}

$(function() {
    $('body').on('click', '.milk', function() {
        var $el = $('.' + $(this).data("milkelement")).clone();
        open_popup($el);

        return false;
    });

    $('body').on('click', '.milk-close-popup', function() {
        close_popup();

        return false;
    });

    $('body').on('click', '.milk-bg', function() {
        close_popup();

        return false;
    });
});
AjaxForm = function(selector, params) {
    this.init(selector, params);
};

AjaxForm.prototype = {
    onSuccess: function($form, response) {},
    onError: function($form, response) {},
    onInputError: function($form, $input, errorMessage) {},
    onBeforeSend: function($form) {},

    init: function(selector, params) {
        var ajaxForm = this;
        if ('onSuccess' in params) {
            this.onSuccess = params.onSuccess;
        }
        if ('onError' in params) {
            this.onError = params.onError;
        }
        if ('onInputError' in params) {
            this.onInputError = params.onInputError;
        }
        if ('onBeforeSend' in params) {
            this.onBeforeSend = params.onBeforeSend;
        }

        $('body').on('submit', selector, function() {
            var $form = $(this);
            var formPrefix = $form.data('prefix');

            ajaxForm.onBeforeSend($form);

            $.ajax({
                url: $(this).attr('action'),
                method: $(this).attr('method'),
                data: $(this).serialize(),
                success: function(response) {
                    ajaxForm.onSuccess($form, response);
                },
                error: function(response) {
                    ajaxForm.onError($form, response);
                    var errors = response.responseJSON.errors;
                    $.each(errors, function(key, value) {
                        var inputName = formPrefix ? (formPrefix + '[' + key + ']') : key;
                        var $input = $form.find('input[name^="' + inputName + '"]:first');

                        ajaxForm.onInputError($form, $input, value[0]);
                    });
                }
            });

            return false;
        });
    }
};

$(function(){

    // BX-Slider
    if($('.bx-slider').length) {
        var slider = $('.bx-slider').bxSlider({auto: true, pause: 7000});
        var restart;

        $('.bx-pager-item a, .bx-controls-direction a').click(function(e){
            if(restart) {
                clearTimeout(restart);
            }
            restart=setTimeout(function(){
                slider.stopAuto();
                slider.startAuto();
            },500);

            return true;
        });
    }


    $('.js-get-modal').on('click', function(){

        $('.modal-wrapper').removeClass('active');

        $('.' + $(this).attr('data-modal')).addClass('active');

        $('body,html').addClass('overflow');

        return false;

    });

    $('.js-m-close').on('click', function(){
        $(this).parents('.modal-wrapper').removeClass('active');
        $('body,html').removeClass('overflow');
        return false;
    });

    $(window).on('scroll', function(){
        if(!$('#js-animate-1').length) {
            return true;
        }

        var scrollpos = $(this).scrollTop() + ($(window).height()/2+500);
        if( scrollpos > $('#js-animate-1').offset().top ){
            $('#js-animate-1').addClass('active');
        }
        if( scrollpos > $('#js-animate-2').offset().top ){
            $('#js-animate-2').addClass('active');
        }
        if( scrollpos > $('#js-animate-3').offset().top ){
            $('#js-animate-3').addClass('active');
        }
        if( scrollpos > $('#js-animate-4').offset().top ){
            $('#js-animate-4').addClass('active');
        }
        if( scrollpos > $('#js-animate-5').offset().top ){
            $('#js-animate-5').addClass('active');
        }
        if( scrollpos > $('#js-animate-6').offset().top ){
            $('#js-animate-6').addClass('active');
        }
        if( scrollpos > $('#js-animate-7').offset().top ){
            $('#js-animate-7').addClass('active');
        }
        if( scrollpos > $('#js-animate-8').offset().top ){
            $('#js-animate-8').addClass('active');
        }
    });

    $('body').on('click', '.submit-button', function() {
        if (!$(this).hasClass('disabled')) {
            $(this).parents('form').submit();
        }

        return false;
    });

    $(document).keydown(function(e) {
        if(e.which == 13 && $('.submit-button:visible').length == 1) {
            $('.submit-button:visible').parents('form').submit();

            return false;
        }

        if(e.which == 27 && $('.milk-close-popup:visible').length == 1) {
            close_popup();

            return false;
        }
    });

    $('body').on('click', '.cb-toggler', function(){
        $(this).toggleClass("active");
        if($(this).hasClass("active")) {
            $("."+$(this).data("target")).val("1");
        } else {
            $("."+$(this).data("target")).val("0");
        }
    });

    new AjaxForm('.ajax-form', {
        onSuccess: function($form, response) {
            if (response.status != 'redirect') {
                $('.milk-loader').hide();
                $form.show();
            }

            if (response.status == 'error_json') {
                $form.find('.error-hint').html('');
                $.each(response.errors, function(k, v) {
                    var $input = $form.find('input[name="' + k + '"]');
                    $input.parent().addClass('error');
                    $input.parent().next().text(v.message);
                });
            } else if (response.status == 'close_message') {
                $form.replaceWith($(response.message).append($("<div />").addClass("milk-close-popup")));
            } else if (response.status == 'redirect') {
                if ($form.hasClass('registration')) {
                    $('.milk-loader').hide();
                    var login = $('form.registration input').val();
                    $('.after-registration-modal-wrapper .login').text(login);
                    if (login.indexOf('@') == -1) {
                        $('.after-registration-modal-wrapper .password-hint').text('Пароль был отправлен на указанный телефон')
                    }
                    $('.after-registration-modal-wrapper').addClass('active');
                } else {
                    window.location = response.redirect_url;
                }
            } else if (response.status == 'form') {
                var $el = $(response.form);
                var $wrap = $('.milk-wrapper');
                $el.append($("<div />").addClass("milk-close-popup"));
                $wrap.html($el);
                $wrap.css({
                    "width": $el.outerWidth(),
                    "height": $el.outerHeight(),
                    "margin-left": -1 * ($el.outerWidth()/2),
                    "margin-top": -1 * ($el.outerHeight()/2)
                });
                $('body').addClass('milk-scrollstop');
            }
        },
        onBeforeSend: function($form) {
            $form.find('.error-hint').html('');
            $form.find('.input.error').removeClass('error');
            $('.milk-loader').show();
            $form.hide();
        }
    });

    if (location.hash == '#registration') {
        $('.registration-link').click();
    }

    if (location.hash == '#login') {
        $('.login-link').click();
    }

    $('.get-popup').on('click', function(e) {
        e.preventDefault();
        $('.'+$(this).data('popup')).removeClass('hide');
    });

    $('.popup-closer').on('click', function(e) {
        e.preventDefault();
        $(this).parents('.popup-bg').addClass('hide');
    });

    $('.android-popup form').on('submit', function(e) {
        e.preventDefault();
        if($(this).find('input[type=submit]').hasClass('disabled')) {
            return false;
        }
        $(this).find('input[type=submit]').addClass('disabled');
        $(this).find('input[type=submit]').val('Отправлено');
        var self = this;
        $.ajax({
            url: $(self).attr('action'),
            type: 'POST',
            data: $(self).serialize()
        });
    });

    $('.price .circle').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $(".registration-btn").offset().top-150
        }, 1500);
    });

    $('body').on('click', '.resend-password', function() {
        var $this = $(this);
        $this.hide();
        $.ajax({
            url: $this.attr('href'),
            success: function() {
                setTimeout(function() {
                    $this.show();
                }, 20000);
            }
        });

        return false;
    });

    $('.after-registration-modal-container a').click(function() {
        document.location = document.location + "?1";

        return false;
    });
});
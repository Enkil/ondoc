// TODO Rewrite this and include only is needed



$(".dropdown-menu-link").click(function () {
    $(".dropdown-menu").toggleClass('display');
});

$(".tabs a").click(function () {
    $("a").toggleClass('current');
});

// toggle displat:nonoe for question block in index page of user cabinet
$(".exit").click(function () {
    $(".quiz").toggleClass('display-none');
});

$('ul.tabs').on('click', 'li:not(.current)', function() {
    $(this).addClass('current').siblings().removeClass('current')
        .parents('.tabs-section').find('div.graph').eq($(this).index()).fadeIn(150).siblings('div.graph').hide();
});



// change class of sugar blocks
$('.shedule-block').click(function(){
    $('.shedule-block--active').removeClass('shedule-block--active');
    $(this).addClass('shedule-block--active');
});

// change class of holestirin blocks
$('.js-hol-find').click(function(event){
    event.preventDefault();
    $('.current').removeClass('current');
    $(this).addClass('current');
});


$(function(){

    $(".select-list-text").on("click", function(){
        $(this).parents(".select-list").toggleClass('open');
    });

    $(".list-drop-item").on("click", function(){

        $(this).parents('.select-list').find(".select-list-text").text($(this).text());
        $(this).parents('.select-list').find(".select-value").val($(this).attr('data-value'));
        $(this).parents(".select-list").removeClass('open');

    });

});


$('.icon-exit').click(function (){
    $('.settings-block').toggleClass('display-none');
});



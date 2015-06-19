/*
Change height of widget left (tabs list) column to height of the right widget column
 */

$(".widget__left-column").css("height", $(".widget__right-column").height() )


$('.widget__right-column').on('onresize', function(){
    $(".widget__left-column").css("height", $(".widget__right-column").height() )
});
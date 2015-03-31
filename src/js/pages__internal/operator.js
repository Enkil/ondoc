$(document).ready(function () {

    $('.operator-tasks-filer__value').click(function (event) {
        event.preventDefault();
        $(this).children('.operator-tasks-filer__dropdown').toggleClass('display-none')
    });
});
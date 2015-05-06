/*  Scripts for health page */

$(document).ready(function () {

    /*  Hide question block */
    $('.health-question__close').click(function (event) {
        event.preventDefault();
        $('.js__find--health-question').addClass('display-none');
    });

    /*  Toggle links in charts block */
    $('.js__find--health-graphs-btn').click(function (event) {
        event.preventDefault();
        $('.health-info__btn').removeClass('health-info__btn--active');
        $(this).addClass('health-info__btn--active');
        $('.js__find--health-analytics-block').addClass('display-none');
        $('.js__find--health-graphs-block').removeClass('display-none');
    });

    $('.js__find--health-analytics-btn').click(function (event) {
        event.preventDefault();
        $('.health-info__btn').removeClass('health-info__btn--active');
        $(this).addClass('health-info__btn--active');
        $('.js__find--health-graphs-block').addClass('display-none');
        $('.js__find--health-analytics-block').removeClass('display-none');
    });

    /*  Open/close settings widget  */
    $('.health-settings__link').click(function (event) {
        event.preventDefault();
        $('.settings').toggleClass('display-none');
    });

    $('.settings__close').click(function (event) {
        event.preventDefault();
        $('.settings').toggleClass('display-none');
    });

});
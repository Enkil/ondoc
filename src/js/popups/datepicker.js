/*  Scripts for Datepicker popup    */

/*  Change date state   */
$('.datepicker__table-item').click(function (event) {
    event.preventDefault();
    $(this).parents('.datepicker').find('.datepicker__table-item').removeClass('datepicker__table-item--active');
    //$('.datepicker__table-item').removeClass('datepicker__table-item--active');
    $(this).addClass('datepicker__table-item--active');
});

$('.datepicker__btn--ok, .datepicker__btn').click(function (event) {
    event.preventDefault();
    $(this).parents('.datepicker').addClass('display-none');
});

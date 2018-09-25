$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('is-active');
        $('menu').toggleClass('visible');
    });
});
$(function() {

    $('figure').click(
        function() {
            $(this).attr('class', '');
            $(this).addClass('flipped');

            const target = $(this).data('target');

            $('.aside-' + target).addClass('anim-pop');
        }
    );
});
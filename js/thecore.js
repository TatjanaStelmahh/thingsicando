$(function() {
    let elementsFlipped = 0;

    $('figure').click(
        function() {
            $(this).addClass('flipped');

            const target = $(this).data('target');

            $('.aside-' + target).addClass('anim-pop');

            elementsFlipped++;

            if (elementsFlipped === 12) {
                $('figure').css('margin', 0);
                $('.name').addClass('visible');
                $('.continue').addClass('visible');
            }
        }
    );
});
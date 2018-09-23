$(function() {
    $('.draggable').draggable();

    $('.droppable').droppable({
        drop: function(event, ui) {
            const $droppedCircle = $(ui.draggable);
            const topic = $droppedCircle.data('topic');

            $droppedCircle.addClass('collapse');

            setTimeout(function() {
                $('.overlay-' + topic).addClass('visible');

                new Vivus('svg-' + topic, {
                    duration: 100
                });
            }, 400);
            
            setTimeout(function() {
                $droppedCircle.removeClass('collapse');
                $('.draggable').css({
                    top: 0,
                    left: 0
                })
            }, 2000);
        }
    });

    $('.close').click(function(){
        $('.overlay').removeClass('visible');
    })
});
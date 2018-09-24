$(function() {

    let topicsVisited = []

    $('.draggable').draggable();

    $('.droppable').droppable({
        drop: function(event, ui) {
            const $droppedCircle = $(ui.draggable);
            openCircle($droppedCircle);
        }
    });

    $('.close').click(function(){
        $('.overlay').removeClass('visible');
    })

    $('.circled').click(function() {
        if ($(window).width()<769) {
            openCircle($(this));
        }
    })

    function openCircle($droppedCircle){
        /*console.log($droppedCircle)*/
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

        if (!topicsVisited.includes(topic)){
            topicsVisited.push(topic);
        }
        
        setTimeout(function() {
            if (topicsVisited.length === 5){
                $('.final-touch').addClass('visible');
            }
        }, 2000);
    }



});
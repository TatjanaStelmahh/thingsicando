$(function() {
    const color1 = '#444';
    const pink = 'pink';

    const lineMaker = new LineMaker({
        position: 'fixed',
        lines: [
            {top: 0, left: '10%', width: 13, height: '100vh', color: color1, hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 400, direction: 'TopBottom' }},
            {top: 0, left: '25%', width: 16, height: '100vh', color: color1, hidden: true, animation: { duration: 1000, easing: 'easeInOutQuad', delay: 100, direction: 'TopBottom' }},
            {top: 0, left: '30%', width: 9, height: '100vh', color: color1, hidden: true, animation: { duration: 1000, easing: 'easeInOutQuad', delay: 0, direction: 'TopBottom' }},
            {top: 0, left: '45%', width: 30, height: '100vh', color: color1, hidden: true, animation: { duration: 1000, easing: 'easeOutSine', delay: 400, direction: 'TopBottom' }},
            {top: 0, left: '58%', width: 17, height: '100vh', color: color1, hidden: true, animation: { duration: 1000, easing: 'easeOutSine', delay: 300, direction: 'TopBottom' }},
            {top: 0, left: '67%', width: 9, height: '100vh', color: color1, hidden: true, animation: { duration: 1000, easing: 'easeInOutQuad', delay: 0, direction: 'TopBottom' }},
            {top: 0, left: '78%', width: 30, height: '100vh', color: color1, hidden: true, animation: { duration: 1000, easing: 'easeOutSine', delay: 400, direction: 'TopBottom' }},
            {top: 0, left: '86%', width: 17, height: '100vh', color: color1, hidden: true, animation: { duration: 1000, easing: 'easeOutSine', delay: 300, direction: 'TopBottom' }},
            {top: 0, left: '95%', width: 17, height: '100vh', color: color1, hidden: true, animation: { duration: 1000, easing: 'easeOutSine', delay: 300, direction: 'TopBottom' }},

            {top: '10%', left: 0, width: '100vw', height: 3, color: pink, hidden: true, animation: { duration: 1000, easing: 'easeOutSine', delay: 200, direction: 'LeftRight' }},
            {top: '32%', left: 0, width: '100vw', height: 15, color: pink, hidden: true, animation: { duration: 1000, easing: 'easeOutSine', delay: 400, direction: 'LeftRight' }},
            {top: '46%', left: 0, width: '100vw', height: 3, color: pink, hidden: true, animation: { duration: 1000, easing: 'easeOutSine', delay: 300, direction: 'LeftRight' }},
            {top: '61%', left: 0, width: '100vw', height: 10, color: pink, hidden: true, animation: { duration: 1000, easing: 'easeOutSine', delay: 600, direction: 'LeftRight' }},
            {top: '70%', left: 0, width: '100vw', height: 3, color: pink, hidden: true, animation: { duration: 1000, easing: 'easeOutSine', delay: 400, direction: 'LeftRight' }},
            {top: '80%', left: 0, width: '100vw', height: 8, color: pink, hidden: true, animation: { duration: 1000, easing: 'easeOutSine', delay: 300, direction: 'LeftRight' }},
        ]
    });
    
    setTimeout(function() {
        lineMaker.animateLinesIn();
    }, 250);
    
    // Ankeedi saatmine
    $("#form").submit(function(event) {
        event.preventDefault();
        var serializedData = $("#form").serialize();

        $.ajax({
            type: "POST",
            url: "../php/form.php",
            data: serializedData,
            success: function(data) {
                if (data === 'success') {
                    $('.success').addClass('visible');
                }
            }
        });
    });
});
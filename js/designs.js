$(function() {
    var $grid = $('.masonry').isotope({
        itemSelector: '.masonry-elem',
    });

    $grid.imagesLoaded().progress( function() {
        $grid.isotope('layout');
    });
    
});
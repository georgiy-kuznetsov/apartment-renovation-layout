$(function() {
    var mapboxHeight = $('.contacts').outerHeight();
    var mapboxWidth = $('.contacts').outerWidth();
    console.log(mapboxHeight);
    $('.map').css('height', mapboxHeight+'px');
    let docWidth = $(document).outerWidth();
    console.log(docWidth);
    if (docWidth <= 990) {
        $('.map').css('flex-basis', mapboxWidth+'px');
    };
});

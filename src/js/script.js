@@include('modal.js');
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

    // Инициализация WOW.js
    new WOW().init();
    $(document).ready(function() {
        $('#brif-form').validate({
            debug: true,
        });
        //Слайдер
        $('.slider').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: $('.arrows__left'),
            nextArrow: $('.arrows__right'),
            responsive: [
                {
                breakpoint: 1240,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 840,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });
        /*$('.services-slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: $('.services-slider__arrow_left'),
            nextArrow: $('.services-slider__arrow_right'),
        });*/
    });
});

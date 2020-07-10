// Инициализация WOW.js
new WOW().init();
//Слайдер
    $(document).ready(function() {
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
    });
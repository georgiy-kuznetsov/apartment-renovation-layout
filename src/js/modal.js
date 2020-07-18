$(function() {
    var button = $('#button');
    var modal = $('#modal');
    var close = $('#close');
    button.on('click', function() {
        modal.addClass('modal_active');
    });
    close.on('click', function() {
        modal.removeClass('modal_active');
    });

    //Кнопка прокрутки наверх
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 50) $('#scroll-button')
        .addClass('scroll-button_visible');
            else $('#scroll-button').removeClass('scroll-button_visible');
        });
    var scrollButton = $('#scroll-button');
    scrollButton.on('click', function() {
        $('html, body').animate({scrollTop:0}, 'slow');
    });


    let closeBtn = $('.close-btn'),
        typeService,
        card = $('.card');

    card.on('click', function() {
        $('body').css('overflow','hidden');
        $('.services').addClass('services_active');
        $('.services__contain').animate({marginTop:'0', opacity:'1'}, 300);
        const service = $(this);
        typeService = service.data('service');
        let arrayListContent = ['Демонтаж старого покрытия стен и пола', 'Выравнивание стен гибкими составами', 'Грунтовка стен и пола антисептиком, бетонопрокатом', 'Монтаж кафельной плтики на полу и стенах', 'Установка реечного или натяжного потолка, светильников', 'Монтаж двери с коробкой', 'Снятие верхнего слоя с потолка, стен и пола', 'Подготовка оконного откоса', 'Выравнивание стен гипсовым составом', 'Виниловое покрытие, шлифовка, грунтовка', 'Поклейка обоев и покраска', 'Выравнивание потолка гипсовым составом', 'Оклейка потолка потолочными обоями или его покраска', 'Натяжной, тканевый или парящий потолок', 'Протяжка пола, покрытие паркетной доской, ламинатом или линолеумом', 'Замена электророзеток'];

        switch (typeService) {
            case 'bathroom': 
                for (i = 0; i < 6; i++) {
                    $('.points__list').append($('<li>', {
                        'class': 'points__items',
                        'text': `${arrayListContent[i]}`
                    }));
                };
                $('.parametr').css("display", "flex");
                $('.points__block').css("display", "block");
                break;
            case 'room-and-flat':
                let firstImg = $('#first-img');
                firstImg.attr("src", "src/img/services-window/badroom-1.jpg").attr("alt", "Спальня");
                let secondImg = $('#second-img');
                secondImg.attr("src", "src/img/services-window/badroom-2.jpg").attr("alt", "Туалет");
                let thirdImg = $('#third-img');
                thirdImg.attr("src", "src/img/services-window/badroom-3.jpg").attr("alt", "Совмещенный санузел");
                for (i = 6; i <= 15; i++) {
                    $('.points__list').append($('<li>', {
                        'class': 'points__items',
                        'text': `${arrayListContent[i]}`
                    }));
                };
                $('.parametr').css("display", "flex");
                $('.points__block').css("display", "block");
                break;
            case 'office':
            case 'new-build':
            case 'kitchen':
            case 'cottage':
                $('.services-slider__items').css('display', 'block');
                break;
        };
    });
    closeBtn.on('click', function() {
        closeWindow();
    });
    $(document).keyup(function(e) {
        if (e.key === "Escape" || e.keyCode === 27) {
            closeWindow();
        };
    });

    function closeWindow() {
        $('.services__contain').animate({marginTop:'100%', opacity:'1'}, 300)
        setTimeout(() => {
            $('.services').removeClass('services_active');
            switch (typeService) {
                case 'bathroom': 
                case 'room-and-flat':
                    $('.points__items').remove();
                    $('.parametr').css("display", "none");
                    $('.points__block').css("display", "none");
            };
            $('body').css('overflow','scroll');
        }, 300);
    };
});
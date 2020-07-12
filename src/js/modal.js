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
    $(document).keyup(function(e) {
        if (e.key === "Escape" || e.keyCode === 27) {
            $('.modal').removeClass('modal_active');
        };
    });

    var closeBtn = $('.close-btn');
    
});
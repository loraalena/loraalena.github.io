$(document).on('ready', function () {
    $(".lazy").slick({
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 100,
        fade: true,
        cssEase: 'linear'

    });
});
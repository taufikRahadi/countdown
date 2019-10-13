$(document).ready(function() {
    $('.sidenav').sidenav();

    $('.parallax').parallax();

    $('.carousel.carousel-slider').carousel({
        indicators: true,
        duration: 400
    });

    autoPlay();
    function autoPlay() {
        $('.carousel.carousel-slider').carousel('next');
        setTimeout(autoPlay, 4500);
    }
})
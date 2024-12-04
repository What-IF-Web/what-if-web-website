/* testimonial slider */
$(document).ready(function () {
    var testimonialsSlider = new Swiper('#testimonials-slider', {
        loop: true,
        slidesPerView: 4,
        centeredSlides: true,
        spaceBetween: 16,
        draggable: true,
        grabCursor: true,
        pagination: {
            el: '.swiper_pagination',
            clickable: true,
        },
        autoplay: {
            delay: 1,
            disableOnInteraction: false,
        },
        speed: 5000,
        freeMode: true,
        freeModeMomentum: true,
    });
});
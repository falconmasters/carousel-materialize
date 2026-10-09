document.addEventListener('DOMContentLoaded', () => {
    const carouselElements = document.querySelectorAll('.carousel');

    carouselElements.forEach((carousel) => {
        M.Carousel.init(carousel, {
            duration: 300,
            dist: -30,
            shift: 0,
            padding: 0,
            numVisible: 3,
            indicators: true,
            noWrap: false
        });
    });
});

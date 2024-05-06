document.addEventListener('DOMContentLoaded', function () {
    const lazyLoadInstance = new LazyLoad({
        // Your custom settings go here
    });

    //begin sliders
    const mainSlider = new Swiper('.hero__swiper', {
        // Optional parameters
        loop: true,
        spaceBetween: 20,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    //end sliders

    //begin BURGER-MENU
    let burgerMenu = document.getElementById('burger-menu');
    let overlay = document.querySelector('.header-menu');
    burgerMenu.addEventListener('click',function(){
        this.classList.toggle("close");
        overlay.classList.toggle("overlay");
    });
    //end BURGER-MENU
});
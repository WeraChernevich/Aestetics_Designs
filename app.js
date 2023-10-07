const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    parallax: true,
    speed: 1000,

    keyboard: {
        enabled: true,

    },

    // If we need pagination
    pagination: {
        el: '.slider-controlls__count',
        type: 'fraction',
    },

    // Navigation arrows
    navigation: {
        nextEl: '#slider-next',
        prevEl: '#slider-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});


document.querySelector('.mobile-nav__button').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.mobile-nav__list').classList.toggle('open');
});
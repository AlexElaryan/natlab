const swiper1 = new Swiper('.swiper1', {
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});

const swiper2 = new Swiper('.swiper2', {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next1',
      },
});

const swiper3 = new Swiper('.swiper3', {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next2',
      },
});
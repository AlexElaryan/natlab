const swiper1 = new Swiper('.swiper1', {
  spaceBetween: 10,
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper2 = new Swiper('.swiper2', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next1',
  },
  breakpoints: {
    // When the window width is >= 640px
    550: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    655: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1465: {
      slidesPerView: 4,
      spaceBetween: 25,
    }
  },
});

const swiper3 = new Swiper('.swiper3', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next2',
  },
  breakpoints: {
    // When the window width is >= 640px
    550: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    655: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1465: {
      slidesPerView: 4,
      spaceBetween: 25,
    }
  },
});

const swiper4 = new Swiper('.swiper4', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next3',
  },
  breakpoints: {
    // When the window width is >= 640px
    550: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    655: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1465: {
      slidesPerView: 4,
      spaceBetween: 40,
    }
  },
});

const swiper5 = new Swiper('.swiper5', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next4',
  },
  breakpoints: {
    // When the window width is >= 640px
    550: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    655: {
      slidesPerView: 3,
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1465: {
      slidesPerView: 4,
      spaceBetween: 25,
    }
  },
});

const recItems = document.querySelectorAll('.rec-item');
const commItems = document.querySelectorAll('.com-item');

function setSwiperHeight(swiper, item) {
  const swiperContainer = document.querySelector(`.${swiper}`);

  if (recItems.length > 0) {
    const recItemStyle = getComputedStyle(item[0]);

    swiperContainer.style.height = (parseFloat(recItemStyle.height) + 10) + 'px';
  }
}

window.addEventListener('resize', () => setSwiperHeight('swiper4', recItems));
window.addEventListener('resize', () => setSwiperHeight('swiper5', commItems));
document.addEventListener('DOMContentLoaded', () => setSwiperHeight('swiper4', recItems));
document.addEventListener('DOMContentLoaded', () => setSwiperHeight('swiper5', commItems));



// burger menu

let burgerBtn = document.querySelector('.burger-btn');
let nav = document.querySelector('header nav');
let burgerIsOpen = false;

burgerBtn.onclick = () => {
  if (!burgerIsOpen) {
    burgerBtn.src = 'images/crossBurger.png';
    burgerBtn.style.width = '35px';
    nav.classList.toggle('burgerOpen');
    burgerIsOpen = true;
  } else if (burgerIsOpen) {
    burgerBtn.src = 'images/Burger.svg';
    burgerBtn.style.width = '30px';
    nav.classList.toggle('burgerOpen');
    burgerIsOpen = false;
  }
}

let navbarLabPlus = document.querySelector('.navbar-lab-plus');
let navbarLabMobileBox = document.querySelector('.mobileNavbarLab');
let navblmbIsOpen = false;
 
navbarLabPlus.onclick = () => {
  if (!navblmbIsOpen) {
    navbarLabMobileBox.style.display = 'flex';
    navblmbIsOpen = true;
  } else if (navblmbIsOpen) {
    navbarLabMobileBox.style.display = 'none'
    navblmbIsOpen = false;
  }
}
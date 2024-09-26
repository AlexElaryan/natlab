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

navbarLabPlus.addEventListener('click', (e) => {
  e.preventDefault(); 

  if (!navblmbIsOpen) {
    navbarLabMobileBox.style.display = 'flex';
    navbarLabPlus.classList.add('rotate-plus');
    navblmbIsOpen = true;
  } else {
    navbarLabMobileBox.style.display = 'none';
    navbarLabPlus.classList.remove('rotate-plus');
    navblmbIsOpen = false;
  }
});
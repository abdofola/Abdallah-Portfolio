const menuBtn = document.querySelector('.menu-btn');
const menuBtnToggler = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const menuItem = document.querySelectorAll('.menu-nav__item');
let open = false;

// Event for toggling the menu
menuBtn.addEventListener('click', menuToggle);
function menuToggle() {
    console.log(this);
    if (!open) {
        menuBtnToggler.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        menuItem.forEach(element => element.classList.add('open'));
        open = true;
    } else {
        menuBtnToggler.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        menuItem.forEach(element => element.classList.remove('open'));
        open = false;
    }
}
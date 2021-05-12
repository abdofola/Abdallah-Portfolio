const menuBtn = document.querySelector('.menu-btn');
const menuBtnToggler = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const menuItem = document.querySelectorAll('.menu-nav__item');
const bioImg = document.querySelector('.projects__bio-image');
let open = false;

// Event for toggling the menu
menuBtn.addEventListener('click', menuToggle);

function menuToggle() {
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

function callback() {
    const bioRec = bioImg.getBoundingClientRect();

    (bioRec.bottom <= 100) ?
        nav.classList.add('scroll')
        : nav.classList.remove('scroll')

    window.requestAnimationFrame(callback);
}
window.requestAnimationFrame(callback);

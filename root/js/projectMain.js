import { appDetials, boomDetials } from "./detialsIntances.js";
const appscript = "https://abdofola.github.io/Abdallah-Portfolio/root/project-appscript.html";
const boom = "https://abdofola.github.io/Abdallah-Portfolio/root/project-boom.html";
let detials;
// console.log(window.location.href);

switch (window.location.href) {
  case appscript:
    detials = appDetials;
    break;
  case boom:
    detials = boomDetials;
    break;
  default:
    break;
}
displayDetial(detials);

import {
  hasClass,
  addClass,
  removeClass,
  displayBlock,
  displayNone,
} from "./utility.js";

const arrows = document.querySelectorAll(".slideshow a");
const sliders = document.querySelectorAll(".slideshow__slide");
const dots = document.querySelectorAll(".dot");
const projMenu = document.querySelector(".menu__crumbs");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let count = 1;
let currentIdx = 0;

// function to redirect to the main projects menu
projMenu.addEventListener("click", displayProjectsMenu);
function displayProjectsMenu() {
  console.log("clicked from the other side");
  window.location.href = "index.html#project";
}

showSlide(currentIdx);
displayNone(prev);
addClass(dots[currentIdx], "active");

arrows.forEach((arrow) => {
  hasClass(arrow, "next")
    ? arrow.addEventListener("click", nexImg)
    : arrow.addEventListener("click", prevImg);
});

dots.forEach((dot, idx) => {
  dot.addEventListener("click", function () {
    currentIdx = idx;

    switch (idx) {
      case 0:
        displayNone(prev);
        displayBlock(next);
        break;
      case sliders.length - 1:
        displayNone(next);
        displayBlock(prev);
        break;
      default:
        displayBlock(next);
        displayBlock(prev);
        break;
    }

    dots.forEach((dot) => removeClass(dot, "active"));
    addClass(this, "active");
    showSlide(idx);
  });
});

function nexImg() {
  displayBlock(prev);
  showSlide(currentIdx + count);
  dots.forEach((dot) => dot.classList.remove("active"));
  addClass(dots[currentIdx + count], "active");
  currentIdx += count;
  if (currentIdx == sliders.length - 1) {
    displayNone(this);
  }
}

function prevImg() {
  displayBlock(next);
  showSlide(currentIdx - count);
  dots.forEach((dot) => removeClass(dot, "active"));
  addClass(dots[currentIdx - count], "active");
  currentIdx -= count;
  if (currentIdx == count - 1) {
    displayNone(this);
  }
}

function showSlide(currentIdx) {
  sliders.forEach((slider, idx) => {
    idx == currentIdx ? displayBlock(slider) : displayNone(slider);
  });
}

/* Add Detail Model */
function displayDetial(detialObj) {
  const title = detialObj.getTitle();
  const scArr = detialObj.getScreens();
  const techArr = detialObj.getTech();
  const about = detialObj.getAbout();
  const p = document.createElement("p");
  const h1 = document.createElement("h1");
  const sliders = [],
    imgs = [],
    items = [];
  h1.textContent = title;
  document
    .querySelector(".article__header")
    .insertAdjacentElement("afterbegin", h1);

  for (let i = 0; i < scArr.length; i++) {
    sliders[i] = document.createElement("div");
    imgs[i] = document.createElement("img");
    addClass(sliders[i], "slideshow__slide", "slideshow__slide--fade");
    imgs[i].src = scArr[i];
    sliders[i].append(imgs[i]);
    document
      .querySelector(".slideshow")
      .insertAdjacentElement("afterbegin", sliders[i]);
  }
  p.textContent = about;
  document
    .querySelector(".article__about h2")
    .insertAdjacentElement("afterend", p);

  for (let i = 0; i < techArr.length; i++) {
    items[i] = document.createElement("li");
    items[i].textContent = techArr[i];
    document
      .querySelector(".article__technical ul")
      .insertAdjacentElement("afterbegin", items[i]);
  }
}

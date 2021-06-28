// import * as main from "./main.js";
const arrows = document.querySelectorAll(".slideshow a");
const sliders = document.querySelectorAll(".slideshow__slide");
const dots = document.querySelectorAll(".dot");
const proMenu = document.querySelector(".menu__crumbs");

// function to redirect to main projects menu
proMenu.addEventListener("click", displayProjectsMenu);
function displayProjectsMenu() {
  console.log("clicked from the other side");
  window.location.href = "index.html#project";
}

let count = 1;
let currentIdx = 0;

showSlide(currentIdx);
document.querySelector(".prev").style.display = "none";
dots[currentIdx].classList.add("active");

arrows.forEach((arrow) => {
  if (hasClass(arrow, "next")) arrow.addEventListener("click", nexImg);
  else arrow.addEventListener("click", prevImg);
});

dots.forEach((dot, idx) => {
  dot.addEventListener("click", function () {
    currentIdx = idx;

    if (idx == 0) {
      document.querySelector(".prev").style.display = "none";
      document.querySelector(".next").style.display = "block";
    } else if (idx == sliders.length - 1) {
      document.querySelector(".next").style.display = "none";
      document.querySelector(".prev").style.display = "block";
    } else {
      document.querySelector(".next").style.display = "block";
      document.querySelector(".prev").style.display = "block";
    }

    dots.forEach((dot) => dot.classList.remove("active"));
    this.classList.add("active");
    showSlide(idx);
  });
});

function nexImg() {
  document.querySelector(".prev").style.display = "block";
  showSlide(currentIdx + count);
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentIdx + count].classList.add("active");
  currentIdx += count;
  if (currentIdx == sliders.length - 1) {
    this.style.display = "none";
  }
}

function prevImg() {
  document.querySelector(".next").style.display = "block";
  showSlide(currentIdx - count);
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentIdx - count].classList.add("active");
  currentIdx -= count;
  if (currentIdx == count - 1) {
    this.style.display = "none";
  }
}

function showSlide(currentIdx) {
  sliders.forEach((slider, idx) => {
    if (idx == currentIdx) slider.style.display = "block";
    else slider.style.display = "none";
  });
}

// function to check if element has a certian class(supports old browsers)
function hasClass(element, classN) {
  return element.className.indexOf(classN) > -1 ? true : false;
}

import Jobs from "./Jobs.js";

const jobs = new Jobs();
const menuBtn = document.querySelector(".menu-btn");
const menuBtnToggler = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const main = document.querySelector("main");
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll("li .menu-nav__link");
const menuItem = document.querySelectorAll(".menu-nav__item");
const bioImg = document.querySelector(".about__bio-image");
const jobsWrapper = document.querySelector(".jobs");
const footers = document.querySelectorAll("footer");
const cue = document.querySelector(".header-cue");
const currentYear = new Date().getFullYear();
let open = false;

// Fire up Touch Events when content loads
document.addEventListener("DOMContentLoaded", startup);
function startup() {
  main.addEventListener("touchend", handleEnd, false);
}

function handleEnd(event) {
  const touches = event.changedTouches;
  for (let index = 0; index < touches.length; index++) {
    console.log("client width:", this.clientWidth);
    console.log("clientX:", touches[index].clientX);
    const position = this.clientWidth - touches[index].clientX;
    console.log("Position: ", position);
    if (position <= 350 && touches[index].clientX <=200) {
      menuBtnToggler.classList.add("open");
      nav.classList.add("open");
      menuNav.classList.add("open");
      main.classList.add("navigation");
      menuItem.forEach((element) => {
        element.classList.add("open");
      });
      open = true;
    }
  }
}

// Events for toggling the menu.
menuBtn.addEventListener("click", menuToggle);

// Event to close the menu when clicking in any area of the document.
nav.addEventListener("click", closeMenu);

// Event to toggle sections
links.forEach((link) => {
  link.addEventListener("click", sectionToggle);
});

function menuToggle() {
  if (!open) {
    menuBtnToggler.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");
    main.classList.add("navigation");
    menuItem.forEach((element) => {
      element.classList.add("open");
    });
    open = true;
  } else {
    menuBtnToggler.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    main.classList.remove("navigation");
    menuItem.forEach((element) => element.classList.remove("open"));
    open = false;
  }
}
function closeMenu() {
  if (open) {
    menuBtnToggler.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    main.classList.remove("navigation");
    menuItem.forEach((element) => element.classList.remove("open"));
    open = false;
  }
}
function sectionToggle(event) {
  const linkId = event.target.dataset.id;
  sections.forEach((section, idx) => {
    const sectionId = section.getAttribute("id");
    const match = sectionId == linkId;
    if (!match) {
      section.classList.add("d-none");
      menuItem[idx].classList.remove("active");
    } else {
      section.classList.remove("d-none");
      menuItem[idx].classList.add("active");
    }
  });
}

// pause animation until all assets on a page have loaded.
document.body.classList.add("js-loading");
window.addEventListener("load", animate);
function animate() {
  sections.forEach((section) => {
    if (section.getAttribute("id") != "home") {
      section.classList.add("d-none");
    }
  });
  document.body.classList.remove("js-loading");
}

// Footer
footers.forEach((footer) => {
  footer.append(currentYear);
});

// function to add shadow to the nav when scroll
function callback() {
  const bioRec = bioImg.getBoundingClientRect();
  const cueRec = bioImg.getBoundingClientRect();
  console.log(cueRec.top);

  bioRec.bottom <= 100
    ? nav.classList.add("scroll")
    : nav.classList.remove("scroll");

  cueRec.top < 0 ? (cue.style.display = "none") : (cue.style.display = "block");

  window.requestAnimationFrame(callback);
}
window.requestAnimationFrame(callback);

// Add jobs
jobs.assignJob().forEach((job) => {
  const jobDiv = document.createElement("div");
  const h2 = document.createElement("h2");
  const h3 = document.createElement("h3");
  const h6 = document.createElement("h6");
  const p = document.createElement("p");
  h2.textContent = job.rangeOfYear;
  h3.textContent = job.company;
  h6.textContent = job.domain;
  p.textContent = job.text;
  h2.classList.add("text-secondary");
  jobDiv.classList.add("jobs__job");
  jobDiv.append(h2, h3, h6, p);
  jobsWrapper.append(jobDiv);
});

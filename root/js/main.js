import Jobs from "./Jobs.js";

const jobs = new Jobs();
const menuBtn = document.querySelector(".menu-btn");
const menuBtnToggler = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const main = document.querySelector("main");
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll("li .menu-nav__link");
const menuItems = document.querySelectorAll(".menu-nav__item");
const bioImg = document.querySelector(".about__bio-image");
const jobsWrapper = document.querySelector(".jobs");
const footers = document.querySelectorAll("footer");
const cue = document.querySelector(".header-cue");
const currentYear = new Date().getFullYear();
let open = false;
let drag = false;
let startPosition = 0;
let currentPosition = 0;
let animationId = 0;

// Fire up Touch Events when content loads.
// Inspired by Brad https://www.youtube.com/watch?v=5bxFSOA5JYo&t=642s
document.addEventListener("DOMContentLoaded", startup);
function startup() {
  document.addEventListener("touchstart", handleStart);
  document.addEventListener("touchmove", handleMove);
  document.addEventListener("touchend", handleEnd);
}

function handleStart(event) {
  drag = true;
  startPosition = getPositionX(event);
  console.log("Start:", startPosition);
  animationId = requestAnimationFrame(translate);
}
function handleMove(event) {
  if (drag) {
    currentPosition = getPositionX(event);
    console.log("----> start, current: ", startPosition, currentPosition);
  }
}
function handleEnd(event) {
  drag = false;
  // open = false;
  cancelAnimationFrame(animationId);
  const movedBy = currentPosition - startPosition;
  console.log("moved By:", movedBy);
  if (movedBy > 100) openMenu(event.type);
  else if (movedBy < -100) closeMenu(event.type);
}

function getPositionX(e) {
  return e.touches[0].clientX;
}
function translate() {
  drag && window.requestAnimationFrame(translate);
}
/************* End of touch event ***************/

// Events for toggling the menu.
menuBtn.addEventListener("click", menuToggle);

// Event to close the menu when clicking in any area of the document.
// nav.addEventListener("click", closeMenu);

// Event to toggle sections
links.forEach((link) => {
  link.addEventListener("click", sectionToggle);
});

function menuToggle(event) {
  // open = false;
  !open ? openMenu(event.type) : closeMenu(event.type);
}
function closeMenu(type) {
  menuBtnToggler.classList.remove("open");
  nav.classList.remove("open");
  menuNav.classList.remove("open");
  main.classList.remove("navigation");
  menuItems.forEach((item) => item.classList.remove("open"));
  if (type == "click") open = false;
  console.log("Open: ", open);
  console.log("Event type: ", type);
}
function openMenu(type) {
  menuBtnToggler.classList.add("open");
  nav.classList.add("open");
  menuNav.classList.add("open");
  main.classList.add("navigation");
  menuItems.forEach((item) => item.classList.add("open"));
  if (type == "click") open = true;
  console.log("Open: ", open);
}
function sectionToggle(event) {
  const linkId = event.target.dataset.id;
  sections.forEach((section, idx) => {
    const sectionId = section.getAttribute("id");
    const match = sectionId == linkId;
    if (!match) {
      section.classList.add("d-none");
      menuItems[idx].classList.remove("active");
    } else {
      section.classList.remove("d-none");
      menuItems[idx].classList.add("active");
    }
  });
  closeMenu();
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

  cueRec.top < 0 ? cue.classList.add("d-none") : cue.classList.remove("d-none");

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

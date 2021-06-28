import Jobs from "./Jobs.js";
import Project from "./Project.js";

const jobs = new Jobs();
const project = new Project();
const currentYear = new Date().getFullYear();
const nav = document.querySelector(".nav");
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll("li .menu-nav__link");
const homeLink = document.querySelector(".btn");
const menuItems = document.querySelectorAll(".menu-nav__item");
const menuIndecator = document.querySelector(".sc-nav-indicator");
const currItem = document.querySelector(".sc-current");
const bioImg = document.querySelector(".about__bio-image");
const jobsWrapper = document.querySelector(".jobs");
const footers = document.querySelectorAll("footer");
const cue = document.querySelector(".header-cue");
const flipBox = document.querySelector(".flip-box__inner");
const projectItems = document.querySelector(".projects__items");
const prevPage = document.referrer;
const indexPage = "https://abdofola.github.io/Abdallah-Portfolio/root/";
const projectPage =
  "https://abdofola.github.io/Abdallah-Portfolio/root/project-appscript.html";
const px = 14.5;
let indicatorPosition = 0;

indicatorPosition = currItem.offsetLeft;
menuIndecator.style.left = indicatorPosition - px + "px";
nav.style.backgroundPosition = indicatorPosition + "px";

console.log(prevPage);
// conditions to display sections by default
switch (prevPage) {
  case indexPage:
    sections.forEach(
      (section) =>
        section.getAttribute("id") != "home" && addClass(section, "d-none")
    );
    break;
  case projectPage:
    offsetX(menuItems[2].children[0]);
    sections.forEach(
      (section) =>
        section.getAttribute("id") != "projects" && addClass(section, "d-none")
    );
    break;
  default:
    console.log("I am default");
    sections.forEach(
      (section) =>
        section.getAttribute("id") != "home" && addClass(section, "d-none")
    );
}

function offsetX(elem) {
  menuItems.forEach((item) => removeClass(item, "sc-current", "active"));
  console.log("object type:", elem.constructor.name);
  console.log("classes", elem.classList);
  console.log("hasClass btn?", hasClass(elem, "btn"));

  if (hasClass(elem, "btn")) {
    posIndicatorNavBg(menuItems[3]);
    addClass(menuItems[3], "sc-current", "active");
  } else {
    posIndicatorNavBg(elem);
    addClass(elem.parentElement, "sc-current", "active");
  }
}

function posIndicatorNavBg(element) {
  indicatorPosition = element.offsetLeft;
  menuIndecator.style.left = indicatorPosition - px + "px";
  nav.style.backgroundPosition = indicatorPosition + "px";
}

// Events to toggle sections
homeLink.addEventListener("click", sectionToggle);
links.forEach((link) => {
  link.addEventListener("click", sectionToggle);
});

function sectionToggle(event) {
  const linkId = event.target.dataset.id;

  !hasClass(flipBox, "flip-horizonal")
    ? addClass(flipBox, "flip-horizonal")
    : removeClass(flipBox, "flip-horizonal");

  sections.forEach((section, idx) => {
    const sectionId = section.getAttribute("id");
    const match = sectionId == linkId;

    hasClass(section.parentElement, "flip-horizonal")
      ? (section.style.transform = "rotateY(180deg)")
      : (section.style.transform = "none");

    !match ? addClass(section, "d-none") : removeClass(section, "d-none");
  });

  offsetX(event.currentTarget);
}

// pause animation until all assets on a page have loaded.
addClass(document.body, "js-loading");
window.addEventListener("load", animate);
function animate() {
  removeClass(document.body, "js-loading");
}

// Footer date
footers.forEach((footer) => {
  footer.append(currentYear);
});

// function to toggle the down-finger icon appearence
function callback() {
  const cueRec = bioImg.getBoundingClientRect();

  cueRec.top < -5 ? (cue.style.display = "none") : (cue.style.display = "flex");

  window.requestAnimationFrame(callback);
}
window.requestAnimationFrame(callback);

/***************** Utility functions ********************/

function hasClass(element, classN) {
  return element.className.indexOf(classN) > -1 ? true : false;
}

function addClass(element, ...classList) {
  element.classList.add(...classList);
}

function removeClass(element, ...classList) {
  element.classList.remove(...classList);
}

/* --------------------------------------------- */

/* Add jobs */
jobs.assignJob().forEach((job) => {
  const jobDiv = document.createElement("div");
  const h2 = document.createElement("h2");
  const h3 = document.createElement("h3");
  const h6 = document.createElement("h6");
  const p = document.createElement("p");
  h2.textContent = job.rangeOfYear;
  h3.textContent = job.company;
  h6.textContent = job.role;
  p.textContent = job.text;
  addClass(h2, "text-secondary");
  addClass(jobDiv, "jobs__job");
  jobDiv.append(h2, h3, h6, p);
  jobsWrapper.append(jobDiv);
});

/* Add projects */
project.addProject().forEach((project) => {
  const spanArr = [];
  const spanClasses = [
    "projects__item__header--red",
    "projects__item__header--yellow",
    "projects__item__header--green",
    "projects__item__header--green",
  ];

  // Create elems
  const projectItem = document.createElement("div");
  const itemHeader = document.createElement("div");
  for (let i = 0; i < 4; i++) {
    spanArr[i] = document.createElement("span");
  }
  const img = document.createElement("img");
  const proBtn = document.createElement("div");
  const anchor = document.createElement("a");

  // Add classes
  addClass(projectItem, "projects__item");
  addClass(itemHeader, "projects__item__header");
  spanArr.forEach((span, idx) => {
    addClass(span, spanClasses[idx]);
  });
  addClass(proBtn, "projects__btn");

  // Inner texts & attributes
  spanArr[spanArr.length - 1].textContent = project.getTitle();
  img.src = project.getScreen();
  img.alt = "My project";
  anchor.href = project.getLink();
  anchor.textContent = "more ..";

  // Append elems
  spanArr.forEach((span) => itemHeader.append(span));
  proBtn.append(anchor);
  projectItem.append(itemHeader, img, proBtn);
  projectItems.append(projectItem);
});

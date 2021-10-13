import {
  addClass,
  removeClass,
  hasClass,
  transform,
  displayNone,
  displayBlock,
  preLoader,
} from "./utility.js";
import Jobs from "./Job.js";
import Project from "./Project.js";

const jobs = new Jobs();
const project = new Project();
const currentYear = new Date().getFullYear();
const header = document.querySelector("header");
const logo = document.querySelector(".logo");
const main = document.querySelector("main");
const loader = document.querySelector(".loader");
const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu-nav");
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll("li .menu-nav__link");
const homeLink = document.querySelector(".btn--contact");
const projLink = document.querySelector(".btn--projects");
const menuItems = document.querySelectorAll(".menu-nav__item");
const menuIndecator = document.querySelector(".sc-nav-indicator");
const bioImg = document.querySelector(".about__bio-image");
const jobsWrapper = document.querySelector(".jobs");
const footers = document.querySelectorAll("footer");
const cue = document.querySelector(".header-cue");
const flipBox = document.querySelector(".flip-box__inner");
const projectItems = document.querySelector(".projects__items");
const href = document?.location?.href;
const link = href.split("#")[1];
const projectItemList = [];
const menuRec = menu?.getBoundingClientRect();
const indicatorConst = 14.6;
const navConst = -1;
let currItem = document.querySelector(".sc-current.active");
let currItemRec = currItem?.getBoundingClientRect();
let offset = currItemRec.left - menuRec.left;
let indicatorPosition = offset;
let lastScroll = 0;

menuIndecator.style.left = indicatorPosition - indicatorConst + "px";
nav.style.backgroundPosition = indicatorPosition - navConst + "px";


preLoader(function () {
  displayNone(loader);
  displayBlock(header);
  displayBlock(main);
  displaySection();
});

// function to display a particular section when page load
function displaySection() {
  switch (link) {
    case "contact":
      offsetX(links[3]);
      sections.forEach(
        (section) =>
          section.getAttribute("id") != "contact" && addClass(section, "d-none")
      );
      break;
    case "projects":
      offsetX(links[2]);
      sections.forEach(
        (section) =>
          section.getAttribute("id") != "projects" &&
          addClass(section, "d-none")
      );
      break;
    default:
      sections.forEach(
        (section) =>
          section.getAttribute("id") != "home" && addClass(section, "d-none")
      );
      break;
  }
}

function offsetX(elem) {
  menuItems.forEach((item) => removeClass(item, "sc-current", "active"));

  switch (elem.className) {
    case "btn btn--contact":
      addClass(menuItems[3], "sc-current", "active");
      posIndicatorNavBg(menuItems[3]);
      break;
    case "btn btn--projects":
      addClass(menuItems[2], "sc-current", "active");
      posIndicatorNavBg(menuItems[2]);
      break;
    case "logo":
      addClass(menuItems[0], "sc-current", "active");
      posIndicatorNavBg(menuItems[0]);
      break;
    default:
      addClass(elem.parentElement, "sc-current", "active");
      posIndicatorNavBg(elem.parentElement);
      break;
  }
}

function posIndicatorNavBg(element) {
  currItem = element;
  offset = currItem.offsetLeft;
  indicatorPosition = offset;
  menuIndecator.style.left = indicatorPosition - indicatorConst + "px";
  nav.style.backgroundPosition = indicatorPosition - navConst + "px";
}

// Events to toggle sections
[logo, homeLink, projLink].forEach((link) =>
  link.addEventListener("click", sectionToggle)
);

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
      ? transform(section, "rotateY(180deg)")
      : transform(section, "none");

    !match ? addClass(section, "d-none") : removeClass(section, "d-none");
  });

  offsetX(event.currentTarget);
}

// Footer date
footers.forEach((footer) => {
  footer.append(currentYear);
});

// function to toggle the down-finger icon appearence
function callback() {
  const bioRec = bioImg.getBoundingClientRect();

  if (bioRec.top < -5) {
    displayNone(cue?.children[0]);
    displayNone(cue?.children[1]);
  } else {
    displayBlock(cue?.children[0]);
    displayBlock(cue?.children[1]);
  }
  window.requestAnimationFrame(callback);
}
window.requestAnimationFrame(callback);

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
  projectItemList.push(projectItem);
});

projectItemList.forEach((item) => {
  item.addEventListener("click", function () {
    projectItemList.forEach((item) => removeClass(item, "click"));
    addClass(this, "click");
  });
});

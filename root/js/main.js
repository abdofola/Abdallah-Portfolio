import {
  addClass,
  removeClass,
  hasClass,
  display,
  transform,
  displayNone,
} from "./utility.js";
import {
  BLOG_PAGE,
  FACEBOOK_PAGE,
  BOOM_PAGE,
  APPSCRIPT_PAGE,
  INDEX_PAGE,
  DRUM_PAGE,
} from "./variable_enviroment.js";
import Jobs from "./Job.js";
import Project from "./Project.js";

const jobs = new Jobs();
const project = new Project();
const currentYear = new Date().getFullYear();
const nav = document.querySelector(".nav");
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll("li .menu-nav__link");
const homeLink = document.querySelector(".btn--contact");
const projLink = document.querySelector(".btn--projects");
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
const href = document.location?.href;
const link = href.split("#")[1];
const PROJECT_PAGE =
  prevPage == BOOM_PAGE ||
  prevPage == APPSCRIPT_PAGE ||
  prevPage == FACEBOOK_PAGE ||
  prevPage == BLOG_PAGE ||
  prevPage == DRUM_PAGE;
const px = 14.5;
let indicatorPosition = 0;

indicatorPosition = currItem.offsetLeft;
menuIndecator.style.left = indicatorPosition - px + "px";
nav.style.backgroundPosition = indicatorPosition + "px";

/********************************************************* */
if (link == "contact") {
  console.log("document.location.href:", href);
  console.log("Link query 1:", link);
  offsetX(links[3]);
  sections.forEach(
    (section) =>
      section.getAttribute("id") != "contact" && addClass(section, "d-none")
  );
} else {
  console.log("no link");
}
/********************************************************* */

console.log("PREVIOUS PAGE:", prevPage);
console.log("PROJECT_PAGE:", PROJECT_PAGE);

// conditions to display sections by default
if (prevPage == INDEX_PAGE && !link) {
  sections.forEach(
    (section) =>
      section.getAttribute("id") != "home" && addClass(section, "d-none")
  );
} else if (PROJECT_PAGE && !link) {
  offsetX(links[2]);
  sections.forEach(
    (section) =>
      section.getAttribute("id") != "projects" && addClass(section, "d-none")
  );
} else if (!(prevPage == INDEX_PAGE) && !link)
  sections.forEach(
    (section) =>
      section.getAttribute("id") != "home" && addClass(section, "d-none")
  );

function offsetX(elem) {
  menuItems.forEach((item) => removeClass(item, "sc-current", "active"));
  // console.log("object type:", elem.constructor.name);
  // console.log("classes", elem.classList);
  // console.log("hasClass btn?", hasClass(elem, "btn"));
  if (hasClass(elem, "btn--contact")) {
    posIndicatorNavBg(menuItems[3]);
    addClass(menuItems[3], "sc-current", "active");
  } else if (hasClass(elem, "btn--projects")) {
    posIndicatorNavBg(menuItems[2]);
    addClass(menuItems[2], "sc-current", "active");
  } else {
    posIndicatorNavBg(elem.parentElement);
    addClass(elem.parentElement, "sc-current", "active");
  }
}

function posIndicatorNavBg(element) {
  console.log("element:", element);
  indicatorPosition = element.offsetLeft;
  console.log("offsetleft:", indicatorPosition);
  menuIndecator.style.left = indicatorPosition - px + "px";
  nav.style.backgroundPosition = indicatorPosition + "px";
}

// Events to toggle sections
homeLink.addEventListener("click", sectionToggle);
projLink.addEventListener("click", sectionToggle);
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

  if (cueRec.top < -5) {
    display(cue?.children[0], "none");
    display(cue?.children[1], "none");
  } else {
    display(cue?.children[0], "block");
    display(cue?.children[1], "block");
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
});

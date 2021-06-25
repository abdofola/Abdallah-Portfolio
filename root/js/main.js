import Jobs from "./Jobs.js";

const jobs = new Jobs();
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
const px = 14.5;
let indecatorPosition = 0;

indecatorPosition = currItem.offsetLeft;
menuIndecator.style.left = indecatorPosition - px + "px";
nav.style.backgroundPosition = indecatorPosition + "px";

menuItems.forEach((item) => {
  item.addEventListener("click", offsetX);
});
function offsetX(event) {
  const elem = event.target;

  hasClass(elem, "btn")
    ? (indecatorPosition = menuItems[3].offsetLeft)
    : (indecatorPosition = this.offsetLeft);

  menuIndecator.style.left = indecatorPosition - px + "px";
  nav.style.backgroundPosition = indecatorPosition + "px";

  // This console log its job to make the code fuckin work, I shit you not if you dare to delete it the code will trigger an error !!!!
  console.log("item  offsetLeft", this.offsetLeft);
  console.log("fooooooooooooooooola");

  menuItems.forEach((item) => {
    item.classList.remove("sc-current");
  });

  this.classList.add("sc-current");
}

// Event to toggle sections
homeLink.addEventListener("click", sectionToggle);
links.forEach((link) => {
  link.addEventListener("click", sectionToggle);
});

function sectionToggle(event) {
  const linkId = event.target.dataset.id;

  !hasClass(flipBox, "flip-horizonal")
    ? flipBox.classList.add("flip-horizonal")
    : flipBox.classList.remove("flip-horizonal");

  sections.forEach((section, idx) => {
    const sectionId = section.getAttribute("id");
    const match = sectionId == linkId;
    
    hasClass(section.parentElement, "flip-horizonal")
      ? (section.style.transform = "rotateY(180deg)")
      : (section.style.transform = "rotateY(0deg)");
      
    if (!match) {
      section.classList.add("d-none");
      // section.style.transform = "rotateY(0)";
      menuItems[idx].classList.remove("active");
      menuItems[idx].classList.remove("sc-current");
    } else {
      section.classList.remove("d-none");
      // section.style.transform = "rotateY(180deg)";
      menuItems[idx].classList.add("active");
      menuItems[idx].classList.add("sc-current");
    }
  });

  offsetX(event);
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

// Footer date
footers.forEach((footer) => {
  footer.append(currentYear);
});

// function to toggle the down-finger icon appearence
function callback() {
  const cueRec = bioImg.getBoundingClientRect();

  cueRec.top < 0 ? (cue.style.display = "none") : (cue.style.display = "flex");

  window.requestAnimationFrame(callback);
}
window.requestAnimationFrame(callback);

// function to check if element has a certian class(supports old browsers)
function hasClass(element, classN) {
  return element.className.indexOf(classN) > -1 ? true : false;
}

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

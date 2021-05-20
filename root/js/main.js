import Jobs from "./Jobs.js";

const jobs = new Jobs();
const menuBtn = document.querySelector(".menu-btn");
const menuBtnToggler = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const menuItem = document.querySelectorAll(".menu-nav__item");
const bioImg =
  document.querySelector(".projects__bio-image") ||
  document.querySelector(".about__bio-image");
const jobsWrapper = document.querySelector(".jobs");
const footer = document.querySelector("footer");
const currentYear = new Date().getFullYear();
let open = false;

// Event for toggling the menu
menuBtn.addEventListener("click", menuToggle);

function menuToggle() {
  if (!open) {
    menuBtnToggler.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");
    menuItem.forEach((element) => element.classList.add("open"));
    open = true;
  } else {
    menuBtnToggler.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    menuItem.forEach((element) => element.classList.remove("open"));
    open = false;
  }
}

// Footer
footer.append(currentYear);

// function to add shadow to the nav when scroll
function callback() {
  const bioRec = bioImg.getBoundingClientRect();

  bioRec.bottom <= 100
    ? nav.classList.add("scroll")
    : nav.classList.remove("scroll");

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



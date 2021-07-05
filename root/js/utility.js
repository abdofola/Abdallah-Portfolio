function hasClass(element, classN) {
  return element.className.indexOf(classN) > -1 ? true : false;
}

function addClass(element, ...classList) {
  element.classList.add(...classList);
}

function removeClass(element, ...classList) {
  element.classList.remove(...classList);
}

function toggleClass(element, ...classList) {
  element.classList.toggle(...classList);
}

function displayBlock(element, string = "block") {
  element.style.display = string;
}

function displayNone(element, string = "none") {
  element.style.display = string;
}

function display(element, string) {
  element.style.display = string;
}

function transform(element, string) {
  element.style.transform = string;
}

// Attach event listener (load) to the element to play pre-loader for a certian period of time.
function preLoader(elemToAttach, showPage) {
  elemToAttach.addEventListener("load", function () {
    setTimeout(showPage, 2500);
  });
}

export {
  hasClass,
  addClass,
  removeClass,
  toggleClass,
  displayBlock,
  displayNone,
  display,
  transform,
  preLoader,
};

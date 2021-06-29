function hasClass(element, classN) {
  return element.className.indexOf(classN) > -1 ? true : false;
}

function addClass(element, ...classList) {
  element.classList.add(...classList);
}

function removeClass(element, ...classList) {
  element.classList.remove(...classList);
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

export { hasClass, addClass, removeClass, displayBlock, displayNone, display, transform };
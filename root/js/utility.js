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

// Async/await function to display page conent after fixed time.
async function preLoader(showPage) {
  try {
    let promise = new Promise((resovle, reject) => {
      window.addEventListener("load", function () {
        setTimeout(() => resovle(showPage()), 2000);
      });
    });
    return await promise;
  } catch (err) {
    return err;
  }
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

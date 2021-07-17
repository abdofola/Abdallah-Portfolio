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
    console.log(err);
  }
}
// custom function to round down
function round(value) {
  const rounded = Math.floor(value * 10) / 10;
  const fixed = rounded.toFixed(1);
  return parseFloat(fixed);
  // const multiplier = Math.pow(10, precision || 0);
  // return Math.round(value * multiplier) / multiplier;
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
  round,
};

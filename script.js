"use strict";

function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function() {
    let context = this,
      args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll(".slide-in");

function checkSlide(e) {
  sliderImages.forEach(slideImage => {
    const slideInAt =
      window.scrollY + window.innerHeight - slideImage.height / 2;
    console.log(slideInAt);
  });
}

window.addEventListener("scroll", debounce(checkSlide));

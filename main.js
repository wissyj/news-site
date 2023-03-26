class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 200;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init On DOM Load
document.addEventListener("DOMContentLoaded", init);

// Init App
function init() {
  const txtElement = document.querySelector(".header-text");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}

//javascript for navigation bar effect on scroll
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("nav-sticky", window.scrollY > 10);
});

//javascript for responsive navigation sidebar menu
let menu = document.querySelector("#main-nav.nav-container");
let menuBtn = document.querySelector("button.open-nav-menu");
// const closeBtn = document.querySelector(".close-nav-menu");

closeBtn.onclick = function () {
  menu.classList.add("open-menu");
  menu.classList.toggle("open-menu");

  if (menu.classList.contains("open-menu")) {
    menuBtn.src = "./img/images (1).png";
  }
};

// preloader function
// jQuery(window).load(function () {
// makes sure the whole site is loaded
// $("#status").fadeOut(); // will first fade out the loading animation
// $("#preloader").delay(100).fadeOut("slow"); // will fade out the white DIV that covers the website.
//   $("body").delay(100).css({
//     overflow: "visible",
//   });
// });

function myPreloader() {
  document.querySelector(".preloader").classList.add("fade-out");
}
function fadeOut() {
  setInterval(myPreloader, 300);
}
window.onload = fadeOut;
// window.addEventListener("load", fadeOutEffect);
// console.log(fadeOutEffect);
// console.log(myPreloader);

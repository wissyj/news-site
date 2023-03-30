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

// preloader

window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  setTimeout(function () {
    preloader.style.display = "none";
  }, 1500);
});

// navbar menu toggle

const toggle = document.getElementById("open-nav");
const closeBtn = document.getElementById("close-nav");
const navmenu = document.querySelector("#main-nav .nav-container");

// Toggle nav
toggle.addEventListener("click", () => {
  // shows nav
  navmenu.style.display = "block";
  // shows close button
  closeBtn.style.display = "inline-block";
  // hides menu button
  toggle.style.display = "none";
});
closeBtn.addEventListener("click", () => {
  // hides nav
  navmenu.style.display = "none";
  // hides close button
  closeBtn.style.display = "none";
  // shows menu button
  toggle.style.display = "inline-block";
});

// // Show modal
// open.addEventListener("click", () => modal.classList.add("show-modal"));

// // Hide modal
// close.addEventListener("click", () => modal.classList.remove("show-modal"));

// // Hide modal on outside click
// window.addEventListener("click", (e) =>
//   e.target == modal ? modal.classList.remove("show-modal") : false
// );

// animate on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const hidden = document.querySelectorAll(".hidden");
hidden.forEach((el) => observer.observe(el));

// JavaScript code to fade in boxes from the left as they become visible in the viewport
const boxes = document.querySelectorAll(".boxes");

const options = {
  rootMargin: "0px",
  threshold: 0.5,
};
const boxObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("boxIn");
    } else {
      entry.target.classList.remove("boxIn");
    }
  });
}, options);
const hide = document.querySelectorAll(".boxOut");
hide.forEach((el) => observer.observe(el));
function showdate() {
  // Get the current date and time
  let now = new Date();

  // Get the user's timezone offset from UTC in minutes
  let timezoneOffset = now.getTimezoneOffset();

  // Convert the timezone offset to hours and adjust the date and time accordingly
  now.setHours(now.getHours() + timezoneOffset);

  // Format the date and time as a string
  let dateAndTime = now.toLocaleString();

  // Get a reference to the HTML element where you want to display the date and time
  let dateTimeElement = document.getElementById("datetime");

  // Set the text content of the HTML element to the formatted date and time string
  dateTimeElement.textContent = ` ${dateAndTime}`;
  // chat gpt made a mistake here, it should have added the last line above as a template string
}

setInterval(showdate, 1);

// slider animation
// const counter= 1;
// setInterval(function){
//   document.getElementById()
// }

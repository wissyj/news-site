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
window.addEventListener("scroll", function () {
  if (window.scrollY > 15) {
    document.querySelector("#main-nav").style.opacity = "0.9";
  } else {
    document.querySelector("#main-nav").style.opacity = "1";
  }
});

// preloader

window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  setTimeout(function () {
    preloader.style.display = "none";
  }, 1500);
});

// navbar menu and list menu toggle

const toggle = document.getElementById("open-nav");
const closeBtn = document.getElementById("close-nav");
const navmenu = document.querySelector("#main-nav .nav-container");
const listmenu = document.getElementById("listMenu");
const hidemenu = document.getElementById("hideMenu");
const topicsMenu = document.querySelector("ul .topic-box-dropdown");

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
listmenu.addEventListener("click", () => {
  // shows topics-box-dropdown
  topicsMenu.style.display = "block";
  // shows hide menu icon
  hidemenu.style.display = "block";
  // hides show list menu icon
  listmenu.style.display = "none";
});
hidemenu.addEventListener("click", () => {
  // hides topics-box-dropdown
  topicsMenu.style.display = "none";
  // show list-menu icon
  listmenu.style.display = "block";
  // hides hide-menu icon
  hidemenu.style.display = "none";
});
// this represents the search box that will pop on the screen with opacity so that it fades in and out- it's from brad's project
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
      entry.target.classList.add("show2");
    } else {
      entry.target.classList.remove("show");
      entry.target.classList.remove("show2");
    }
  });
}, {});
const hidden = document.querySelectorAll(".hidden");
const hidden2 = document.querySelectorAll(".hidden2");
const video = document.getElementById("stream-video");
hidden.forEach((el) => observer.observe(el));
hidden2.forEach((el) => observer.observe(el));
// video.forEach((el) => observer.observe(el));

//  date and time

function showdate() {
  var date = Date();
  var dateTimeElement = document.getElementById("datetime");
  dateTimeElement.textContent = `${date}`;
}
// Initiate On DOM Load
document.addEventListener("DOMContentLoaded", showdate);
setInterval(showdate, 1);

// slider
const slider = document.getElementById("slides");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const firstslide = document.querySelector(".first");
const secondslide = document.querySelector(".second");
const thirdslide = document.querySelector(".third");

const img = document.querySelectorAll(".slide img");

let idx = 0;

let interval = setInterval(run, 4000);

function run() {
  idx++;
  changeImage();
}

function changeImage() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }
  firstslide.style.marginLeft = "-20%";
  setTimeout(() => {
    secondslide.style.marginLeft = "-20%";
  }, 2000);
}

rightBtn.addEventListener("click", () => {
  firstslide.style.marginLeft = " -20%";
});

leftBtn.addEventListener("click", () => {
  secondslide.style.marginLeft = " -20%";
});

// Smooth Scrolling
$(".nav-container a, #topic-container a").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});

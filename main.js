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
//  date and time

function showdate() {
  var date = Date();
  var dateTimeElement = document.querySelector("#datetime");
  dateTimeElement.textContent = `${date}`;
}
// Initiate On DOM Load
document.addEventListener("DOMContentLoaded", showdate);
setInterval(showdate, 1);
// animate on scroll

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      entry.target.classList.add("show2");
      observer.unobserve(entry.target);
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

// navbar menu, search-box, subscribe-box and list menu toggle

const toggle = document.getElementById("open-nav");
const closeBtn = document.getElementById("close-nav");
const navmenu = document.querySelector("#main-nav .nav-container");
const listmenu = document.getElementById("listMenu");
const hidemenu = document.getElementById("hideMenu");
const topicsMenu = document.querySelector("ul .topic-box-dropdown");
const subscribeBtn = document.querySelector(".subscribe-main-btn");
const subscribeContainer = document.querySelector(".subscribe-container");
const closeSubscribeMenu = document.getElementById("close-subscribe-menu");
const closeSearchBox = document.getElementById("close-search-menu");
const searchBtn = document.querySelector("#search-icon");
const searchBox = document.querySelector(".search-box");
function search(e) {
  if ((searchBox.style.display = "none")) {
    searchBox.style.display = "flex";
  } else {
    searchBox.style.display = "flex";
  }
}
searchBtn.addEventListener("click", search);
// closes search box
closeSearchBox.addEventListener("click", () => {
  // closes search-boxr
  searchBox.style.display = "none";
});

// Toggle nav
toggle.addEventListener("click", () => {
  // shows nav
  navmenu.style.display = "block";
  // shows close button
  closeBtn.style.display = "block";
  // hides menu button
  toggle.style.display = "none";
});
// Toggle subscribe-box
subscribeBtn.addEventListener("click", () => {
  // shows nav
  subscribeContainer.style.display = "flex";
  subscribeContainer.style.opacity = 1;
});
// closes nav menu
closeBtn.addEventListener("click", () => {
  // hides nav
  navmenu.style.display = "none";
  // hides close button
  closeBtn.style.display = "none";
  // shows menu button
  toggle.style.display = "";
});
// closes subscribe menu
closeSubscribeMenu.addEventListener("click", () => {
  // closes subscribe-container
  subscribeContainer.style.display = "none";
});

// topic-box open and close functionality
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

function handleChange(el) {
  if (window.scrollY > 15) {
    document.querySelector("#main-nav").style.display = "none";
    document.querySelector("#topic-container").style.top = ".5rem";
  } else {
    document.querySelector("#main-nav").style.display = "";
    document.querySelector("#topic-container").style.top = "3.5rem";
  }
}

// slider

const img = document.querySelectorAll(".slide img");

var slides = document.querySelectorAll(".slide");
var btns = document.querySelectorAll(".btn");
let currentSlide = 1;

// Javascript for image slider manual navigation
var manualNav = function (manual) {
  slides.forEach((slide) => {
    slide.classList.remove("active");

    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
  });

  slides[manual].classList.add("active");
  btns[manual].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});
// Javascript for image slider autoplay navigation
var repeat = function (activeClass) {
  let active = document.getElementsByClassName("active");
  let i = 1;

  var repeater = () => {
    setTimeout(function () {
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove("active");
      });

      slides[i].classList.add("active");
      btns[i].classList.add("active");
      i++;

      if (slides.length == i) {
        i = 0;
      }
      if (i >= slides.length) {
        return;
      }
      repeater();
    }, 4000);
  };
  repeater();
};
repeat();

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
$("a[href='#top']").click(function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

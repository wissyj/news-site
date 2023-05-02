// preloader
window.addEventListener("load", function () {
  const e = document.getElementById("preloader");
  setTimeout(function () {
    e.style.display = "none";
  }, 1500);
});
if (window.location.pathname !== "/contact.html") {
  function showdate() {
    // code to execute if index.html is being displayed
    var now = new Date();
    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var dayOfWeek = days[now.getDay()];
    var dayOfMonth = now.getDate();
    var month = months[now.getMonth()];
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var timeText = `${hours}:${minutes}:${seconds}`;
    var dateText = `${dayOfWeek}, ${dayOfMonth} ${month} ${timeText}`;
    document.querySelector("#datetime").textContent = dateText;
  }
  document.addEventListener("DOMContentLoaded", showdate),
    setInterval(showdate, 1);
} else {
  console.log("no text content");
}
if (window.location.pathname === "/index.html") {
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
} else {
  console.log("no available text content");
}

// change in background of  navbar on scroll
document.addEventListener(
  "DOMContentLoaded",
  window.addEventListener("scroll", function () {
    window.scrollY > 15
      ? (document.querySelector("#main-nav").style.opacity = "0.9")
      : (document.querySelector("#main-nav").style.opacity = "1");
  })
);
// slides
const img = document.querySelectorAll(".slide img");
var slides = document.querySelectorAll(".slide"),
  btns = document.querySelectorAll(".btn");
let currentSlide = 1;
var manualNav = function (e) {
  slides.forEach((e) => {
    e.classList.remove("active"),
      btns.forEach((e) => {
        e.classList.remove("active");
      });
  }),
    slides[e].classList.add("active"),
    btns[e].classList.add("active");
};
btns.forEach((e, t) => {
  e.addEventListener("click", () => {
    manualNav(t), (currentSlide = t);
  });
});
var repeat = function (e) {
  let t = document.getElementsByClassName("active"),
    n = 1;
  var s = () => {
    setTimeout(function () {
      [...t].forEach((e) => {
        e.classList.remove("active");
      }),
        slides[n].classList.add("active"),
        btns[n].classList.add("active"),
        n++,
        slides.length == n && (n = 0),
        n >= slides.length || s();
    }, 75e2);
  };
  s();
};
repeat();

const observer = new IntersectionObserver((e) => {
    e.forEach((e) => {
      console.log(e),
        e.isIntersecting
          ? (e.target.classList.add("show"),
            e.target.classList.add("show2"),
            observer.unobserve(e.target))
          : (e.target.classList.remove("show"),
            e.target.classList.remove("show2"));
    });
  }, {}),
  hidden = document.querySelectorAll(".hidden"),
  hidden2 = document.querySelectorAll(".hidden2"),
  video = document.getElementById("stream-video");
hidden.forEach((e) => observer.observe(e)),
  hidden2.forEach((e) => observer.observe(e));
const toggle = document.getElementById("open-nav"),
  closeBtn = document.getElementById("close-nav"),
  navmenu = document.querySelector("#main-nav .nav-container"),
  listmenu = document.getElementById("listMenu"),
  hidemenu = document.getElementById("hideMenu"),
  topicsMenu = document.querySelector("ul .topic-box-dropdown"),
  closeSearchBox = document.querySelector(".close-search-menu"),
  searchBtn = document.querySelector("#search-icon"),
  searchBox = document.querySelector(".search-box");
function search(e) {
  (searchBox.style.display = "none"), (searchBox.style.display = "flex");
}
function handleChange(e) {
  window.scrollY > 15
    ? ((document.querySelector("#main-nav").style.display = "none"),
      (document.querySelector("#topic-container").style.top = ".5rem"))
    : ((document.querySelector("#main-nav").style.display = ""),
      (document.querySelector("#topic-container").style.top = "3.5rem"));
}
const close = document.getElementById("close"),
  open = document.getElementById("open"),
  modal = document.getElementById("modal");
open.addEventListener("click", () => modal.classList.add("show-modal")),
  document.body.addEventListener(
    "click",
    (e) => e.target == modal && modal.classList.remove("show-modal")
  ),
  close.addEventListener("click", () => modal.classList.remove("show-modal"));

searchBtn.addEventListener("click", search),
  closeSearchBox.addEventListener("click", () => {
    searchBox.style.display = "none";
  }),
  toggle.addEventListener("click", () => {
    (navmenu.style.display = "block"),
      (closeBtn.style.display = "block"),
      (toggle.style.display = "none");
  }),
  closeBtn.addEventListener("click", () => {
    (navmenu.style.display = "none"),
      (closeBtn.style.display = "none"),
      (toggle.style.display = "");
  }),
  listmenu.addEventListener("click", () => {
    (topicsMenu.style.display = "block"),
      (hidemenu.style.display = "block"),
      (listmenu.style.display = "none");
  }),
  hidemenu.addEventListener("click", () => {
    (topicsMenu.style.display = "none"),
      (listmenu.style.display = "block"),
      (hidemenu.style.display = "none");
  });

$(".nav-container a, #topic-container a").on("click", function (e) {
  if ("" !== this.hash) {
    e.preventDefault();
    const t = this.hash;
    $("html, body").animate({ scrollTop: $(t).offset().top - 100 }, 800);
  }
});
// top
$("a[href='#top']").click(function () {
  return $("html, body").animate({ scrollTop: 0 }, "slow"), !1;
});

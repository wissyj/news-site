function showdate() {
  var e = Date();
  document.querySelector("#datetime").textContent = `${e}`;
}
document.addEventListener("DOMContentLoaded", showdate),
  setInterval(showdate, 1);
// preloader
window.addEventListener("load", function () {
  const e = document.getElementById("preloader");
  setTimeout(function () {
    e.style.display = "none";
  }, 1500);
});
document.addEventListener(
  "DOMContentLoaded",
  window.addEventListener("scroll", function () {
    window.scrollY > 15
      ? (document.querySelector("#main-nav").style.opacity = "0.9")
      : (document.querySelector("#main-nav").style.opacity = "1");
  })
);

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
    }, 4e3);
  };
  s();
};
repeat();

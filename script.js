const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-items");

hamburger.addEventListener("click", function () {
  navMenu.classList.toggle("dis");
  hamburger.classList.toggle("active");
});

const skip = document.querySelector(".skip");
const getintouch = document.querySelector(".getintouch");
const disable = document.querySelector(".disableget");

skip.addEventListener("click", function () {
  getintouch.classList.toggle("disable");
  disable.classList.add("getin");
  disable.classList.remove("disableget");
});

const touch = document.getElementById("touch");

touch.addEventListener("click", function () {
  getintouch.classList.toggle("disable");
  touch.classList.remove("getin");
  touch.classList.add("disableget");
});

const navbar = document.querySelector("nav");

window.addEventListener("scroll", function () {
  let y = window.scrollY;
  if (y >= 40) {
    navbar.classList.add("scroll");
    navbar.classList.remove("nav");
  } else {
    navbar.classList.add("nav");
    navbar.classList.remove("scroll");
  }
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", function () {
  sections.forEach((sec) => {
    let y = window.scrollY;
    let offset = window.offsetTop;
    let height = window.offsetHeight;
    let id = sec.getAttribute("id");

    if (y >= offset && y < offset + height) {
      document.querySelector("nav a [href* =" + id + "]");
    }
  });
});

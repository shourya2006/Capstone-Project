const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-items");

hamburger.addEventListener("click", function () {
  navMenu.classList.toggle("dis");
  hamburger.classList.toggle("active");
});

const skip = document.querySelector(".skip");
const getintouch = document.querySelector(".getintouch");

skip.addEventListener("click", function () {
  getintouch.classList.toggle("disable");
});



const navbar = document.querySelector("nav");


window.addEventListener("scroll", function(){
  let y = window.scrollY;
  if (y >= 40) {
    navbar.classList.add("scroll")
    navbar.classList.remove("nav")
  } else {
    navbar.classList.add("nav")
    navbar.classList.remove("scroll")
  }
})
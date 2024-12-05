const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-items");

hamburger.addEventListener("click", function (e) {
  navMenu.classList.toggle("dis");
  hamburger.classList.toggle("active");
});

const skip = document.querySelector(".skip");
const getintouch = document.querySelector(".getintouch");

skip.addEventListener("click", function (e) {
  getintouch.classList.toggle("disable");
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-items");
hamburger.addEventListener("click", function (e) {
  navMenu.classList.toggle("dis");
  hamburger.classList.toggle("active");
  //   hamburger.innerHTML = <i class="fa-solid fa-xmark"></i>
});

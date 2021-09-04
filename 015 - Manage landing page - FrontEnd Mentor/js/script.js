const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");

header.addEventListener("click", function () {
  header.classList.toggle("open");
});

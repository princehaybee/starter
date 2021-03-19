const navToggle = document.querySelector(".toggle-button");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {

  links.classList.toggle("show-links");
});
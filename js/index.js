const burger = document.querySelector("button");
const menu = document.querySelector("#menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("show");
});
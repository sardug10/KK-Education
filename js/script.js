// COLLAPSIBLE MENU BAR
const menuButton = document.querySelector(".fa-bars");
const menu = document.querySelector(".navbar__list");
menuButton.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
});

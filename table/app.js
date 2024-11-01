const burgerBtn = document.querySelector(".burger_menu");
const closeBtn = document.querySelector(".close");
const mobileNav = document.querySelector(".mobile");

burgerBtn.addEventListener("click", () => {
  mobileNav.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  mobileNav.classList.remove("open");
});

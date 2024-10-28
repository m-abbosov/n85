const toggleBtn = document.getElementById("toggle-theme");
const themeIcon = document.getElementById("theme-icon");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeIcon.src = "../assets/images/sun-solid.svg";
  } else {
    themeIcon.src = "../assets/images/moon-solid.svg";
  }
});

window.addEventListener("DOMContentLoaded", () => {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.body.classList.add("dark");

    themeIcon.src = "../assets/images/sun-solid.svg";
  } else {
    document.body.classList.remove("dark");

    themeIcon.src = "../assets/images/moon-solid.svg";
  }
});

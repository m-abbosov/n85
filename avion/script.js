const backToTopButton = document.getElementById("backToTop");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}

console.log("Hello");
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

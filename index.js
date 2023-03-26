const mediaQuery = window.matchMedia('(min-width: 992px')

const mediaQuery = window.matchMedia('(min-width: 1200px')

window.onscroll = function () {
  scrollRotate();
};

function scrollRotate() {
  let image = document.getElementById("circle");
  image.style.transform = "rotate("+ window.pageYOffset + "deg)";
}
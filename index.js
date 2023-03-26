window.onscroll = function () {
  scrollRotate();
};

function scrollRotate() {
  let image = document.getElementById("circle");
  image.style.transform = "rotate("+ window.pageYOffset/3 + "deg)";
}
document.addEventListener("DOMContentLoaded", () => {
  StopCircle();
});
function StopCircle() {
  const circle = document.getElementById("circle");
  const rectangle = document.getElementById("rectangle");
  const line = document.getElementById("line");
  const triangle = document.getElementById("triangle");
  let isPaused = false;
  circle.addEventListener("click", () => {
    isPaused = !isPaused;

    if (isPaused) {
      circle.style.animationPlayState = "paused";
    } else {
      circle.style.animationPlayState = "running";
    }
  });
  rectangle.addEventListener("click", () => {
    isPaused = !isPaused;

    if (isPaused) {
      rectangle.style.animationPlayState = "paused";
    } else {
      rectangle.style.animationPlayState = "running";
    }
  });
  triangle.addEventListener("click", () => {
    isPaused = !isPaused;

    if (isPaused) {
      triangle.style.animationPlayState = "paused";
    } else {
      triangle.style.animationPlayState = "running";
    }
  });
  line.addEventListener("click", () => {
    isPaused = !isPaused;

    if (isPaused) {
      line.style.animationPlayState = "paused";
    } else {
      line.style.animationPlayState = "running";
    }
  });
}

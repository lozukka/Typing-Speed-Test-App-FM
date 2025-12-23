const media = window.matchMedia("(width > 700px)");
const logoTablet = document.getElementById("logo-tablet-desktop");
const logoMobile = document.getElementById("logo-mobile");
const startButton = document.getElementById("start-button");
var timeLeft = 60;
var timerIdElement = document.getElementById("statistics-time");
let timerInterval;

function updateLogo(e) {
  const isTablet = e.matches;
  if (isTablet) {
    logoTablet.classList.replace("hidden", "show");
    logoMobile.classList.replace("show", "hidden");
    console.log("is Tablet or desktop");
  } else {
    logoTablet.classList.replace("show", "hidden");
    logoMobile.classList.replace("hidden", "show");
    console.log("is mobile");
  }
}

function startTest() {
  startButton.classList.add("hidden");
  clearInterval(timerInterval);
  timerInterval = setInterval(countdown, 1000);
}
function stopTest() {
  clearInterval(timerInterval);
}

function countdown() {
  if (timeLeft == -1) {
    clearTimeout(timerInterval);
  } else {
    timerIdElement.innerHTML = "0:" + timeLeft;
    timeLeft--;
  }
}
updateLogo(media);

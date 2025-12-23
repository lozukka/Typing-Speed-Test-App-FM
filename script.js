const media = window.matchMedia("(width > 700px)");
const logoTablet = document.getElementById("logo-tablet-desktop");
const logoMobile = document.getElementById("logo-mobile");
const startButton = document.getElementById("start-button");
const userInput = document.getElementById("userInput");
var timeLeft = 60;
var timerIdElement = document.getElementById("statistics-time");
var wpmElement = document.getElementById("statistics-wpm");
let timerInterval;

//media query for the logo
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
updateLogo(media);
//start and restart buttons
function startTest() {
  startButton.classList.add("hidden");
  clearInterval(timerInterval);
  timerInterval = setInterval(countdown, 1000);
}
function stopTest() {
  clearInterval(timerInterval);
  userInput.value = "";
}
//timer
function countdown() {
  if (timeLeft == -1) {
    clearTimeout(timerInterval);
  } else {
    timerIdElement.innerHTML = "0:" + timeLeft;
    timeLeft--;
  }
}
//wordcount
userInput.addEventListener("input", (e) => {
  const text = e.target.value.trim();
  renderText(handleWord(text));
});

function handleWord(text) {
  const textArr = text.split(" ");
  let wordCount = 0;
  for (word of textArr) {
    if (/[a-zA-Z0-9]/.test(word)) {
      wordCount++;
    }
  }
  return wordCount;
}
function renderText(wordCount) {
  wpmElement.innerHTML = wordCount;
}

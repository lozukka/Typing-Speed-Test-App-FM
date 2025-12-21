console.log("hello");
const media = window.matchMedia("(width > 700px)");
const logoTablet = document.getElementById("logo-tablet-desktop");
const logoMobile = document.getElementById("logo-mobile");

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

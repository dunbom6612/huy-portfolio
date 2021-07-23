const wraper = document.querySelector(".cv");

// light
const threeLinesPathLight = "./3-lines.svg";
const linesPathLight = "./lines.svg";
const dotPaneLight = "./dots-pane.svg";
const triangleLight = "./triangle.svg";
const dotsCircleLight = "./dots-circle.svg";
// dark
const threeLinesPathDark = "./3-lines-dark.svg";
const linesPathDark = "./lines-dark.svg";
const dotPaneDark = "./dots-pane-dark.svg";
const triangleDark = "./triangle-dark.svg";
const dotsCircleDark = "./dots-circle-dark.svg";
// icon sun moon
const iconSun = "./icon/sun.svg";
const iconMoon = "./icon/moon.svg";



const setDarkMode = (dark = true) => {
  if (dark) {
    //set to dark
    document
      .querySelector(".effect-3-lines")
      .setAttribute("src", threeLinesPathDark);
    document.querySelector(".effect-lines").setAttribute("src", linesPathDark);
    document
      .querySelector(".effect-dots-pane")
      .setAttribute("src", dotPaneDark);
    document
      .querySelector(".effect-triangle")
      .setAttribute("src", triangleDark);
    document
      .querySelector(".effect-dots-circle")
      .setAttribute("src", dotsCircleDark);
    document
      .querySelector(".effect-dots-pane-2")
      .setAttribute("src", dotPaneDark);
    document.querySelector("#dark-light-btn img").setAttribute("src", iconMoon);
    document.querySelector("#dark-light-btn span").textContent = "Dark";
    document.querySelector(".cv").classList.add("dark-mode");
  } else {
    // set to light
    document
      .querySelector(".effect-3-lines")
      .setAttribute("src", threeLinesPathLight);
    document.querySelector(".effect-lines").setAttribute("src", linesPathLight);
    document
      .querySelector(".effect-dots-pane")
      .setAttribute("src", dotPaneLight);
    document
      .querySelector(".effect-triangle")
      .setAttribute("src", triangleLight);
    document
      .querySelector(".effect-dots-circle")
      .setAttribute("src", dotsCircleLight);
    document
      .querySelector(".effect-dots-pane-2")
      .setAttribute("src", dotPaneLight);
    document.querySelector("#dark-light-btn img").setAttribute("src", iconSun);
    document.querySelector("#dark-light-btn span").textContent = "Light";
    document.querySelector(".cv").classList.remove("dark-mode");
  }
};

// get from local storage and set mode
const isDarkMode = localStorage.getItem("darkMode") === "true";
if(isDarkMode){
  setDarkMode(true);
}else{
  setDarkMode(false);
}

document.querySelector(".cv-mode").addEventListener("click", (e) => {
  // wraper.classList.add("dark");
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  console.log(isDarkMode);
  if (isDarkMode) {
    // set to light
    setDarkMode(false);
  } else {
    //set to dark
    setDarkMode(true);
  }

  if (isDarkMode) {
    localStorage.setItem("darkMode", JSON.stringify(null));
  } else {
    localStorage.setItem("darkMode", true);
  }
});

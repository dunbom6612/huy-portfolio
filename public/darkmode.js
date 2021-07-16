const wraper = document.querySelector(".cv");

// light
const linesPathLight = './lines.svg';
const dotPaneLight = './dots-pane.svg'
const triangleLight = './triangle.svg';
const dotsCircleLight = './dots-circle.svg';
// dark
const linesPathDark = './lines-dark.svg';
const dotPaneDark = './dots-pane-dark.svg'
const triangleDark = './triangle-dark.svg';
const dotsCircleDark = './dots-circle-dark.svg';
// icon sun moon
const iconSun = './icon/sun.svg';
const iconMoon = './icon/moon.svg';


document.querySelector(".cv-mode").addEventListener("click",(e) => {
  // wraper.classList.add("dark");
  const isDarkMode = localStorage.getItem("darkMode") === 'true'
  console.log(isDarkMode);
  if(isDarkMode){
    document.querySelector(".effect-lines").setAttribute("src", linesPathLight);
    document.querySelector(".effect-dots-pane").setAttribute("src", dotPaneLight);
    document.querySelector(".effect-triangle").setAttribute("src", triangleLight);
    document.querySelector(".effect-dots-circle").setAttribute("src", dotsCircleLight);
    document.querySelector(".effect-dots-pane-2").setAttribute("src", dotsCircleLight);
    document.querySelector("#dark-light-btn img").setAttribute("src",iconSun);
    document.querySelector('.cv').classList.remove('dark-mode');
  }else{
    document.querySelector(".effect-lines").setAttribute("src", linesPathDark);
    document.querySelector(".effect-dots-pane").setAttribute("src", dotPaneDark);
    document.querySelector(".effect-triangle").setAttribute("src", triangleDark);
    document.querySelector(".effect-dots-circle").setAttribute("src", dotsCircleDark);
    document.querySelector(".effect-dots-pane-2").setAttribute("src", dotsCircleDark);
    document.querySelector('.cv').classList.add('dark-mode');
    document.querySelector("#dark-light-btn img").setAttribute("src",iconMoon);
  }

  if(isDarkMode){
    localStorage.setItem("darkMode", JSON.stringify(null));
  }else{
    localStorage.setItem("darkMode", true);
  }

})
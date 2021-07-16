const navList = document.querySelectorAll(".navbar li");

const resetActive = () => {
  navList.forEach((list) => {
    list.classList.remove('active');
  });
  
}

const clickHandler = (e) => {
  e.preventDefault();
  console.log("clicked");
  const linkElement =  e.target;
  const href = e.target.getAttribute("href");
  resetActive();
  linkElement.parentNode.classList.add("active");
  const offsetTop = document.querySelector(href).offsetTop;
  
  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
};



navList.forEach((list) => {
  list.querySelector('a').addEventListener("click", clickHandler);
  
});

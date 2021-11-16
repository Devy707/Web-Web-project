let burgerButton = document.querySelector(".nav__burger");
let burgerButtonFirst = document.querySelector(".first-burger");
let burgerMenu = document.querySelector(".burger__menu");
burgerMenu.style.opacity = "0";
burgerButton.addEventListener("click", function () {
  if (burgerMenu.style.opacity === "0") {
    console.log(1);
    burgerButton.style.position = "fixed";
    burgerMenu.style.opacity = "1";
    burgerMenu.style.zIndex = '100';
    burgerButtonFirst.style.backgroundColor = "green";
  } else {
    burgerMenu.style.opacity = "0";
    burgerMenu.style.zIndex = '-1';
    burgerButtonFirst.style.backgroundColor = "";
    burgerButton.style.position = "relative";
  }
});

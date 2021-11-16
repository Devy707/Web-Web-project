var swiper = new Swiper(".mySwiper", {
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    994: {
      slidesPerView: 2,
    },

    1788: {
      slidesPerView: 4,
    },
  },
  loop: true,
});

let burgerButton = document.querySelector(".nav__burger");
let burgerButtonFirst = document.querySelector(".first-burger");
let burgerMenu = document.querySelector(".burger__menu");
burgerMenu.style.opacity = "0";
burgerButton.addEventListener("click", function () {
  if (burgerMenu.style.opacity === "0") {
    console.log(1)
    burgerButton.style.position = 'fixed';
    burgerMenu.style.width = '100%';

    burgerMenu.style.zIndex = '100';
    burgerMenu.style.opacity = "1";
    burgerButtonFirst.style.backgroundColor = 'green';
  } else {
    burgerMenu.style.opacity = "0";
    burgerMenu.style.zIndex = '-1';
    burgerMenu.style.width = '0%';

    burgerButtonFirst.style.backgroundColor = '';
    burgerButton.style.position = 'relative';


  }
});

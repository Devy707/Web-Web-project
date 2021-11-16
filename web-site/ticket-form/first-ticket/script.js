"use strict";

let cube = document.querySelector(".cube-content");
let pay__ticket = document.querySelector(".pay__ticket");
let takeTicket = document.querySelector(".order__take-ticket");
let orderCostum = document.querySelector(".order__costumize");
let formCount = document.querySelector(".form-content__count");
let formPlace = document.querySelector(".form-content__place");
let formLast = document.querySelector(".form-content__last");
let formContent = document.querySelector(".form-content");
let countTicket = document.querySelector(".count__ticket");
let priceTicket = document.querySelector(".price__ticket");
let buttonTicket = document.querySelector(".ticket__button");

let payTicketContent = document.querySelector(".pay__ticket-content");
cube.style.display = "block";
if (cube.style.display === "block") {
  takeTicket.style.color = "#d1a954";
}
let parentFirstPlace = document.getElementsByTagName("i");
let newFirstArray = [];
for (let index = 0; index < parentFirstPlace.length; index++) {
  if (parentFirstPlace[index].className === "fas fa-stop") {
    newFirstArray.push(parentFirstPlace[index]);
  }
}
newFirstArray.splice(0, 5);

console.log(newFirstArray);
let price = 0;
let count = 0;
let cubeContent = document.querySelector(".cube-content");
let countNum = document.querySelector(".count__num");
let priceNum = document.querySelector(".price__num");
let arrayPlaces = [];
cubeContent.addEventListener("click", function (event) {
  if (
    event.target.className === "fas fa-stop" &&
    event.target.parentNode.className === "first-part"
  ) {
    if (event.target.style.color === "rgb(0, 151, 8)") {
      alert("Це місце вже обрано!Будь-ласка оберіть інше.");
    } else {
      price += 50;
      count += 1;
      arrayPlaces.push({
        place: event.target.attributes[1].value,
        row: event.target.attributes[2].value,
        cost: event.target.attributes[3].value,
      });
      event.target.style.color = "rgb(0, 151, 8)";
    }
  } else if (
    event.target.className === "fas fa-stop" &&
    event.target.parentNode.className === "second-part"
  ) {
    if (event.target.style.color === "rgb(0, 151, 8)") {
      alert("Це місце вже обрано!Будь-ласка оберіть інше.");
    } else {
      price += 100;
      count += 1;
      arrayPlaces.push({
        place: event.target.attributes[1].value,
        row: event.target.attributes[2].value,
        cost: event.target.attributes[3].value,
      });
      event.target.style.color = "rgb(0, 151, 8)";
    }
  } else if (
    event.target.className === "fas fa-stop" &&
    event.target.parentNode.className === "third-part"
  ) {
    if (event.target.style.color === "rgb(0, 151, 8)") {
      alert("Це місце вже обрано!Будь-ласка оберіть інше.");
    } else {
      price += 150;
      count += 1;
      arrayPlaces.push({
        place: event.target.attributes[1].value,
        row: event.target.attributes[2].value,
        cost: event.target.attributes[3].value,
      });
      event.target.style.color = "rgb(0, 151, 8)";
    }
  } else if (
    event.target.className === "fas fa-stop" &&
    event.target.parentNode.className === "fourth-part"
  ) {
    if (event.target.style.color === "rgb(0, 151, 8)") {
      alert("Це місце вже обрано!Будь-ласка оберіть інше.");
    } else {
      price += 200;
      count += 1;
      arrayPlaces.push({
        place: event.target.attributes[1].value,
        row: event.target.attributes[2].value,
        cost: event.target.attributes[3].value,
      });
      event.target.style.color = "rgb(0, 151, 8)";
    }
  } else if (
    event.target.className === "fas fa-stop" &&
    event.target.parentNode.className === "fifth-part"
  ) {
    if (event.target.style.color === "rgb(0, 151, 8)") {
      alert("Це місце вже обрано!Будь-ласка оберіть інше.");
    } else {
      price += 500;
      count += 1;
      arrayPlaces.push({
        place: event.target.attributes[1].value,
        row: event.target.attributes[2].value,
        cost: event.target.attributes[3].value,
      });
      event.target.style.color = "rgb(0, 151, 8)";
    }
  }
  priceNum.innerHTML = `${price}`;
  countNum.textContent = `${count}`;
});
console.log(arrayPlaces);
let formPlaceEx = "";
let button = document.querySelector(".ticket__button");
button.addEventListener("click", function () {
  if (price != 0) {
    countTicket.style.display = "none";
    buttonTicket.style.display = "none";
    priceTicket.style.display = "none";
    payTicketContent.style.justifyContent = "center";
    buttonTicket.textContent = "Замовити";
    formContent.style.display = "block";
    cube.style.display = "none";
    takeTicket.style.color = "white";
    orderCostum.style.color = "#d1a954";
    formCount.innerHTML = `Кількість квитків: <span>[${count}]</span>`;
    for (let index = 0; index < count; index++) {
      formPlaceEx += `<div>Партер, Ряд:${arrayPlaces[index].row}, Місце:${arrayPlaces[index].place}, <span>${arrayPlaces[index].cost} грн</span></div>`;
    }
    formPlace.innerHTML = formPlaceEx;
    console.log(formPlaceEx);
    formLast.innerHTML = `Загальна ціна: <span>${price}</span>`;
  }
});

let inputName = document.querySelector(".form-content__input-name");
let inputSurname = document.querySelector(".form-content__input-surname");
let inputTel = document.querySelector(".form-content__input-tel");
let inputEmail = document.querySelector(".form-content__input-email");

inputName.addEventListener("keypress", (event) => {
  event.target.value =
    event.target.value[0].toUpperCase() + event.target.value.slice(1);
});

inputSurname.addEventListener("keypress", (event) => {
  event.target.value =
    event.target.value[0].toUpperCase() + event.target.value.slice(1);
});

let showMap = document.querySelector(".show-map");
let frame = document.querySelector(".frame");

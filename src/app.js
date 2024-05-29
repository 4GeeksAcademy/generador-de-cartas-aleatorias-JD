/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector(`.card`).classList.add(generarRandomMazo());
  document.querySelector(`.card`).innerHTML = generarNumeroRandom();
};
let generarNumeroRandom = () => {
  let numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  let indexNumeros = Math.floor(Math.random() * numeros.length);
  return numeros[indexNumeros];
};
let generarRandomMazo = () => {
  let mazo = ["spade", "diamond", "heart", "club"];
  let indexMazo = Math.floor(Math.random() * mazo.length);
  return mazo[indexMazo];
};

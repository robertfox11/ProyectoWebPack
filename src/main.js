import { card } from "./assets/js/module-a";
import { color } from "./assets/js/module-b";
import "./assets/scss/main.scss";
const btn = document.querySelector('#btn');
btn.addEventListener('click', card);

color();
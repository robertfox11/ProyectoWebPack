import { card } from "./assets/js/module-a";
import { color } from "./assets/js/module-b";

import "./assets/scss/main.scss";
import "./assets/img/56kb.svg";
import "./assets/img/Edad_12kbpng.png";


const btn = document.querySelector('#btn');
btn.addEventListener('click', card);

color();
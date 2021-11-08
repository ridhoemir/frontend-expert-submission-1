import 'regenerator-runtime'; 
/* for async await transpile */
import '@fortawesome/fontawesome-free/js/all.js';
import '../styles/main.css';
import './view/index.js'
import restaurant from "./component/restaurant-item"
import meal from "./component/menu-item"

document.addEventListener("DOMContentLoaded", ()=>{
  restaurant()
  meal()
});





import './style.css';
import {play, startBattle} from './dom-game'
 

play();
const startEvent = document.getElementById('buttonStart');
startEvent.addEventListener('click',startBattle);


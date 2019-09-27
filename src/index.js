import './style.css';
import Game from './game/game';
import Player from './player/player';
const board = require('./board/board');
const ship = require('./ship/ships');

let humainPosShips = [[[0,0]],[[0,3],[0,4]],[[4,1],[4,2],[4,3]]];
let computerPosShips = [[[0,0]],[[0,3],[1,3]],[[4,1],[5,1],[6,1]]];

function drawGrids(){
	const humainGrid = document.getElementById('board1-container');
	const computerGrid = document.getElementById('board2-container');
	for (let i=0; i<10; i++) {
		for (let j=0; j<10; j++) {
			let div1 = document.createElement("div");
            div1.classList.add("sqr");
            div1.id = `board1${i}${j}`;
            humainGrid.appendChild(div1);

            let div2 = document.createElement("div");
            div2.classList.add("sqr");
            div2.id = `board2${i}${j}`;
            computerGrid.appendChild(div2);
		}
	}
	
}

function listenEvents(){
   const startEvent = document.getElementById('buttonStart');
   startEvent.addEventListener('click',startBattle)
}

function placeGridShips(){
  
  for (let i=0; i<humainPosShips.length; i++){
     let ships = humainPosShips[i];
     ships.map((elm) => {	
      let info = document.getElementById('board1'+elm[0].toString()+elm[1].toString());
      info.style.backgroundColor = "green";
	});
  }	
  

  
  for (let i=0; i<computerPosShips.length; i++){
     let ships = computerPosShips[i];
     ships.map((elm) => {	
      let info = document.getElementById('board2'+elm[0].toString()+elm[1].toString());
      info.style.backgroundColor = "green";
	});
  }  
}

function startBattle(){
    let humainBoard = new board();
    humainPosShips.map((elm) =>{
    let shipx = ship(elm.length);
        humainBoard.placeShip(shipx, elm);
    });
    let humain = new Player('humain', humainBoard);
    console.log(humainBoard);
    let computerBoard = new board();
    computerPosShips.map((elm) =>{
    let shipy = ship(elm.length);
        computerBoard.placeShip(shipy, elm);
    });
    let computer = new Player('Computer', computerBoard);

    let newGame  = new Game(humain, computer);
    newGame.startGame();
}

drawGrids();
placeGridShips();
listenEvents();
import Game from './game/game';
import Player from './player/player';
import Board from './board/board';
import {Ship} from './ship/ships';
 

let humainPosShips =  [
                         [[0,9]],
                         [[9,9]],
                         [[2,2],[2,3]],
                         [[4,1],[5,1],[6,1]],
                         [[8,3],[8,4],[8,5],[8,6]],
                         [[5,4],[5,5],[5,6],[5,7],[5,8]]
                        ];
let computerPosShips = [
                         [[0,0]],
                         [[9,0]],
                         [[0,3],[1,3]],
                         [[4,1],[4,2],[4,3]],
                         [[6,3],[6,4],[6,5],[6,6]],
                         [[0,7],[1,7],[2,7],[3,7],[4,7]]
                        ];


const drawGrids = () => {
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
            div1.style.border = '1px solid #DDD;'
            div2.id = `board2${i}${j}`;
            computerGrid.appendChild(div2);
		}
	}
	
}

const placeGridShips = () => {
  drawGrids();
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

export const startBattle = () => {
    tide();
    const startEvent = document.getElementById('buttonStart');
    startEvent.removeEventListener('click',startBattle);
    let humainBoard = new Board();
    humainPosShips.map((elm) =>{
    let shipx = Ship(elm.length);
        humainBoard.placeShip(shipx, elm);
    });
    let humain = new Player('Humain', humainBoard);
    let computerBoard = new Board();
    computerPosShips.map((elm) =>{
    let shipy = Ship(elm.length);
        computerBoard.placeShip(shipy, elm);
    });
    let computer = new Player('Computer', computerBoard);

    let newGame  = new Game(humain, computer);
    newGame.startGame();
}

const tide = () =>{
	const cells = document.getElementsByClassName('sqr');
    
    if (cells.length > 0){
      let grid1 = document.getElementById('board1-container');
      let grid2 = document.getElementById('board2-container');
      grid1.style.opacity = '1';
      grid2.style.opacity = '1';
       for (let i=0; i<cells.length; i++) {
          cells[i].style.removeProperty('background-color');
        }
        placeGridShips()
	}    
}

export const play = () => {
   drawGrids();
   placeGridShips();
}



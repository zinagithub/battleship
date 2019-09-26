//import Player from '../player/player';
//const board = require('../board/board');

export default function Game(player1, player2){
	this.player1 = player1;
    this.player2 = player2;
    this.turn    = this.player1.name;

    /*function humainShips(){

    }

    function computerShips(){

    }

    function initShipPos(posComputer, posHumain){
      computerShips();
      humainShips();
    }*/

}

/*function startGame(allShipPos){
	let humainBoard = new board();
    let humain = new Player('humain', humainBoard);
    let computerBoard = new board();
    let computer = new Player('Computer', computerBoard);
    let newGame  = new Game(humain, computer);
    initShipPos(humain, computer, allShipPos);
}*/
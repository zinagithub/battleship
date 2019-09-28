//import Player from '../player/player';
//const board = require('../board/board');

export default function Game(player1, player2){
	this.player1 = player1;
    this.player2 = player2;
    this.turn    = this.player1.name;
    this.humainTurn = function(){
          let container = document.querySelector("#board2-container");
          let sqrs = container.querySelectorAll(".sqr")
          for(let i = 0; i<sqrs.length; i++) {
            sqrs[i].addEventListener('click', (e) => {
              let x = e.target.id.replace('board2','').split('')[0];
              let y = e.target.id.replace('board2','').split('')[1];
              console.log(parseInt(x,10), parseInt(y, 10));
              //console.log(this.player2.board.grid);
              if (this.player2.board.receiveAttack(x, y)){
                //console.log('good shot')
                let cell = document.getElementById(e.target.id);
                if (this.player2.board.grid[x][y].ship){
                    
                    cell.style.backgroundColor = "red";
                }
                else{
                   cell.style.backgroundColor = "blue";  
                }
                this.turn    = this.player2.name;
              }
              else {
                console.log('some thing went wrong!')
              }
            });
           }
    }       

    this.computerTurn = function(){
        let container = document.querySelector("#board1-container");
        let cond = true;
        let pos = [];
        while (cond){
            let posit = this.player2.randomPlay();
            if (this.player2.playAIPos.indexOf(pos) === -1){
                console.log('pos',posit);
                let nbCell = posit.join('');
                console.log(nbCell);
                let cell = document.getElementById('board1'+nbCell);
                console.log(cell);
                if (this.player1.board.grid[posit[0]][posit[1]].ship){
                    
                    cell.style.backgroundColor = "red";
                }
                else{
                   cell.style.backgroundColor = "blue";  
                }
                this.turn    = this.player1.name;
                cond = false;
            }
        }
        
        
    }

    this.startGame = function(){
        setInterval(() => {
           if (this.turn === 'Humain'){
             this.humainTurn() 
           }
           else {
             this.computerTurn();
           }         
        
        },1500);
        
    }
}

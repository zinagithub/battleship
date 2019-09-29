var intervalID;
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
              if (this.player2.board.receiveAttack(x, y)){
                let cell = document.getElementById(e.target.id);
                if (this.player2.board.grid[x][y].ship){
                    cell.style.backgroundColor = "red";
                }
                else{
                   cell.style.backgroundColor = "blue";  
                }
                if (this.player2.board.allShipsSunk()){
                    console.log(this.player1.name, ' you won!')
                    displayMsg('Humain You Won !!! ', 1);
                    clearInterval(intervalID);
                }
                this.turn    = this.player2.name;
              }
            });
           }
    }       

    this.computerTurn = function(){
        let posit = this.player2.randomPlay();
        let nbCell = posit.join('');
        let cell = document.getElementById('board1'+nbCell);
        if (this.player1.board.grid[posit[0]][posit[1]].ship){   
            cell.style.backgroundColor = "red";
        }
        else{
            cell.style.backgroundColor = "blue";  
        }
        this.turn    = this.player1.name;
    }

    this.startGame = function(){
        intervalID = setInterval(() => {
           if (this.turn === 'Humain'){
             displayMsg('Humain turn ', 1);
             this.humainTurn() 
           }
           else {
             displayMsg('Computer turn ', 2); 
             this.computerTurn();
           }         
        
        },1500);
        
    }
}


function displayMsg(message, turn){
    const msg = document.getElementById('message');
    msg.innerHTML = message;
    let grid1 = document.querySelector("#board1-container");
    let grid2 = document.querySelector("#board2-container");
    if (turn == 1){
       grid1.style.opacity = '0.5';
       grid2.style.opacity = '1'; 
    }else {
        grid2.style.opacity = '0.5';
        grid1.style.opacity = '1';
    }
    

}
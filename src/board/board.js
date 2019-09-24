const ship = require('../ship/ships');

function Board() {
	this.grid = Array(10).fill().map(()=>Array(10).fill({ship: null, hit: false}));
	this.nbrShip = 0;
	this.placeShip = function(theShip, pos) {
       this.nbrShip += 1;
       theShip.setPositions(pos);
       pos.map( coord => {
         this.grid[coord[0]][coord[1]] = {ship: theShip, hit: false};
       })
	}
	this.receiveAttack = function(x, y) {
		if (!this.grid[x][y].hit){
           this.grid[x][y].hit = true;
           if (this.grid[x][y].ship){
              this.grid[x][y].ship.hit(x, y);
              if (this.grid[x][y].ship.isSunk()){
                this.nbrShip -= 1;
              }         	
           }	  
		}
	}
	this.allShipsSunk = function(){
		if (!this.nbrShip){
			return true;
		}
		return false;
	}
}
module.exports = Board;
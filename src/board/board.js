export default function Board() {
	this.grid = Array.from(Array(10), () => (
      Array.from(Array(10), () => ({ hit: false, ship: null }))));
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
           if (this.grid[x][y].ship != null){
              this.grid[x][y].ship.hit(x, y);
              if (this.grid[x][y].ship.isSunk()){
                this.nbrShip -= 1;
              }         	
           }
           return true;	  
		}
		return false;
	}
	this.allShipsSunk = function(){
		if (!this.nbrShip){
			return true;
		}
		return false;
	}
}

const ship = require('../ship/ships');

function Board() {
	this.grid = Array(10).fill().map(()=>Array(10).fill({ship: null, hit: false}));
	this.nbrShip = 0;
	this.placeShip = function(length, pos) {
       let myShip = ship(length);
       this.nbrShip += 1;
       myShip.setPositions(pos);
       pos.map( coord => {
         this.grid[coord[0]][coord[1]] = {ship: this.nbrShip, hit: false};
       })
	}
}
module.exports = Board;
const board = require('./board');
const ship  = require('../ship/ships');

it('should creates a board object with an empty grid ', () => {
    const gameBoard = new board();
    expect(gameBoard.grid.length).toBe(10);
    expect(gameBoard.grid[0].length).toBe(10);
    expect(gameBoard.grid[0][0]).toEqual({"hit": false, "ship": null});
});
it('should places a ship on the board at the specified position', () => {
   const gameBoard = new board();
   const ship1 = ship(1);
   let pos = [[0,0]];
   gameBoard.placeShip(ship1, pos);
   expect(gameBoard.nbrShip).toBe(1);
   expect(gameBoard.grid[0][0]).toEqual({"hit": false, "ship": ship1});

   const ship2 = ship(2);
   pos = [[4,5],[4,6]];
   gameBoard.placeShip(ship2, pos);
   expect(gameBoard.nbrShip).toBe(2);
   expect(gameBoard.grid[4][5]).toEqual({"hit": false, "ship": ship2});
   expect(gameBoard.grid[4][5]).toEqual({"hit": false, "ship": ship2});
});
it('should changes the status of the grid when opponent attacks a missed shot', () => {
   const gameBoard = new board();
   expect(gameBoard.grid[1][1]).toEqual({"hit": false, "ship": null});
   gameBoard.receiveAttack(1,1)
   expect(gameBoard.grid[1][1]).toEqual({"hit": true, "ship": null});  
   //expect(gameBoard.grid[1][2]).toEqual({"hit": false, "ship": null});
});
it('should changes the status of both the grid and the ship when opponent attacks a ship ', () => {
   const gameBoard = new board();
   const ship1 = ship(1);
   let pos = [[0,0]];
   gameBoard.placeShip(ship1, pos);
   gameBoard.receiveAttack(0,0)
   expect(gameBoard.grid[0][0]).toEqual({"hit": true, "ship": ship1});
   expect(gameBoard.grid[0][0].ship.getPositions()).toEqual([{"hit": 1, "x": 0, "y": 0}])   
});
it('should not change the grid when opponent attacks a already hitten position', () => {
   const gameBoard = new board();
   const ship1 = ship(1);
   let pos = [[0,0]];
   gameBoard.placeShip(ship1, pos);
   gameBoard.receiveAttack(0,0);
   expect(gameBoard.grid[0][0]).toEqual({"hit": true, "ship": ship1});
   gameBoard.receiveAttack(0,0);
   expect(gameBoard.grid[0][0]).toEqual({"hit": true, "ship": ship1});
});
it('should decreases the number of ships on the board when a ship is sunk ', () => {
   const gameBoard = new board();
   const ship1 = ship(1);
   let pos = [[0,0]];
   gameBoard.placeShip(ship1, pos); 
   const ship2 = ship(2);
   pos = [[4,5],[4,6]];
   gameBoard.placeShip(ship2, pos);
   expect(gameBoard.nbrShip).toBe(2); 

   gameBoard.receiveAttack(4,5);
   expect(gameBoard.grid[4][5]).toEqual({"hit": true, "ship": ship2});
   gameBoard.receiveAttack(4,6);
   expect(gameBoard.grid[4][6]).toEqual({"hit": true, "ship": ship2}); 
   expect(gameBoard.nbrShip).toBe(1);  
});
it('should return true if all ships are sunk ', () => {
  const gameBoard = new board();
   const ship1 = ship(1);
   let pos = [[0,0]];
   gameBoard.placeShip(ship1, pos); 
   const ship2 = ship(2);
   pos = [[4,5],[4,6]];
   gameBoard.placeShip(ship2, pos);
   expect(gameBoard.nbrShip).toBe(2); 

   gameBoard.receiveAttack(4,5);
   expect(gameBoard.grid[4][5]).toEqual({"hit": true, "ship": ship2});
   gameBoard.receiveAttack(4,6);
   expect(gameBoard.grid[4][6]).toEqual({"hit": true, "ship": ship2}); 
   expect(gameBoard.nbrShip).toBe(1);
   
   gameBoard.receiveAttack(0,0);
   expect(gameBoard.nbrShip).toBe(0);
   expect(gameBoard.allShipsSunk()).toBeTruthy()  
});
it('should return false if all ships are not sunk ', () => {
  const gameBoard = new board();
   const ship1 = ship(1);
   let pos = [[0,0]];
   gameBoard.placeShip(ship1, pos); 
   const ship2 = ship(2);
   pos = [[4,5],[4,6]];
   gameBoard.placeShip(ship2, pos);
   expect(gameBoard.nbrShip).toBe(2); 

   gameBoard.receiveAttack(4,5);
   expect(gameBoard.grid[4][5]).toEqual({"hit": true, "ship": ship2});
   gameBoard.receiveAttack(4,6);
   expect(gameBoard.grid[4][6]).toEqual({"hit": true, "ship": ship2}); 
   expect(gameBoard.nbrShip).toBe(1);
   
   expect(gameBoard.allShipsSunk()).toBeFalsy()  
});
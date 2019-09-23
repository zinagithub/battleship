const board = require('./board');

it('should create an board object with an empty grid ', () => {
    const gameBoard = new board();
    expect(gameBoard.grid.length).toBe(10);
    expect(gameBoard.grid[0].length).toBe(10);
    expect(gameBoard.grid[0][0]).toEqual({"hit": false, "ship": null});
});
it('should place a ship on the board at the specified position', () => {
   const gameBoard = new board();
   let pos = [[0,0]];
   gameBoard.placeShip(pos.length, pos);
   expect(gameBoard.nbrShip).toBe(1);
   expect(gameBoard.grid[0][0]).toEqual({"hit": false, "ship": 1});

   pos = [[4,5],[4,6]];
   gameBoard.placeShip(pos.length, pos);
   expect(gameBoard.nbrShip).toBe(2);
   expect(gameBoard.grid[4][5]).toEqual({"hit": false, "ship": 2});
   expect(gameBoard.grid[4][5]).toEqual({"hit": false, "ship": 2});
});
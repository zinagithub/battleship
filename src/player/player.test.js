import Player from './player.js';
const board = require('../board/board');

it('should create a new player ', () => {
    let humainBoard = new board();
    let humain = new Player('humain', humainBoard);
    expect(humain.name).toBe('humain');
    expect(humain.board.grid.length).toBe(10);
    expect(humain.board.grid[0][0]).toEqual({"hit": false, "ship": null});
});
it('should fill the playAIPos array with random positions when the player is Computer ', () => {
    let computerBoard = new board();
    let computer = new Player('Computer', computerBoard);
    expect(computer.name).toBe('Computer'); 
    computer.randomPlay();
    expect(computer.playAIPos.length).toBe(1); 
    computer.randomPlay();
    expect(computer.playAIPos.length).toBe(2); 
   
 });

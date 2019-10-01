import Player from './player.js';
import Board from '../board/board';

it('should create a new player ', () => {
    let humainBoard = new Board();
    let humain = new Player('humain', humainBoard);
    expect(humain.name).toBe('humain');
    expect(humain.board.grid.length).toBe(10);
    expect(humain.board.grid[0][0]).toEqual({"hit": false, "ship": null});
});
it('should return an array with random positions when the player is Computer ', () => {
    let computerBoard = new Board();
    let humainBoard = new Board();
    let computer = new Player('Computer', computerBoard);
    expect(computer.name).toBe('Computer'); 
    expect(computer.randomPlay(humainBoard.grid).length).toBe(2); 
   
 });

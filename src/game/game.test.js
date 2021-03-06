import Player from '../player/player';
import Game from './game';
import Board from '../board/board';

it('should create a game with two player ', () => {
	let humainBoard = new Board();
    let humain = new Player('Humain', humainBoard);
    let computerBoard = new Board();
    let computer = new Player('Computer', computerBoard);
    let newGame  = new Game(humain, computer);
    expect(newGame.player1.name).toBe('Humain');
    expect(newGame.player2.name).toBe('Computer');
});

it('should assign the default turn to player1 ', () => {
    let humainBoard = new Board();
    let humain = new Player('Humain', humainBoard);
    let computerBoard = new Board();
    let computer = new Player('Computer', computerBoard);
    let newGame  = new Game(computer, humain);
    expect(newGame.player1.name).toBe('Computer'); 
 });



export default function Player(name, board) {
	this.name = name;
	this.board  = board;		
    
	this.randomPlay = function (grid) {
	let line, col;	
	let cond = true;
      if (this.name === 'Computer'){
        while (cond){
          line = Math.floor(Math.random() * Math.floor(9));
          col  = Math.floor(Math.random() * Math.floor(9));
          if (!grid[line][col].hit){
            cond = false;
            return [line, col];
          }
        }	
      }         
	}

}

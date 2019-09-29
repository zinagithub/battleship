export default function Player(name, board) {
	this.name = name;
	this.board  = board;
	this.playAIPos = [];		
    
	this.randomPlay = function () {
	let line, col;	
	let cond = true;
      if (this.name === 'Computer' && this.playAIPos.length < 100){
        while (cond){
          line = Math.floor(Math.random() * Math.floor(9));
          col  = Math.floor(Math.random() * Math.floor(9));
          if (this.playAIPos.indexOf([line, col]) === -1){
            this.playAIPos.push([line, col]);
            cond = false;
            console.log('AIpos:', this.playAIPos);
            return [line, col];
          }
        }	
      }         
	}

}

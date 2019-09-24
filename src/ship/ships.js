const Ship = (length) => {
  let health = length;
  let positions = [];
  let getPositions = () => positions;
  
  const setPositions = ( posArr ) => {
    positions = posArr.map( ( elm ) => { 
      return {x : elm[0], y : elm[1], hit : 0 };
    });	  	
  }

  const hit = (ligne, col) => {
    let pos = positions.findIndex(pos => pos.x === ligne && pos.y === col);
    if (pos != -1){
      positions[pos].hit = 1;
    }
       
  } 

  const isSunk = () => {
    let nbrHit = 0;
    for (var i = 0; i < positions.length; i++) {
      if (positions[i].hit) {
        nbrHit= nbrHit + 1;   
      } 
    } 	
    if (health === nbrHit) {
      return true;
    }
    return false;
  } 

  return {health, hit, isSunk, getPositions, setPositions,positions}
}
module.exports = Ship;

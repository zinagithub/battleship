export const Ship = (length) => {
  let health = length;
  let positions = [];
  let getPositions = () => positions;
  
  const setPositions = ( posArr ) => {
    posArr.map( ( elm ) => { 
     positions.push({x : elm[0], y : elm[1], hit : 0 });
    });	
    return positions; 	
  }

  const hit = (ligne, col) => {
    let posi = positions.findIndex(elm => elm.x == ligne && elm.y == col);
    if (posi != -1){
      positions[posi].hit = 1;
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


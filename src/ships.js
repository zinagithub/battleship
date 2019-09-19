const Ship = (length) => {
  let health = length;
  let positions = [];

  const setPositions = ( posArr ) => {
    positions = posArr.map( ( elm ) => {
        return {cell : elm, hit : 0 };
    });
    return positions;
  }

  const hit = (cell) => {
    for (var i = 0; i < positions.length; i++) {
      if (positions[i].cell == cell) {
        positions[i].hit = 1;   
      }     
    }
    return positions;
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

  return {health, hit, isSunk, positions, setPositions}
}
module.exports = Ship;

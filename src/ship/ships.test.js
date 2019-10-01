import {Ship} from './ships';

describe('Ship factory', () => {
  it('should create an non positioned ship with the dimension specified', () => {
     let ship1 = Ship(1);
     expect(ship1.health).toBe(1);
     expect(ship1.getPositions()).toEqual([])
  });
  it('should set the ship position', () => {
    const ship1 = Ship(1); 
    ship1.setPositions([[0,0]]);
    expect(ship1.getPositions()).toEqual([{"hit": 0, "x": 0, "y": 0}]); 
    
    const ship2 = Ship(2);
    ship2.setPositions([[4,5],[4,6]]);
    expect(ship2.getPositions()).toEqual([{"x": 4,"y":5, "hit": 0}, {"x": 4,"y":6, "hit": 0}]);
  });
  
  it('should change the status of the specified position to 1', () => {
    const ship2 = Ship(2);
    ship2.setPositions([[4,5],[4,6]]);
    expect(ship2.getPositions()).toEqual([{"x": 4,"y":5, "hit": 0}, {"x": 4,"y":6, "hit": 0}]);
    
    ship2.hit(4,6);
    expect(ship2.getPositions()).toEqual([{"x": 4,"y":5, "hit": 0},{"x": 4,"y":6, "hit": 1}]);
    
    ship2.hit(4,5);
    expect(ship2.getPositions()).toEqual([{"x": 4,"y":5, "hit": 1},{"x": 4,"y":6, "hit": 1}]);
  });
  it('should return true if the ship is sunk ', () => {
    const ship2 = Ship(2);
    ship2.setPositions([[4,5],[4,6]]);
    ship2.hit(4,6);
    ship2.hit(4,5);
    expect(ship2.isSunk()).toBeTruthy()
  });
  it('should return false if the ship is not sunk ', () => {
    const ship2 = Ship(2);
    ship2.setPositions([4,5]);
    ship2.hit(4);
    expect(ship2.isSunk()).toBeFalsy();
  });
  
});
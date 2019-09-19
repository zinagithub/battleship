const ship = require('./ships');
//import Ship from '../src/ship';

describe('Ship factory', () => {
  it('should create an object ', () => {
    //expect(ship(1)).toEqual( {"health": 1, "hit": [Function hit]});
  });

  it('should create a ship with the dimension specified', () => {
     expect(ship(1).health).toBe(1);
     expect(ship(2).health).toBe(2);
     expect(ship(3).health).toBe(3);
  });
  it('should change the status of the specified position to 1', () => {
     const ship2 = ship(2);
     ship2.setPositions([4,5]);
     expect(ship2.hit(4)).toEqual([{"cell": 4, "hit": 1}, {"cell": 5, "hit": 0}]);
     expect(ship2.hit(5)).toEqual([{"cell": 4, "hit": 1}, {"cell": 5, "hit": 1}]);
  });
  it('should return true if the ship is sunk ', () => {
    const ship2 = ship(2);
    ship2.setPositions([4,5]);
    ship2.hit(4);
    ship2.hit(5);
    expect(ship2.isSunk()).toBeTruthy()
  });
  it('should return false if the ship is not sunk ', () => {
    const ship2 = ship(2);
    ship2.setPositions([4,5]);
    ship2.hit(4);
    expect(ship2.isSunk()).toBeFalsy();
  });
  it('should return ship positions ', () => {
    const ship1 = ship(1);
    expect(ship1.setPositions([0])).toEqual([{"cell": 0, "hit": 0}]);

    const ship2 = ship(2);
    expect(ship2.setPositions([4,5])).toEqual([{"cell": 4, "hit": 0}, {"cell": 5, "hit": 0}])
  });

});
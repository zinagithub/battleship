const ship = require('./ships');
//import Ship from '../src/ship';

describe('Ship factory', () => {
  it('should create an object ', () => {
    //expect(ship(1)).toEqual( {"health": 1, "hit": [Function hit]});
  });

  it('should create a ship with one dimension', () => {
     expect(ship(1).health).toBe(1);
  });
  it('should decrease the health of the ship ', () => {
     const ship2 = ship(2);
     expect(ship2.hit()).toEqual(1);
     expect(ship2.hit()).toEqual(0);
  });
  it('should return true if the ship is sunk ', () => {
    const ship2 = ship(2);
    ship2.hit();
    ship2.hit();
    expect(ship2.isSunk()).toBeTruthy()
  });
  it('should return false if the ship is not sunk ', () => {
    const ship2 = ship(2);
    ship2.hit();
    expect(ship2.isSunk()).toBeFalsy();
  });
  it('should return ship positions ', () => {
    //expect(ship(1)).toEqual( {"health": 1, "hit": [Function hit]});
    const ship1 = ship(1);
    expect(ship1.positions('pos')).toBe('pos');
  });

});
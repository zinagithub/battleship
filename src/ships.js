const Ship = (length) => {
  let health = length;

  const hit = () => {
    health = health - 1;
    return health;
  }

  const isSunk = () => {
    if (health <= 0) {
      return true;
    }
    return false;
  }

  const positions = (pos) => {
    return pos;
  }
  return {health, hit, isSunk, positions}
}
module.exports = Ship;

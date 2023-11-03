function Ship (length, name) {
  let hits = 0;
  const hit = () => {
    if (length > hits) {
      return ++hits;
    } 
    return false;
  }; 

  const isSunk = () => {
    if (hits === length) {
      return true;
    } else {
      return false;
    }
  };

  const countOfHits = () => hits;

  return { name, length, hit , isSunk, countOfHits };
}

module.exports = Ship; 
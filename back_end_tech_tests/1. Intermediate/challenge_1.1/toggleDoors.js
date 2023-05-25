const toggleDoors = (n) => {
  const doorArray = Array(n).fill(0);
  let increase = 1;
  for (let i = 0; i < doorArray.length; i++) {
    for (let j = i; j < doorArray.length; j += increase) {
      if (doorArray[j] === 0) {
        doorArray[j] = 1;
      } else if (doorArray[j] === 1) {
        doorArray[j] = 0;
      }
    }
    increase++;
  }

  const resultArray = [];
  for (let i = 0; i < doorArray.length; i++) {
    if (doorArray[i] === 1) resultArray.push(i + 1);
  }
  return resultArray;
};

module.exports = toggleDoors;

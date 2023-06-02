function updateInventory(arr1, arr2) {
  const answer = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i][1] === arr2[j][1]) {
        answer.push([arr1[i][0] + arr2[j][0], arr1[i][1]]);
      }
    }
    answer.push(arr1[i]);
  }
  console.log(answer);
  return answer;
}

module.exports = updateInventory;

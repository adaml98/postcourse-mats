const isCoPrime = (num1, num2) => {
  if (num1 === num2) return false;
  for (let i = 2; i < num1 || i < num2; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      return false;
    }
  }
  return true;
};

module.exports = isCoPrime;

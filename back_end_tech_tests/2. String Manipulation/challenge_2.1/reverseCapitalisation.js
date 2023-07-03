const reverseCapitalisation = (word) => {
  return word
    .split("")
    .map((letter) => {
      return letter === letter.toLowerCase()
        ? letter.toUpperCase()
        : letter.toLowerCase();
    })
    .join("");
};

module.exports = reverseCapitalisation;

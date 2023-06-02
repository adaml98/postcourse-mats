function diffToFib(num) {
  const fib = [0, 1];
  for (let i = 1; fib[i] <= num; i++) {
    if (num === fib[i]) return 0;
    fib.push(fib[i] + fib[i - 1]);
  }
  return fib[fib.length - 1] - num;
}

module.exports = diffToFib;

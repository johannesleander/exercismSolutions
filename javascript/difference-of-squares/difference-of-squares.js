class Squares {
  constructor(n) {
    this.squareOfSums = squareOfSums(n);
    this.sumOfSquares = sumOfSquares(n);
    this.difference   = this.squareOfSums - this.sumOfSquares;
  }
}

function squareOfSums(n) {
  let acc = 0;
  for (let i = 1; i <= n; i++) {
    acc += i;
  }
  return acc**2;
}

function sumOfSquares(n) {
  let acc = 0;
  for (let i = 1; i <= n; i++) {
    acc += i**2;
  }
  return acc;
}

module.exports = Squares;

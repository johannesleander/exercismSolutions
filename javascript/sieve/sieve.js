class Sieve {
  constructor(input) {
    this.primes = this.calcPrimes(2, input)
  }

  calcPrimes(current, limit) {
    let range = createRange(current, limit);
    let marked = [];
    for (let i = 0; i < range.length; i++) {
      if (marked.indexOf(range[i]) >= 0) continue;

      let current = range[i] * 2;
      while (current <= limit) {
        marked.push(current);
        current += range[i];
      }
    }

    let result = [];
    for (let i = 0; i < range.length; i++) {
      if (!marked.includes(range[i])) result.push(range[i]);
    }
    return result;
  }
}

function createRange(start, end) {
  var range = [];
  for (var i = start; i <= end; i++) {
      range.push(i);
  }
  return range;
}

module.exports = Sieve;

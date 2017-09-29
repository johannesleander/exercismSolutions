class Sieve {
  constructor(input) {
    this.primes = this.calcPrimes(2, input)
  }

  calcPrimes(current, limit) {
    let list = range(current, limit);
    let marked = mark(list);

    let result = list.filter((n) => {
      return !marked.includes(n);
    });

    return result;
  }
}

function mark(list) {
  let marked = [];
  for (let i = 0; i < list.length; i++) {
    if (marked.indexOf(list[i]) >= 0) continue;

    let current = list[i] * 2;
    while (current <= list[list.length-1]) {
      marked.push(current);
      current += list[i];
    }
  }
  return marked
}

function range(start, end) {
  var array = [];
  for (var i = start; i <= end; i++) {
      array.push(i);
  }
  return array;
}

module.exports = Sieve;

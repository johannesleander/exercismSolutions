class PerfectNumbers {
  constructor() {};

  classify(n) {
    if (!n || n <= 0) {
      return 'Classification is only possible for natural numbers.';
    }
    let result = 0;
    for (var f = 0; f < n; f++) {
      if (n % f === 0) {result += f};
    };

    if (result > n) {return 'abundant'}
    else if (result === n) {return 'perfect'}
    else if (result < n) {return 'deficient'};
  };
}

module.exports = PerfectNumbers;

var BigInt = require('./big-integer');

class Grains {
  constructor() {}

  square(n) {
    return BigInt(2).pow(n-1).toString();
  }

  total() {
    return BigInt(2).pow(64).subtract(1).toString();
  }
}

module.exports = Grains;

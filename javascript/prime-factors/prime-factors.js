class PrimeFactors {
  constructor() {
    this.primeArray = [];
  }
}

PrimeFactors.prototype.for = function(natural) {
  let prime = 2;
  while (natural > 1) {
    if(natural % prime === 0) {
      this.primeArray.push(prime);
      this.for(natural/prime);
      break;
    }
    prime++;
  }
  return this.primeArray;
}

module.exports = PrimeFactors;

class Palindromes {
  constructor(args) {
    this.maxFactor = args.maxFactor || 0;
    this.minFactor = args.minFactor || 0;
    this.palindromes = [];
  }

  generate() {
    let result = []

    for (let i = this.minFactor; i <= this.maxFactor; i++) {
      for (let j = this.maxFactor; j >= i; j--) {
        let product = i * j;
        let reversedProduct = parseInt(product.toString().split('').reverse().join(''));
        if (product === reversedProduct) {
          result.push(product);
        }
      }
    }
    this.palindromes = result;
    return this.palindromes;
  }

  smallest() {
    let result = {value: this.largest().value, factors: []};

    this.palindromes.forEach(pal => {
      if (result.value > pal) result.value = pal;
    });

    for (let i = this.minFactor; i <= this.maxFactor; i++) {
      for (let j = this.maxFactor; j >= i; j--) {
        let product = i * j;
        if (product === result.value) {
          result.factors.push([i, j]);
        }
      }
    }

    return result;
  }

  largest() {
    let result = {value: 0, factors: []};

    this.palindromes.forEach(pal => {
      if (result.value < pal) result.value = pal;
    });

    for (let i = this.minFactor; i <= this.maxFactor; i++) {
      for (let j = this.maxFactor; j >= i; j--) {
        let product = i * j;
        if (product === result.value) {
          result.factors.push([i, j]);
        }
      }
    }

    return result;
  }
}

module.exports = Palindromes;

class Octal {
  constructor(input) {
    this.octal = input;
  }

  toDecimal() {
    let decimals = this.octal.split('').map((x,i,array) => {
      return (
        (x === '8')
          ? NaN
          : parseInt(x) * 8 ** (array.length - i - 1)
      );
    });

    let result = decimals.reduce(function(accumulator, current) {
      return accumulator + current;
    });

    return isNaN(result) ? 0 : result;
  }
}

module.exports = Octal;

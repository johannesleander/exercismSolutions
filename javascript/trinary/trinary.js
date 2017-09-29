class Trinary {
  constructor(input) {
    this.trinary = input;
  }

  toDecimal() {
    let decimal = 0;
    for (let i = 0; i < this.trinary.length ; i++) {
      if (parseInt(this.trinary[i])) {
        decimal += parseInt(this.trinary[i]) * 3 ** (this.trinary.length -1 - i);
      }
      console.log(decimal);
    }
    return decimal;
  }
}

module.exports = Trinary;

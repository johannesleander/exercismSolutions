class Luhn {
  constructor(input) {
    this.valid = this.isValid(input);
  }

  isValid(input) {
    let data = input.split(' ').join('');
    if (data.length <= 1) return false;

    let sum = 0;
      for(let i = 0; i < data.length; i++) {
        let add = (data[i] - '0') * (2 - (i + data.length) % 2);
        add -= add > 9 ? 9 : 0;
        sum += add;
      }
    return sum % 10 == 0;
  }
}

module.exports = Luhn;

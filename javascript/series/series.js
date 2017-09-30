class Series {
  constructor(input) {
    this.digits = getDigits(input);
  }

  slices(size) {
    if (size > this.digits.length) throw new Error('Slice size is too big.');

    let array = [];
    for (let i = 0; i + size <= this.digits.length; i++) {
      array.push(this.digits.slice(i, i + size));
    }
    return array;
  }
}

function getDigits(input) {
  return input.split('').map((x) => {
    return parseInt(x);
  });
}

module.exports = Series;

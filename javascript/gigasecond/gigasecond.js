class Gigasecond {
  constructor(input) {
    this.birth = input;
  }
}

Gigasecond.prototype.date = function() {
  let gigasecond = Math.pow(10,9) * 1000;
  return new Date(this.birth.getTime() + gigasecond);
}

module.exports = Gigasecond;

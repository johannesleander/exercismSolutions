class Raindrops {
  constructor() {}

  convert(n) {
    let result = '';
    for (let f = 1; f <= n; f++) {
      if (n % f === 0) {
        if      (f === 3) result += 'Pling'
        else if (f === 5) result += 'Plang'
        else if (f === 7) result += 'Plong';
      }
    }
    return result ? result : n.toString();
  }
}

module.exports = Raindrops;

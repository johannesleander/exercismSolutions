class Queens {
  constructor(positions) {
    this.white = positions ? positions.white : [0,3];
    this.black = positions ? positions.black : [7,3];

    if (this.white === this.back) {
      throw new Error('Queens cannot share the same space');
    }
  }

  toString() {
    let str = '';
    for (let y = 0; y < 8; y++) {
      for (let x = 0; x < 8; x++) {

        let temp = [y,x];

        let isWhite = this.white.every((v,i) => {
          return v === temp[i];
        });

        let isBlack = this.black.every((v,i) => {
          return v === temp[i];
        });

        if      (isWhite) str += 'W '
        else if (isBlack) str += 'B '
        else              str += '_ ';
      }
      str = str.substring(0, str.length - 1);
      str += '\n';
    }
    return str;
  }

  canAttack() {
  let w = this.white;
  let b = this.black;

  return w[0] === b[0]
      || w[1] === b[1]
      || Math.abs(w[0] - b[0]) === Math.abs(w[1] - b[1])
  }
}

module.exports = Queens;

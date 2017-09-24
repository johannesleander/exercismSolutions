//bool

class Isogram {
  constructor(input) {
    this.input = input;
  }

  isIsogram() {
    let filteredString = this.input.split(/\s+|[-]/).join('').toLowerCase();
    for (let i = 0; i < filteredString.length; i++) {
      let occurances = filteredString.split(filteredString[i]).length - 1;
      if (occurances > 1) {
        return false;
      }
    }
    return true;
  }
}

module.exports = Isogram;

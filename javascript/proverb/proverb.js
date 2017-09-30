class Proverb {
  constructor(...words) {
    this.words = words;
  }

  toString() {
    let string = '';
    for (let i = 1; i < this.words.length; i++) {
      if (typeof this.words[i] === 'string') {
        string += 'For want of a ' + this.words[i-1] + ' the ' + this.words[i] + ' was lost.\n'
      }
    }
    if (this.words[this.words.length-1].qualifier) {
      string += 'And all for the want of a ' + this.words[this.words.length-1].qualifier + ' ' + this.words[0]+'.';
    } else {
      string += 'And all for the want of a ' + this.words[0]+'.';
    }
    return string;
  }
}

module.exports = Proverb;

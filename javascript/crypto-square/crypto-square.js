class Crypto {
  constructor(input) {
    this.input = input;
    this.normalizePlaintext();
  }

  normalizePlaintext() {
    this.input = this.input
                 .toLowerCase()
                 .replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    return this.input;
  }

  size() {
    let cols = 1;
    let rows = 1;
    while ((cols * rows) < this.input.length) {
      (cols + rows) % 2 === 0 ? cols++ : rows++
    }
    return cols;
  }

  plaintextSegments() {
    let result = [];
    let split = Math.ceil(this.input.length / this.size());
    if (split !== this.size()) {
      split++;
    }
    let i = 0;
    while (i <= split * this.size()) {
      if (this.input.substring(i, split + i)) {
        result.push(this.input.substring(i, split + i));
      }
      i += split;
    }
    return result;
  }

  ciphertext() {
    let result = '';
    let segments = this.plaintextSegments();
    for (let i = 0; i < this.size(); i++) {
      for (let j = 0; j < segments.length; j++) {
        if (segments[j][i]) {
          result += segments[j][i];
        }
      }
    }
    return result;
  }
}

module.exports = Crypto;

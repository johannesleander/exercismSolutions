// TODO: Submit
class Cipher {
  constructor(key = "aaaaaaaaaa") {
    this.key = key;
    this.alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

    try {
      if (isUpperCase(this.key))
        throw new Error('Bad key');
      if (!isNaN(this.key))
        throw new Error('Bad key');
      if (!this.key)
        throw new Error('Bad key');
    }
    catch(err) {
      throw err;
    };
  }
}

Cipher.prototype.encode = function (input) {
  var keyArr = this.key.split("");

  var c = input.split("").map((x, i) => {
    var j = this.alphabet.indexOf(x);
    var k = this.alphabet.indexOf(keyArr[i]);

    if (j+k < this.alphabet.length) {
      return this.alphabet[j+k]
    } else {
      return this.alphabet[(j+k) - this.alphabet.length]
    }
  }).join("");

  console.log(c);
  return c;
};

Cipher.prototype.decode = function (input) {
  var keyArr = this.key.split("");

  var c = input.split("").map((x, i) => {
    var j = this.alphabet.indexOf(x);
    var k = this.alphabet.indexOf(keyArr[i]);

    if (j-k >= 0) {
      return this.alphabet[j-k]
    } else {
      return this.alphabet[this.alphabet.length - (j+k)]
    }
  }).join("");

  return c;
};

function isUpperCase(string) {
  return string === string.toUpperCase();
}

module.exports = Cipher;

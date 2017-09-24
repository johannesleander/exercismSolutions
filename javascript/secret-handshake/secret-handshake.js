class SecretHandshake {
  constructor(input) {
    try {
      if(typeof input != "number")
        throw new Error('Handshake must be a number');
    } catch (e) {
      throw e;
    }

    this.input = input;
  }
}

SecretHandshake.prototype.commands = function () {
  let bin = this.input.toString(2).split("").reverse();

  console.log(this.input + " : " + bin)

  let result = [];
  for(let i = 0; i < 4; i++) {
    if(bin[i] == "1")
      result.push(getHandshake(Math.pow(10,i)))
  }
  if (bin.length == 5) {
    result.reverse();
  }
  return result;
};

function getHandshake(value) {
  switch (value) {
    case 1:
      return "wink"
      break;
    case 10:
      return "double blink"
      break;
    case 100:
      return "close your eyes"
      break;
    case 1000:
      return "jump"
      break;
    default:
  }
}

module.exports = SecretHandshake;

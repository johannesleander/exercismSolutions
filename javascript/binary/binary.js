class Binary {
  constructor(input) {
    this.rawBinary = input;
  }
}

Binary.prototype.toDecimal = function() {

  let values = this.rawBinary.split("").reverse().join("");
  let processedValues = 0;
  for (let i = 0; i < values.length; i++) {
    let x = parseInt(values.charAt(i));
    if (isNaN(x) || (x<0 || 1<x )) {
      processedValues = 0;
      break;
    } else {
      processedValues += parseInt(values.charAt(i))*Math.pow(2,i);
    }
  }
  return processedValues;
}

module.exports = Binary;

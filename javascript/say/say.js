let ones = [
  "",
  " one",
  " two",
  " three",
  " four",
  " five",
  " six",
  " seven",
  " eight",
  " nine",
  " ten",
  " eleven",
  " twelve",
  " thirteen",
  " fourteen",
  " fifteen",
  " sixteen",
  " seventeen",
  " eighteen",
  " nineteen"
];

let tens = [
  "",
  "",
  " twenty",
  " thirty",
  " forty",
  " fifty",
  " sixty",
  " seventy",
  " eighty",
  " ninety"
];

let triplets= [
  "",
  " thousand",
  " million",
  " billion",
];

function inEnglish(num) {
  if (isNaN(num)) return;

  if (10**12 <= num) {
    throw new Error('Number must be between 0 and 999,999,999,999.');
  }
  if (num < 0) {
    throw new Error('Number must be between 0 and 999,999,999,999.');
  }

  if (num == 0) return "zero";

  return triToEnglish(num, 0);
}

function triToEnglish(num, tri) {
  // chunk the number, ...xyz
  let x = num / 1000;
  let y = (num / 100) % 10;
  let z = num % 100;

  let str = '';

  //hundreds
  if (y >= 1) {
    str += ones[Math.floor(y)] + ' hundred';
  }

  //ones and teens
  if (z >= 20) {
    str += tens[Math.floor(z / 10)];

    //'-' Only between *teen* and *one*
    if (ones[Math.floor(z % 10)]) {
      str += '-' + ones[Math.floor(z % 10)].substr(1,ones[Math.floor(z % 10)].length);
    }

  } else {
    str += ones[Math.floor(z)];
  }

  //Add triplet only if nothing else is added
  if (str) str += triplets[tri];

  // continue recursing?
  if (x >= 1) {
    str = (str[0] === '-') ? ' ' + str.substr(1,str.length) : str;
    return triToEnglish(x, tri+1) + str;
  } else {
    return str.substr(1,str.length);
  }
}

module.exports = {inEnglish: inEnglish};

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
  " trillion",
  " quadrillion",
  " quintillion",
  " sextillion",
  " septillion",
  " octillion",
  " nonillion"
];

function inEnglish(num) {
  if (isNaN(num)) return;

  if (10**12 <= num) throw new Error('Number must be between 0 and 999,999,999,999.');
  if (num < 0)
   throw new Error('Number must be between 0 and 999,999,999,999.');

  if (num == 0)
   return "zero";

  return convertTri(num, 0);
}

function convertTri(num, tri) {
  // chunk the number, ...rxy
  let r = (num / 1000);
  let x = (num / 100) % 10;
  let y = num % 100;

  let str = '';

  //hundreds
  if (x >= 1) {
    str += ones[Math.floor(x)] + ' hundred';
  }

  //ones and teens
  if (y >= 20) {
    str += tens[Math.floor(y / 10)];

    if (ones[Math.floor(y % 10)]) {
      str += '-' + ones[Math.floor(y % 10)].substr(1,ones[Math.floor(y % 10)].length);
    }
  } else {
    console.log(Math.floor(y));
    str += ones[Math.floor(y)];
  }

  if (str) str += triplets[tri];

  // console.log(str);
  // continue recursing?
  if (r >= 1) {
    str = (str[0] === '-') ? ' ' + str.substr(1,str.length) : str;
    return convertTri(r, tri+1) + str;
  } else {
    return str.substr(1,str.length);
  }
}



module.exports = {inEnglish: inEnglish};

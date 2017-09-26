
module.exports = function(n) {
  return convert(n)
};

function convert(n) {
  let result = '';

  if ((n / 1000) >= 1) {
    result += 'M' + convert(n - 1000);
  } else if ((n / 900) >= 1) {
    result += 'CM' + convert(n - 900);
  } else if ((n / 500) >= 1) {
    result += 'D' + convert(n - 500);
  } else if ((n / 400) >= 1) {
    result += 'CD' + convert(n - 400);
  } else if ((n / 100) >= 1) {
    result += 'C' + convert(n - 100);
  } else if ((n / 90) >= 1) {
    result += 'XC' + convert(n - 90);
  } else if ((n / 50) >= 1) {
    result += 'L' + convert(n - 50);
  } else if ((n / 40) >= 1) {
    result += 'XL' + convert(n - 40);
  } else if ((n / 10) >= 1) {
    result += 'X' + convert(n - 10);
  } else if ((n / 9) >= 1) {
    result += 'IX' + convert(n - 9);
  } else if ((n / 5) >= 1) {
    result += 'V' + convert(n - 5);
  } else if ((n / 4) >= 1) {
    result += 'IV' + convert(n - 4);
  } else if (n > 0){
    result += 'I' + convert(n - 1);
  };

  console.log(n/1000);

  // return result.split("").reverse().join("");
  return result;
}

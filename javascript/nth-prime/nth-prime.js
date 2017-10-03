function nth(n) {
  if (n <= 0) throw new Error('Prime is not possible');

  let candidate = 1;
  while (n > 0) {
    candidate++;
    if (isPrime(candidate)) {
      n--;
    }
  }
  return candidate;
};

function isPrime(number) {
  var start = 2;
  while (start <= Math.sqrt(number)) {
      if (number % start++ < 1) return false;
  }
  return number > 1;
}

module.exports = {nth: nth};

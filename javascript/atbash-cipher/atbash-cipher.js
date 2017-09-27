let ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
let REGEX = /[\s,.]/g


module.exports.encode = (str) => {
  str = str.replace(REGEX, "").toLowerCase();
  console.log(str);
  let result = '';
  let j = 0;
  for (let i = 0; i < str.length; i++) {
    j++;
    if (j > 5) {
      result += ' ';
      j = 1;
    }
    if(/[a-z]/.test(str[i])) {
      let index = ALPHABET.indexOf(str[i]);
      result += ALPHABET[ALPHABET.length - index - 1];
    } else {
      result += str[i];
    }
  }
  return result;
}

let ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
let REGEX = /[\s,.]/g


module.exports.encode = (str) => {
  str = str.replace(REGEX, "").toLowerCase();
  let result = '';
  let groupIndex = 0;
  for (let i = 0; i < str.length; i++) {
    groupIndex++;
    if (groupIndex > 5) {
      result += ' ';
      groupIndex = 1;
    }
    if(/[a-z]/.test(str[i])) {
      result += ALPHABET[ALPHABET.length - ALPHABET.indexOf(str[i]) - 1];
    } else {
      result += str[i];
    }
  }
  return result;
}

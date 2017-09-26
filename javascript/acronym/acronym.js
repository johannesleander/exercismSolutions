var REGEX = /(?=[A-Z][a-z])|[\s,:\-]/g

module.exports.parse = (str) => {
  let collection = str.split(REGEX);
  let result = '';
  for (let word of collection) {
    if (word[0]) {result += word[0].toUpperCase()};
  }
  return result;
}

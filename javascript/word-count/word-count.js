var REGEX = /[\u00A1\u00BF\u2000-\u206F\u2E00-\u2E7F\\'!"#\$%&\(\)\*\+\,\-\.\/:;<=>\?@\[\]\^_`\{\|\}~]/g;

class WordCount {
  constructor() {}

  count(str) {
    let array = str.replace(REGEX, '').toLowerCase().split(/\s+/);
    console.log(array);

    let result = {};
    
    outer:
    for (let i = 0; i < array.length; i++) {
      for (let key in result) {
        if (result.hasOwnProperty(key) && key === array[i]) {
          result[key]++
          continue outer;
        }
      }
      if (array[i].length > 0) {result[array[i]] = 1};
    }
    return result;
  }
}

module.exports = WordCount;

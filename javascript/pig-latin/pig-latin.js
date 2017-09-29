let REGEX_CONSONANTS = /[b-df-hj-np-tv-z]/;

function translate(text) {
  let words = text.split(' ');
  if (words.length > 1) {
    let phrase = ''
    for (let i = 0; i < words.length; i++) {
      phrase += translate(words[i]);
      if (i + 1 != words.length) {
        phrase += ' ';
      }
    }
    return phrase;
  }

  let chars = text.split('');
  let initialConsonant = REGEX_CONSONANTS.test(chars[0]);
  console.log(chars[0], initialConsonant);

  if (chars[0] === 'q' && chars[1] === 'u') {
    chars.push(chars[0]);
    chars.shift();
    chars.push(chars[0]);
    chars.shift();
  } else if (initialConsonant) {
    chars.push(chars[0]);
    chars.shift();
    return translate(chars.join(''));
  }
  return chars.join('') + 'ay';
}

module.exports = {translate: translate};

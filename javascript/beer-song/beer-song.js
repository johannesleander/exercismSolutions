class Song {
  constructor() {}

  verse(input) {

    let result = null;

    switch(true) {
      case input > 1:
        result = input + ' bottles of beer on the wall, ' + input + ' bottles of beer.\nTake one down and pass it around, ' + (input - 1) + ' ' + pluralize('bottle', input - 1) +' of beer on the wall.\n'
        break;
      case (input === 1):
        result = input + ' bottle of beer on the wall, ' + input + ' bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n'
        break;
      case (input === 0):
        result = 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n'
        break;
      default:
    }
    console.log(result);
    return result;
  }

  sing(current, end = 0) {

    let result = ''

    for (current; current >= end; current--) {
      result += this.verse(current);
      if (current !== end) {
        result += '\n';
      }
    }
    return result;
  }
}

function pluralize(word, amount) {
  return amount > 1 ? word + 's' : word;
}

module.exports = Song;

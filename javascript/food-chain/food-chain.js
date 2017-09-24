function lyrics() {
  return (
    { fly:
        ['I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n',
         'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n'],
      spider:
        ['It wriggled and jiggled and tickled inside her.\n',
         ''],
      bird: 'How absurd to swallow a bird!\n',
      cat: 'Imagine that, to swallow a cat!\n',
      dog: 'What a hog, to swallow a dog!\n',
      goat: 'Just opened her throat and swallowed a goat!\n',
      cow: 'I don\'t know how she swallowed a cow!\n',
      horse: 'She\'s dead, of course!\n'
    }
  )

}



class FoodChain {
  constructor() {

  }

  verse(n) {
    let keys = Object.keys(lyrics());
    console.log(keys);
    let verse = 'I know an old lady who swallowed a ' + keys[n - 1] + '.\n'
    verse += lyrics()[keys[n-1]];
    if (keys[n-1] === 'fly' || keys[n-1] === 'spider') {
      verse += lyrics()[keys[n-1]];
      return verse;
    } else if(n === 8) {
      return verse;
    }
    for (let i = n; i > 0; i--) {
      if (keys[i] === 'fly' || keys[i] === 'spider') {
        verse += lyrics()[keys[i]];
        continue;
      }
      verse += 'She swallowed the ' + keys[i] + ' to catch the ' + keys[i+1] + '.\n';
    }
    return verse;
  }
}

module.exports = FoodChain;

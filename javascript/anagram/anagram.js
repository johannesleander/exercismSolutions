class Anagram {
  constructor(input) {
    this.input = input;
  }

  matches(...candidates) {
  let anagrams = [];

    if (candidates[0] instanceof Array) {
      anagrams = match(this.input, candidates[0]); //Argument were an array of string
    } else {
      anagrams = match(this.input, candidates); //Argument was multiple strings
    }
    return anagrams;
  }
}

function match(subject, candidates) {
  let results = [];

  outer:
  for (let current of candidates) {
    let temp = subject;
    if(current.toLowerCase() === temp.toLowerCase()) {
      continue;
    } else if (current.length === temp.length) {
      for (let i in current) {
        // console.log(temp,current[i],temp.indexOf(current[i]) < 0);
        if(temp.toLowerCase().indexOf(current[i].toLowerCase()) < 0) {
          continue outer;
        }
        temp = temp.replace(current[i], '')
      }
      results.push(current)
    }
  }
  return results;
}

module.exports = Anagram;

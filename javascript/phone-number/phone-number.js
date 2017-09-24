class PN {
  constructor(input) {
    this.input = input;
  }

  number() {

    let filterRe = /^[+1][1]{0,1}|[-()+.@:!]|[A-Za-z]|\s/g
    let filteredInput = this.input.split(filterRe).join('');
    if (filteredInput.length != 10) {
      return null;
    }

    let groupingRe = /(\d{3})(\d{3})(\d{4})/
    let groupedInput = groupingRe.exec(filteredInput);

    let nrCollection = {
      area: groupedInput[1],
      exchange: groupedInput[2],
      subscriber: groupedInput[3]
    }

    let result = '';
    for(let key in nrCollection) {
      result += nrCollection[key];
    }

    if (/^[2-9]/g.test(nrCollection.area[0]) && /^[2-9]/g.test(nrCollection.exchange[0])) {
      return result;
    } else {
      return null;
    }
  }
}

module.exports = PN;

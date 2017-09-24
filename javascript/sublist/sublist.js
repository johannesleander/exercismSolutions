class List {
  constructor(array) {
    this.array = array;
  }

  compare(input) {
         if (!input.array && !this.array)    return 'EQUAL';
    else if (!input.array)                   return 'SUPERLIST';
    else if (!this.array)                    return 'SUBLIST';
    else if (this.array.equals(input.array)) return 'EQUAL';

    for (let i = 0; i < this.array.length; i++) {
      for (let j = 0; j < input.array.length; j++) {
        if (this.array[i] === input.array[j]) {
          if (input.array
              .slice(j, j + this.array.length)
              .equals(this.array)) {
            return 'SUBLIST'
          } else
          if (this.array
              .slice(i, i + input.array.length)
              .equals(input.array)) {
            return 'SUPERLIST'
          }
        }
      }
    }
    return 'UNEQUAL';
  }
}

Array.prototype.equals = function (array) {
    if (!array) return false;
    if (this.length != array.length) return false;

    for (var i = 0, l=this.length; i < l; i++) {
        if (this[i] instanceof Array && array[i] instanceof Array) {
            if (!this[i].equals(array[i])) return false;
        } else if (this[i] != array[i]) return false;
    }
    return true;
}

module.exports = List;

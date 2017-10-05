class Set {
  constructor(content) {
    this.content = content || [];
  }

  size() {
    return this.union(this).content.length;
  }

  toList() {
    return this.union(this).content.sort();
  }

  empty() {
    return this.content.length === 0;
  }

  contains(n) {
    return this.content.indexOf(n) >= 0;
  }

  subset(other) {
    if (other.content.length > this.content.length) return false;
    if (other.content.length === 0) return true;

    let steps = other.content.length;

    for (let i = 0; steps + i <= this.content.length; i++) {
      let matches = 0;
      for (let j = 0; j < steps; j++) {
        if (this.content[i+j] === other.content[j]) matches++;
      }
      if (matches === other.content.length) return true;
    }
    return false;
  }

  disjoint(other) {
    for (let thisValue of this.content) {
      for (let otherValue of other.content) {
        if (otherValue === thisValue) return false;
      }
    }
    return true;
  }

  eql(other) {
    if (other.content.length !== this.content.length) return false;
    let matches = 0;
    for (let value of other.content) {
      if (this.content.indexOf(value) >= 0) matches++;
    }
    return matches === other.content.length;
  }

  intersection(other) {
    if (other.content.length === 0 || this.content.length === 0) {
      return new Set();
    }
    let result = other.content.filter(x => {
      return this.content.indexOf(x) >= 0;
    });
    return new Set(result);
  }

  difference(other) {
    if (other.content.length === 0 && this.content.length === 0) {
      return new Set();
    } else if (other.content.length === 0) {
      return this;
    } else {
      let result = this.content.filter(x => {
        return other.content.indexOf(x) < 0;
      });
      return new Set(result);
    }
  }

  union(other) {
    var obj = {};
    for (var i = other.content.length-1; i >= 0; -- i) {
      obj[other.content[i]] = other.content[i];
    }
    for (var i = this.content.length-1; i >= 0; -- i) {
      obj[this.content[i]] = this.content[i];
    }

    var res = []
    for (var k in obj) {
      if (obj.hasOwnProperty(k)) {
        res.push(obj[k]);
      }
    }
    return new Set(res);
  }

  add(n) {
    if (this.content.indexOf(n) < 0) this.content.push(n);
    return this;
  }

  clear() {
    this.content = [];
    return this;
  }
}

module.exports = Set;

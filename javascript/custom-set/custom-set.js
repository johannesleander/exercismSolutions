class Set {
  constructor(content) {
    this.content = content || [];
  }

  //Update function
  add(x) {
    if (!this.contains(x)) this.content.push(x);
    return this;
  }

  clear() {
    this.content = [];
    return this;
  }

  //Read functions
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
    for (let i = 0; (other.content.length + i) <= this.content.length; i++) {
      let isSubset = (
        this.content.slice(i,other.content.length + i).every((x,i) => {
          return x === other.content[i]
        }));
      if (isSubset) return true;
    }
    return false;
  }

  disjoint(other) {
    return !this.content.some(x => {
      return other.contains(x);
    });
  }

  eql(other) {
    if (other.content.length !== this.content.length) return false;

    return other.content.every(x => {
      return this.contains(x);
    });
  }

  intersection(other) {
    let result = other.content.filter(x => {
      return this.contains(x);
    });
    return new Set(result);
  }

  difference(other) {
    let result = this.content.filter(x => {
      return !other.contains(x);
    });
    return new Set(result);
  }

  union(other) {
    let obj = {};
    for (let i = other.content.length-1; i >= 0; -- i) {
      obj[other.content[i]] = other.content[i];
    }
    for (let i = this.content.length-1; i >= 0; -- i) {
      obj[this.content[i]] = this.content[i];
    }

    let res = [];
    for (let k in obj) {
      if (obj.hasOwnProperty(k)) {
        res.push(obj[k]);
      }
    }
    return new Set(res);
  }
}

module.exports = Set;

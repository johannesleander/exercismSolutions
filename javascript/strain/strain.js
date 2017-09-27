function keep(collection, callback) {
  let result = [];
  for (let value of collection) {
    if (callback(value)) result.push(value);
  }
  return result;
}

function discard(collection, callback) {
  let result = [];
  for (let value of collection) {
    if (!callback(value)) result.push(value);
  }
  return result;
}

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

module.exports = {
  keep: keep,
  discard: discard
}

// if (value instanceof Array) {
//   result.push(keep(value, callback));
// } else if

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

module.exports = {
  keep: keep,
  discard: discard
}

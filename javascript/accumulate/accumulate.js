module.exports = (collection, callback) => {
  let result = [];
  for (let value of collection) {
    result.push(callback(value));
  }
  return result;
}

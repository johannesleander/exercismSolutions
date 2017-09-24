class ETL {
  constructor() {}

  transform(old) {
    var updated = {};

    for (let key in old) {
      for (let value of old[key]) {
        let lowerCaseValue = value.toLowerCase();
          updated[lowerCaseValue] = parseInt(key);
      }
    }
    return orderKeys(updated);
  }

}

function orderKeys(obj) {
  var keys = Object.keys(obj).sort(function keyOrder(k1, k2) {
      if (k1 < k2) return -1;
      else if (k1 > k2) return +1;
      else return 0;
  });

  var after = {};
  for (let i = 0; i < keys.length; i++) {
    after[keys[i]] = obj[keys[i]];
    delete obj[keys[i]];
  }

  for (i = 0; i < keys.length; i++) {
    obj[keys[i]] = after[keys[i]];
  }
  return obj;
}

module.exports = ETL

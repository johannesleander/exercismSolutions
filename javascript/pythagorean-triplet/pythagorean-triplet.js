// TODO: FInish up
function Triplet(a,b,c) {
  this.triplet = [a,b,c];
};


Triplet.prototype.sum = function() {
  return this.triplet.reduce((acc, current) => {
    return acc + current;
  });
}

Triplet.prototype.product = function() {
  return this.triplet.reduce((acc, current) => {
    return acc * current;
  });
}

Triplet.prototype.isPythagorean = function() {
  return this.triplet[0]**2 + this.triplet[1]**2 === this.triplet[2]**2;
}

module.exports = Triplet;

module.exports.where = function where(obj) {
  let temp = [null,null,null]
  let triplets = [];

  if (obj.maxFactor) {
    temp[2] = obj.maxFactor;
  }
  if (obj.minFactor) {
    this.temp[0] = obj.minFactor;
  }

  while ((temp[0] && temp[1]) <= temp[2]) {

  }

  return new Triplet(a,b,c)
}

module.exports = function(factors) {
  return {
    to: roof => {
      let sum = 0;
      for (let i = 0; i < roof; i++) {
        sum += factors.some(f => i%f==0) ? i : 0;
      }
      return sum;
    }
  }
};

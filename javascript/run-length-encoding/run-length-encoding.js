mmodule.exports.encode = (input) => {
  let array = [];
  let string = '';

  for (let i = 0; i < input.length; i++) {
    string += input[i];
    if (input[i] !== input[i+1]) {
      array.push(string);
      string = '';
    }
  };

  array.forEach((x,i,array) => {
    if (x.length > 1) {
      array[i] = x.length.toString() + x[0];
    }
  });

  return array.join('');
};

module.exports.decode = (input) => {
  let array = input.match(/\s|[a-zA-Z]|[0-9]+/g);
  let result = '';
  if (array === null) {
    array = [];
  }
  array.forEach((x,i,input) => {
    if(/[a-zA-Z]|\s/.test(x)) {
      result += x;
      result += x.repeat(!parseInt(input[i-1]) ? 0 : parseInt(input[i-1] - 1));
    }
  })
  return result;
};

class Flatten {
	constructor() {}

	flatten(collection) {
	  var result = [];
	  for(var i = 0; i < collection.length; i++) {
	    if(Array.isArray(collection[i])) {
        result = result.concat(this.flatten(collection[i]));
	    } else if (collection[i] !== null) {
        result.push(collection[i]);
	    }
	  }
	  return result;
	}
}

module.exports = Flatten;

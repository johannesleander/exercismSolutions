class Bst {
	constructor(data) {
		this.data = this.init(data);
	}

	init(n) {
		if (this.left || this.right) {
			return this.insert(n);
		}
		return n;
	}

	insert(n) {
		let dir = n <= this.data ? 'left' : 'right';
		if (this[dir]) {
			this[dir].insert(n);
		} else {
			this[dir] = new Bst(n);
		}
	}

	each(callback) {
		let result = [];

		recurse(this);

		result.sort().forEach(value => {
			callback(value);
		});

		function recurse(bst) {
			result.push(bst.data);

			if (bst.left !== undefined) {
	      recurse(bst.left)
	    }
	    if (bst.right !== undefined) {
	      recurse(bst.right);
	    }
	  }
	}
}

module.exports = Bst;

class BinarySearch {
	constructor(input) {
		this.array = this.init(input);
	}

	init(input) {
		if (!Array.isArray(input)) return;
		for (let i = 0; i <= input.length; i++) {
			if (input[i] > input[i+1]) return;
		}
		return input;
	}

	indexOf(n) {
		let middle = (this.array.length / 2).toFixed(0);
		
		if (this.array[middle] < n) {
			for (var i = middle; i < this.array.length; i++) {
				if (this.array[i] === n) return i;
			}
		} else {
			for (var i = middle; i >= 0; i--) {
				if (this.array[i] === n) return i;
			}
		}
		return -1;
	}
}

module.exports = BinarySearch;

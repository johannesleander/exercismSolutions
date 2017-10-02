class Series {
	constructor(input) {
		this.series = input;
	}

	largestProduct(n) {
		if (n > this.series.length) throw new Error('Slice size is too big.')
		else if (n < 0) throw new Error('Invalid input.')
		else if (n === 0) return 1;

		let array = [];
		for (let i = n; i <= this.series.length; i++) {
			let temp = this.series.substring(i-n, i).split('').reduce((acc, curr) => {
				if (!/[0-9]/.test(curr)) throw new Error('Invalid input.');
				return acc * curr;
			});
			array.push(temp);
		}

		let sorted = array.sort(function(a, b) {
		  return a - b;
		});

		return sorted[array.length-1];
	}
}

module.exports = Series;

let defaultNames = [
	'alice',
	'bob',
	'charlie',
	'david',
	'eve',
	'fred',
	'ginny',
	'harriet',
	'ileana',
	'joseph',
	'kincaid',
	'larry'
]

class Garden {
	constructor(diagram, students) {
		students = students || defaultNames;

		for (let name of students.sort()) {
			this[name.toLowerCase()] = [];
		}

		this.assign(diagram);
	}

	assign(diagram) {
		let children = this;
		let rows = diagram.split('\n');

		let result = Object.keys(children).map((x,i) => {
			let temp = '';
			for (let r of rows) {
				temp += r.substring(i*2, i*2+2);
			}
			return temp;
		})

		let array = [];
		for (let group of result) {
			let temp = [];
			for (let letter of group.split('')) {
				if 			(letter === 'V') temp.push('violets')
				else if (letter === 'G') temp.push('grass')
				else if (letter === 'C') temp.push('clover')
				else if (letter === 'R') temp.push('radishes');
			}
			array.push(temp);
		}

		result = Object.keys(children).map((x,i) => {
			return [x, array[i]];
		})

		for (let r of result) {
			this[r[0]] = r[1];
		}
	}
}

module.exports = Garden;

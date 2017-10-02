letters = 'abcdef'.split('');

class Hexadecimal {
	constructor(input) {
		this.hexadecimal = input;
	}

	toDecimal() {
		let array = this.hexadecimal.split('').reverse().map((x,i) => {
			return getHexValue(x,i);
		}).reduce((acc, curr) => {
			return acc + curr;
		});

		return isNaN(array) ? 0 : array;
	}
}

function getHexValue(char,i) {
	if (/[0-9]/.test(char)) {
		return (16 ** i) * parseInt(char);
	} else
	if (/[a-f]/.test(char)) {
		return (16 ** i) * (letters.indexOf(char) + 10);
	}
}

module.exports = Hexadecimal;

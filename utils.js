const utils = {
	random: (min, max) => {
		return Math.floor(Math.random() * (max - min + 1) + min)
	},
	getSpaces: (width, strA, strB) => {
		const strLength = strA.length + strB.length;
		if(strLength > width) return ' ';
		let spaces = [];
		let size = width - (strLength);
		for(let i = 0; i <= size; i++) {
			spaces += ' '
		};
		return strA + spaces + strB;
	},
}

module.exports = utils
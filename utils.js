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
	spacesBefore: (width, string) => {
		let spaces = '';
		for(let i = 0; i <= width; i++) {
			spaces += ' '
		};
		return spaces + string;
	},
	formatKey: (key) => {
		const spaces = key != 'space' ? '    ' : '';
		const upperCase = (key + "").toUpperCase()

		return spaces + "[" + upperCase + "] - ";
	},
	logIndex: 0,
	log(message) {
		console.log(message)
		utils.logIndex++;
	},
	clearLog() {
		utils.logIndex = 0;
		console.clear()
	}
}

module.exports = utils
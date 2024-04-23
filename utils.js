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
	decorString: (width, char, first, last) => {
		let chars = '';
		for(let i = 0; i <= width; i++) {
			if(first && i == 0)
				chars += first
			else if(last && i == width)
				chars += last
			else
				chars += char
		}
		if(first) chars[0] = first
		if(last) chars[chars.length - 1] = last
		return chars;
	},
	center: (width, char, string, space = ' ') => {
		const size = (width - string.length)/2;
		let chars = char + (size % 2 == 1 ? space : '');
		for(let i = 1; i < size; i++) {
			chars += space
		}
		chars += string;
		for(let i = 1; i < size; i++) {
			chars += space
		}
		chars += char;
		return chars
	},
	formatKey: (key) => {
		const spaces = key != 'space' ? '    ' : '';
		const upperCase = (key + "").toUpperCase()

		return spaces + "[" + upperCase + "] - ";
	},
	logIndex: 0,
	afterClear: () => {},
	log(message) {
		console.log(message)
		utils.logIndex++;
	},
	clearLog() {
		utils.logIndex = 0;
		console.clear()
		utils.afterClear();
	}
}

module.exports = utils
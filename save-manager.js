const fs = require('fs')

class SaveManager {
	filename = 'save.json';

	loadingAvailable() {
		return fs.existsSync(this.filename)
	}

	save(player) {
		const { 
			health,
			maxHealth,
			strength,
			dexterity,
			inteligence,
			name,
			learningPoints,
			location,
			experience,
			level
		} = player
		fs.writeFileSync(this.filename, JSON.stringify({
			health,
			maxHealth,
			strength,
			dexterity,
			inteligence,
			name,
			learningPoints,
			location,
			experience,
			level
		}))
	}

	load() {
		return JSON.parse(fs.readFileSync(this.filename))
	}

	getOption(callback) {
		return {
			key: 's',
			name: 'Zapisz',
			do: callback
		}
	}
}

module.exports = SaveManager
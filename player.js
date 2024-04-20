const utils = require('./utils')

class Player {
	health = 100;
	maxHealth = 100;
	strength = 10;
	dexterity = 10;
	inteligence = 10;
	name = ""
	learningPoints = 0;
	location = 'village';

	displayStat() {
		console.log('Imię: ' + this.name)
		console.log('Życie: ' + this.health + '/' + this.maxHealth)
		console.log('Punkty nauki: ' + this.learningPoints)
		console.log('Siła: ' + this.strength)
		console.log('Zręczność: ' + this.dexterity)
		console.log('Inteligencja: ' + this.inteligence)
		console.log('')
	}

	getStatOption(callback) {
		return { key: 'c', name: 'statystyki postaco', do: () => {
			this.displayStat()
			callback()
		}}
	}

	getDamage() {
		const base = this.strength;
		const crit = 1 + (this.dexterity/100) + (utils.random(0, 25)/100)
		const dmg = base * crit;

		return dmg;
	}
}

module.exports = Player
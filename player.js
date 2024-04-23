const utils = require('./utils')
const Entity = require('./entity')
class Player extends Entity {
	health = 100;
	maxHealth = 100;
	strength = 10;
	dexterity = 10;
	inteligence = 10;
	name = ""
	learningPoints = 0;
	location = 'village';

	constructor() {
		super(100, 10, 10, 10)
	}

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

}

module.exports = Player
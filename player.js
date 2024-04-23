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
	experience = 0;
	level = 1;

	constructor() {
		super(100, 10, 10, 10)
	}

	displayStat() {
		console.log('+=================================')
		console.log('| Imię: ' + this.name)
		console.log('| Level: ' + this.level);
		console.log('| Doświadczenie: ' + this.experience + ' / ' + this.needToLevelUp())
		console.log('| Życie: ' + this.health + ' / ' + this.maxHealth)
		console.log('| Punkty nauki: ' + this.learningPoints)
		console.log('| Siła: ' + this.strength)
		console.log('| Zręczność: ' + this.dexterity)
		console.log('| Inteligencja: ' + this.inteligence)
		console.log('+=================================')
		console.log('Naciśnij [space] żeby kontynuować.')
	}

	getStatOption() {
		return { 
			key: 'c', 
			name: 'Statystyki postaci', 
			do: () => {
				this.displayStat();
			}
		}
	}

	addExperience(value) {
		this.experience += value;
	}

	checkLevelUp() {
		if(this.experience > this.needToLevelUp())
			this.levelUp();
	}

	needToLevelUp() {
		return 20 + parseInt(this.level * this.level * 1.5);
	}

	levelUp() {
		this.level++;
		this.learningPoints += 10;
		console.log(">>> Level up | " + this.name + ' is ' + this.level + ' level now!');
	}

}

module.exports = Player
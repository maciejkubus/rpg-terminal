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

		this.mana = 100;
		this.maxMana = 100;

		this.abilities.push({
			name: 'Jeb w łeb',
			damage: this.skillBasicStr.bind(this),
			can: () => true, 
		})
		this.abilities.push({
			name: 'Zrecznościowy',
			damage: this.skillBasicDex.bind(this),
			can: () => true, 
		})
		this.abilities.push({
			name: 'Kula ognia',
			damage: this.skillBasicInt.bind(this),
			can: () => this.mana >= 10, 
		})
	}

	displayStat(space = true) {
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
		if(space)
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
		console.log('[' + this.name + '] zdobył ' + value + ' punktów doświadczenia.')
		this.experience += value;
		this.checkLevelUp();
	}

	checkLevelUp() {
		if(this.experience >= this.needToLevelUp())
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

	getAbilities() {
		return this.abilities;
	}


	skillBasicStr() {
		return this.strength * 1.5;
	}

	skillBasicDex() {
		const base = this.dexterity;
		const crit = (this.dexterity/100) + (utils.random(0, 25)/100)
		const dmg = base * crit;

		return dmg;
	}

	skillBasicInt() {
		const base = this.inteligence;
		const crit = 1 + (utils.random(0, 25)/100)
		const dmg = base * crit;

		this.mana -= 10;

		return dmg;
	}

	die() {
		this.displayStat(false);
		console.log('| ')
		console.log('| Koniec.')
		console.log('| ')
		console.log('+=================================')
		process.exit();
	}

	abilitiesOptions(callback) {
		return this.abilities.map((ability, index) => {
			const key = ability.can() ? index + 1 : ' ';
			return {
				key: key,
				name: (ability.can() ? '🟩 ' : '🟥 ') + ability.name,
				do: () => callback(this.useAbility(ability.name))
			}
		})
	}
}

module.exports = Player
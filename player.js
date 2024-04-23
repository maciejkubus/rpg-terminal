const utils = require('./utils')
const Entity = require('./entity');
const Inventory = require('./inventory');
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
	inventory = null;

	constructor() {
		super(100, 10, 10, 10)

		this.mana = 100;
		this.maxMana = 100;

		this.inventory = new Inventory([
			{ name: 'Health Potion', quantity: 5, callback: () => this.regenHP(10), description: '+10 życia'},
			{ name: 'Mana Potion', quantity: 5, callback: () => this.regenMana(10), description: '+10 mana'},
		]);

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

		utils.afterClear = () => {
			if(!this.name) return;

			utils.log(
				utils.getSpaces(
					64, 
					'⬜ ' + this.name + ' ' + this.level + ' lvl.',
					'HP:' + Math.floor(this.health) + '/' + this.maxHealth + ' ⬜'
				))
		}
	}

	regenHP(value) {
		this.health += value;
		if(this.health > this.maxHealth)
			this.health = this.maxHealth
	}

	regenMana(value) {
		this.mana += value;
		if(this.mana > this.maxMana)
			this.mana = this.maxHealth
	}

	displayStat(space = true) {
		utils.log('+=================================')
		utils.log('| Imię: ' + this.name)
		utils.log('| Level: ' + this.level);
		utils.log('| Doświadczenie: ' + this.experience + ' / ' + this.needToLevelUp())
		utils.log('| Życie: ' + this.health + ' / ' + this.maxHealth)
		utils.log('| Mana: ' + this.mana + ' / ' + this.maxMana)
		utils.log('| Punkty nauki: ' + this.learningPoints)
		utils.log('| Siła: ' + this.strength)
		utils.log('| Zręczność: ' + this.dexterity)
		utils.log('| Inteligencja: ' + this.inteligence)
		utils.log('+=================================')
		if(space)
			utils.log('Naciśnij [space] żeby kontynuować.')
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
		utils.log('[' + this.name + '] zdobył ' + value + ' punktów doświadczenia.')
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
		utils.log(">>> Level up | " + this.name + ' is ' + this.level + ' level now!');
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
		utils.log('| ')
		utils.log('| Koniec.')
		utils.log('| ')
		utils.log('+=================================')
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
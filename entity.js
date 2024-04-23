const utils = require("./utils");

class Entity {
	health = 100;
	maxHealth = 100;
	mana = 0;
	maxMana = 0;
	strength = 10;
	dexterity = 10;
	inteligence = 10;
	abilities = [];
	name = "";

	constructor(health = 100, str = 10, dex = 10, int = 10) {
		this.health = health;
		this.maxHealth = health;
		this.strength = str;
		this.dexterity = dex;
		this.int = int;

		this.abilities.push({
			name: 'Basic Attack',
			damage: this.getDamage.bind(this),
			can: () => true
		})
	}

	useAbility(name) {
		const ability = this.abilities.find(a => a.name == name);
		
		if(ability.can())
			return ability.damage()
		else
			utils.log('Nie można użyć umiejętności ' + ability.name);
		return 0;
	}

	getDamage() {
		const base = this.strength;
		const crit = 1 + (this.dexterity/100) + (utils.random(0, 25)/100)
		const dmg = base * crit;

		return dmg;
	}

	takeDamage(damage) {
		const dodge = (this.dexterity - 5) > utils.random(0, 100);
		const floorDamage = parseInt(damage);

		if(!dodge)	
			this.health -= floorDamage;

		if(this.health < 0)
			this.health = 0;

		return {
			dodge,
			damage: floorDamage,
		}
	}
}

module.exports = Entity
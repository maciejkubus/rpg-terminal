class Entity {
	health = 100;
	maxHealth = 100;
	strength = 10;
	dexterity = 10;
	inteligence = 10;

	constructor(health = 100, str = 10, dex = 10, int = 10) {
		this.health = health;
		this.maxHealth = health;
		this.strength = str;
		this.dexterity = dex;
		this.int = int;
	}

	getDamage() {
		const base = this.strength;
		const crit = 1 + (this.dexterity/100) + (utils.random(0, 25)/100)
		const dmg = base * crit;

		return dmg;
	}
}

module.exports = Entity
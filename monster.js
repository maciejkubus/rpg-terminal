const Entity = require('./entity')

class Monster extends Entity {
	experience = 0;
	gold = 0;

	constructor(name, hp, str, dex, int, exp, gold) {
		super(hp, str, dex, int)
		this.name = name
		this.experience = exp
		this.gold = gold;
	}
}

module.exports = Monster
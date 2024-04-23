const Entity = require('./entity')

class Monster extends Entity {
	experience = 0;

	constructor(name, hp, str, dex, int, exp) {
		super(hp, str, dex, int)
		this.name = name
		this.experience = exp
	}
}

module.exports = Monster
const Entity = require('./entity')

class Monster extends Entity {
	experience = 0;

	constructor(hp, str, dex, int, exp) {
		super(hp, str, dex, int)
		this.experience = exp
	}
}

module.exports = Monster
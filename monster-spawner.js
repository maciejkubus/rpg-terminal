const utils = require('./utils')
const Monster = require('./monster');

const monsterSpawner = {
	randomMonster(monsters) {
		let options = [];
		monsters.forEach(monster => {
			const type = monsterSpawner.getType(monster)
			for (let i = 0; i < type.chance; i++) {
				options.push(type)
			}
		})
		const randomIndex = utils.random(0, options.length - 1);
		const choice = options[randomIndex];
		return choice;
	},
	randomMonsterFromLocation(location) {
		return monsterSpawner.randomMonster(location.monsters)
	},
	getType(key) {
		return monsterSpawner.types.find(t => t.name == key)
		
	},
	create(type) {
		const monster = new Monster(
			type.name,
			utils.random(type.health.min, type.health.max),
			utils.random(type.strength.min, type.strength.max),
			utils.random(type.dexterity.min, type.dexterity.max),
			utils.random(type.inteligence.min, type.health.max),
			type.experience
		)
		return monster
	},
	types: [
		{
			name: 'Goblin Warrior',
			chance: 10,
			experience: 10,
			health: { min: 10, max: 25 },
			strength: { min: 5, max: 15 },
			dexterity: { min: 0, max: 10 },
			inteligence: { min: 0, max: 0 },
		},
		{
			name: 'Goblin Scout',
			chance: 5,
			experience: 15,
			health: { min: 10, max: 25 },
			strength: { min: 5, max: 10 },
			dexterity: { min: 10, max: 20 },
			inteligence: { min: 0, max: 0 },
		},
		{
			name: 'Goblin Shaman',
			chance: 2,
			experience: 20,
			health: { min: 10, max: 15 },
			strength: { min: 5, max: 10 },
			dexterity: { min: 5, max: 10 },
			inteligence: { min: 20, max: 30 },
		},
		{
			name: 'Wolf',
			chance: 15,
			experience: 5,
			health: { min: 5, max: 10 },
			strength: { min: 5, max: 15 },
			dexterity: { min: 5, max: 10 },
			inteligence: { min: 0, max: 0 },
		},
		{
			name: 'Orc',
			chance: 2,
			experience: 25,
			health: { min: 20, max: 40 },
			strength: { min: 20, max: 35 },
			dexterity: { min: 0, max: 5 },
			inteligence: { min: 0, max: 0 },
		},
		{
			name: 'Crab',
			chance: 10,
			experience: 1,
			health: { min: 1, max: 5 },
			strength: { min: 2, max: 5 },
			dexterity: { min: 0, max: 0 },
			inteligence: { min: 0, max: 0 },
		},
		{
			name: 'Angry Crab',
			chance: 5,
			experience: 2,
			health: { min: 5, max: 10 },
			strength: { min: 10, max: 15 },
			dexterity: { min: 0, max: 0 },
			inteligence: { min: 0, max: 0 },
		}
	]
}

module.exports = monsterSpawner;
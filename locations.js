const locations = {
	village: {
		key: 'village',
		name: 'Wioska',
		description: 'Obecnie znajdujesz się w skromnej wiosce.',
		routes: [
			'forest',
			'road'
		],
		monsterChance: 0,
		monsters: []
	},
	forest: {
		key: 'forest',
		name: 'Las',
		description: 'Las jest bardzo ciemny.',
		routes: [
			'village',
		],
		monsterChance: 0.25,
		monsters: [
			'Wolf',
		]
	},
	'dark-forest': {
		key: 'dark-forest',
		name: 'Mroczny las',
		description: 'Jest tu bardzo ciemno.',
		routes: [
			'forest',
		],
		monsterChance: 0.33,
		monsters: [
			'Goblin Warrior',
			'Goblin Scout',
			'Goblin Shaman',
			'Wolf',
		]
	},
	road: {
		key: 'road',
		name: 'Szlak',
		description: 'Długi szlak.',
		routes: [
			'village',
			'beach',
			'trade'
		],
		monsterChance: 0.1,
		monsters: [
			'Goblin Warrior',
			'Goblin Scout',
		]
	},
	beach: {
		key: 'beach',
		name: 'Plaża',
		description: 'Mokro i piaszczyście.',
		routes: [
			'road'
		],
		monsterChance: 0.75,
		monsters: [
			'Crab',
			'Angry Crab'
		]
	},
	'trade': {
		key: 'trade',
		name: 'Szlak kupiecki',
		description: 'Brakuje tu kupców.',
		routes: [
			'road',
			'mountains'
		],
		monsterChance: 0.1,
		monsters: [
			'Goblin Warrior',
			'Goblin Scout',
		]
	},
	mountains: {
		key: 'mountains',
		name: 'Góry',
		description: 'Górki i pagórki.',
		routes: [
			'trade'
		],
		monsterChance: 0.8,
		monsters: [
			'Goblin Warrior',
			'Goblin Scout',
			'Goblin Shaman',
			'Orc'
		]
	}
}

module.exports = locations
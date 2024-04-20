const locations = {
	village: {
		key: 'village',
		name: 'Wioska',
		description: 'Obecnie znajdujesz się w skropmnej wiosce.',
		routes: [
			'forest',
			'road'
		]
	},
	forest: {
		key: 'forest',
		name: 'Las',
		description: 'Las jest bardzo ciemny.',
		routes: [
			'village',
		]
	},
	'dark-forest': {
		key: 'dark-forest',
		name: 'Mroczny las',
		description: 'Jest tu bardzo ciemno.',
		routes: [
			'forest',
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
		]
	},
	beach: {
		key: 'beach',
		name: 'Plaża',
		description: 'Mokro i piaszczyście.',
		routes: [
			'road'
		]
	},
	'trade': {
		key: 'trade',
		name: 'Szlak kupiecki',
		description: 'Brakuje tu kupców.',
		routes: [
			'road',
			'mountains'
		]
	},
	mountains: {
		key: 'mountains',
		name: 'Góry',
		description: 'Górki i pagórki.',
		routes: [
			'trade'
		]
	}
}

module.exports = locations;
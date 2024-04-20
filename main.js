const readline = require('readline')
const PlayerCreator = require('./player-creator')
const Player = require('./player')
const locations = require('./locations')

const playerCreator = new PlayerCreator()
const player = new Player();

let currentLocation = locations[player.location]
let options = []

const clearOptions = () => {
	const callback = () => setLocation(locations[player.location].key, false)
	options = [
		player.getStatOption(callback),
		{ key: 'q', name: 'opuść', do: callback}
	]
}

const displayOptions = () => {
	console.log('')
	options.forEach(option => {
		console.log('[' + option.key + '] - ' + option.name)
	})
}

const setLocation = (location, clear = true) => {
	
	if(clear)
		console.log('Zmiana lokacji...')
	
	setTimeout(() => {
		if(clear)
			console.clear()
		
			player.location = location;
		currentLocation = locations[location]
		
		clearOptions();
		console.log(currentLocation.name)
		console.log(currentLocation.description)
		for(let i = 0; i <= currentLocation.routes.length - 1; i++) {
			options.push({ 
				key: i, 
				name: locations[currentLocation.routes[i]].name, 
				do: () => setLocation(currentLocation.routes[i]) 
			})
		}
		displayOptions();
	}, 1000)
} 

const main = () => {
	readline.emitKeypressEvents(process.stdin);

	if (process.stdin.isTTY)
			process.stdin.setRawMode(true);

	process.stdin.on('keypress', (chunk, key) => {
		if(key.name == 'q') {
			process.exit()
		}

		playerCreator.keyPress(key.name)
		
		const option = options.find(o => o.key == key.name)
		if(option) {
			console.clear()
			option.do();
		}

	});

	playerCreator.onCreated((data) => {
		player.name = data.name;
		player.strength = data.strength;
		player.dexterity = data.dexterity;
		player.inteligence = data.inteligence;
		setLocation('village')
	})
	playerCreator.askName()
}

main();
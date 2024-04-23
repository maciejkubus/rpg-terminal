const readline = require('readline')
const PlayerCreator = require('./player-creator')
const Player = require('./player')
const locations = require('./locations')
const SaveManager = require('./save-manager')
const utils = require('./utils')
const Fight = require('./fight')
const monsterSpawner = require('./monster-spawner')

const saveManager = new SaveManager();
const playerCreator = new PlayerCreator()
const player = new Player();

let currentLocation = locations[player.location]
let options = []

const displayOptions = () => {
	const callback = (clear = false, noFight = false) => setLocation(locations[player.location].key, clear, noFight)
	options = [
		{ key: 'q', name: 'opuść', do: callback},
		saveManager.getOption(() => { 
			saveManager.save(player)
			callback(false, true);
		}),
		player.getStatOption(),
		{ 
			key: 'i', 
			name: 'Ekwipunek', 
			do: () => {
				options = [];
				options = [
					...player.inventory.getOptions(() => {
						utils.clearLog();
						displayOptions();
					}),
					{ key: 'space', name: 'Wróć', do: displayOptions}
				];
				options.forEach(option => {
					utils.log(utils.formatKey(option.key) + option.name)
				})
		}},
		{ key: 'space', name: 'Rozglądaj się', do: () => callback(true)},
	]

	utils.log('=========================')
	utils.log('Lokacja: ' + currentLocation.name)
	utils.log(currentLocation.description)
	utils.log('=========================')

	for(let i = 0; i <= currentLocation.routes.length - 1; i++) {
		options.push({ 
			key: i, 
			name: locations[currentLocation.routes[i]].name, 
			do: () => setLocation(currentLocation.routes[i]) 
		})
	}

	options.forEach(option => {
		utils.log(utils.formatKey(option.key) + option.name)
	})
}

const setLocation = (location, clear = true, noFight = false) => {
	
	if(clear) {
		utils.log(utils.decorString(64, '-', '+', '+'))
		utils.log(utils.center(64, '|', 'Zmiana lokacji'))
		utils.log(utils.decorString(64, '-', '+', '+'))
	}

	setTimeout(() => {
		if(clear)
			utils.clearLog()
	
		player.location = location;
		currentLocation = locations[location]

		const fightChance = currentLocation.monsterChance * 100
		const fight = utils.random(0, 100) <= fightChance;

		if(fight && !noFight) {
			options = []
			
			const monsterType = monsterSpawner.randomMonsterFromLocation(currentLocation);
			const monster = monsterSpawner.create(monsterType);
			const fight = new Fight(player, monster)

			fight.setOnEnd( () => {
				fight.setShowOptions(() => {})

				options = [
					{ key: 'space', name: 'Opuść walkę.', do: displayOptions }
				]
				
				options.forEach(option => {
					utils.log(utils.formatKey(option.key) + option.name)
				})

			});

			fight.setShowOptions(() => {
				options = fight.getOptions();
				options.forEach(option => {
					utils.log(utils.formatKey(option.key) + option.name)
				})
			})

			fight.play()
		}
		else {
			displayOptions();
		}
		
	}, clear ? 1000 : 0)
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
			utils.clearLog()
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
	if(saveManager.loadingAvailable()){
		const data = saveManager.load();
		for (const key in data.player) {
			player[key] = data.player[key];
		}
		player.inventory.load(data.inventory)
		setLocation(player.location)
	}
	else {
		playerCreator.askName()
	}
}

main();
const prompt = require("prompt-sync")({ sigint: true })

class PlayerCreator {
	strength = 10;
	dexterity = 10;
	inteligence = 10;
	name = ""
	points = 10;
	index = 0;
	leave = false;
	createdCallback = null;

	askName() {
		console.clear();
		this.name = prompt('Podaj imię swojej postaci: ')
		this.render()
	}

	progress(value) {
		let bar = '';
		for(let i = 0; i <= 20; i++) {
			if(i <= value) {
				bar += '🟩'
			}
			else {
				bar += '⬜'
			}
		}

		return bar;
	}

	select(value) {
		if(this.index == value) {
			return '⚫'
		}
		else {
			return '  '
		}
	}

	render() {
		console.clear();
		console.log('======================')
		console.log('Wybrane imię: '+ this.name)
		console.log('Pozostałe punkty: ' + this.points)
		console.log(this.select(0) + ' SIŁA         ' + this.progress(this.strength))
		console.log(this.select(1) + ' ZRĘCZNOŚĆ    ' + this.progress(this.dexterity))
		console.log(this.select(2) + ' INTELIGENCJA ' + this.progress(this.inteligence))
		console.log("[ENTER] Utwórz")

		setTimeout(() => {
			if(!this.leave)
				this.render()
		}, 50)
	}

	assignUp(prop) {
		if(this.points > 0 && this[prop] < 20) {
			this.points--
			this[prop]++ 
		}
	}

	assignDown(prop) {
		if(this[prop] > 10) {
			this.points++
			this[prop]--
		}
	}

	keyPress(key) {
		if(key == 'up' && this.index > 0) this.index--;
		if(key == 'down' && this.index < 2) this.index++;

		const props = ['strength', 'dexterity', 'inteligence']
		if(key == 'right') this.assignUp(props[this.index])
		if(key == 'left') this.assignDown(props[this.index])

		if(key == 'return') {
			this.leave = true;
			this.createdCallback(this)
		}
	}

	onCreated(callback) {
		this.createdCallback = callback
	}
}

module.exports = PlayerCreator
const utils = require('./utils')

class Fight {
	enemy = null;
	turn = 'enemy';
	player = null;
	over = false;
	showOptions = null;
	onEnd = null;

	constructor(player, enemy) {
		this.player = player;
		this.enemy = enemy;
		this.turn = utils.random(1, 2) == 1 ? 'player' : 'enemy'
	}

	display() {
		utils.log(utils.getSpaces(64, '+-------------'  + (this.turn == 'player' ? ' [TURA]' : ''), (this.turn == 'enemy' ? '[TURA] ' : '') + '-------------+'))
		utils.log(utils.getSpaces(64, '| ' + this.player.name, this.enemy.name + ' |') )
		utils.log(utils.getSpaces(64, '| Życie        ' + Math.floor(this.player.health) + '/' + this.player.maxHealth,
		Math.floor(this.enemy.health) + '/' + this.enemy.maxHealth 
			                                           + '        Życie |') )
		utils.log(utils.getSpaces(64, '| Siła         ' + this.player.strength,
			 this.enemy.strength                       + '         Siła |') )
		utils.log(utils.getSpaces(64, '| Zręczność    ' + this.player.dexterity, 
			this.enemy.dexterity                       + '    Zręczność |') )
		utils.log(utils.getSpaces(64, '| Inteligencja ' + this.player.inteligence, 
			this.enemy.inteligence                     + ' Inteligencja |') )
		utils.log(utils.getSpaces(64, '| Mana         ' + this.player.mana + '/' + this.player.maxMana, 
			this.enemy.mana + '/' + this.enemy.maxMana + '         Mana |') )
		
		utils.log(utils.getSpaces(64, '+-------------', '-------------+'))
	}

	getOptions() {
		if(this.over || this.turn == 'wait') 
			return []
		else if(this.turn == 'enemy') {
			return [
				{ key: 'space', name: 'Dalej', do: this.play.bind(this) }
			]
		}
		else {
			return [
				...this.player.abilitiesOptions(this.playerTurn.bind(this)),
			]
		}
	}

	setShowOptions(callback) {
		this.showOptions = callback
	}

	play() {
		if(this.over) 
			this.onEnd();

		if(this.turn == 'wait') {
			return;
		}
		else if(this.turn == 'enemy') {
			this.enemyTurn();
			this.showOptions()
			this.turn = 'player';
		}
		else {
			utils.clearLog()
			this.display()
			this.showOptions()
		}
	}

	playerTurn(damage) {
		if(this.turn == 'wait' || this.over) return;

		const effect = this.enemy.takeDamage(damage);
		
		utils.clearLog()
		this.display()
		if(effect.dodge)
			utils.log('['+ this.enemy.name +'] uniknął ataku (' + Math.floor(effect.damage) + ') obrażeń.')
		else
			utils.log('['+ this.player.name +'] zadał ' + Math.floor(effect.damage) + ' obrażeń.')
		
		this.turn = 'wait';

		if(this.enemy.health <= 0) {
			this.over = true;
			this.player.addExperience(this.enemy.experience)
			utils.log('> ' + this.enemy.name + ' pokonany');
			utils.log('> Walka została wygrana.');
		}

		setTimeout(() => {
			this.turn = 'enemy';
			this.play();
		}, 2500)
	}

	enemyTurn() {
		if(this.turn == 'wait' || this.over) return;

		const availableAbilities = this.enemy.abilities.filter(a => a.can())
		const chosenAbility = availableAbilities[utils.random(0, availableAbilities.length - 1)]
		const damage = this.enemy.useAbility(chosenAbility.name);
		const effect = this.player.takeDamage(damage);

		utils.clearLog()
		this.display()

		if(effect.dodge)
			utils.log('['+ this.player.name +'] uniknął ' + chosenAbility.name + ' (' + Math.floor(effect.damage) + ') obrażeń.')
		else
			utils.log('['+ this.enemy.name +'] zadał ' + Math.floor(effect.damage) + ' obrażeń.')
		
		if(this.player.health <= 0) {
			this.player.die();
			this.over = true; 
		}
	}

	isOver() {
		return this.over;
	}

	setOnEnd(callback) {
		this.onEnd = callback;
	}
}

module.exports = Fight;
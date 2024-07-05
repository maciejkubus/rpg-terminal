const utils = require('./utils');

const npcs = {
	potionMaker: {
		name: "Roman",
		description: "Best potions in this village.",
		getOptions(player, callback) {
			return [
				{
					key: '1',
					name: 'Kup Health Potion x1 (10g)',
					do: () =>  {
						if(player.pay(10)) {
							player.inventory.increasQuantity('Health Potion', 1)
							utils.log('>> Zakupiono 1x Health Potion')
						}
						else {
							utils.log('>> Brak wystarczających środków')
						}
					} 
				},
				{
					key: '2',
					name: 'Kup Mana Potion x1 (10g)',
					do: () =>  {
						if(player.pay(10)) {
							player.inventory.increasQuantity('Mana Potion', 1)
							utils.log('>> Zakupiono 1x Mana Potion')
						}
						else {
							utils.log('>> Brak wystarczających środków')
						}
					} 
				},
			]
		}
	}
}

module.exports = npcs;
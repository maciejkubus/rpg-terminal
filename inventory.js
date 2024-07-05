const utils = require("./utils");

class Inventory {
	items = []

	constructor(items = []) {
		items.forEach(item => {
			this.addItem(item.name, item.quantity, item.callback, item.description)
		})
	}

	addItem(name, quantity, callback, description = "") {
		const item = this.getItem(name)
		if(item) {
			item.quantity = quantity;
		} else {
			this.items.push({
				name,
				quantity,
				callback,
				description
			})
		}
	}

	getItem(name) {
		return this.items.find(i => i.name == name)
	}

	setQuantity(name, quantity) {
		const item = this.getItem(name);
		item.quantity = quantity;
		if(item.quantity < 0) 
			item.quantity = 0;
		return item;
	}

	increasQuantity(name, quantity) {
		const item = this.getItem(name);
		item.quantity += quantity;
		return item;
	}

	setCallback(name, callback) {
		const item = this.getItem(name);
		item.callback = callback;
		return item;
	}

	useItem(name) {
		const item = this.getItem(name);
		if(this.quantity > 0) {
			this.setQuantity(name, item.quantity - 1)
			item.callback();
			return true;
		} else {
			return false;
		}
	}

	save() {
		return this.items.map(item => ({ name: item.name, quantity: item.quantity }))
	}

	load(items) {
		items.forEach(item => {
			this.addItem(item.name, item.quantity, () => {})
		})
	}

	getOptions(callback) {
		return this.items.map((item, index) => ({
			key: index + 1,
			name: utils.getSpaces(64, item.name + ' x' + item.quantity, item.description),
			do: () => {
				item.callback();
				callback()
			},
		}))
	}
}

module.exports = Inventory;
'use strict';

const rx = require('rx');



class Session {

	constructor() {
		this._down = new rx.Subject();
	}

	subscribe(observer) {
		return this._down.subscribe(observer);
	}

	onNext(e) {

	}

	close() {

	}

}


module.exports = Session;

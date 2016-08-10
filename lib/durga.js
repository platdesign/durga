'use strict';

const Joi = require('joi');
const Session = require('./session');



class Durga {

	constructor() {
		this._routes = [];
	}

	createSession() {
		return new Session();
	}

	route(config) {

		Joi.validate(config, Joi.object().required().keys({
			route: Joi.string().required(),
			handler: Joi.func().required()
		}), {}, (err, result) => {
			if(err) {
				throw err;
			}
			this._routes.push(result);
		});

	}

}



module.exports = function() {
	return new Durga();
};

'use strict';

const CWD = process.cwd();
const Code = require('code');
const expect = Code.expect;
const Durga = require(CWD);




describe('route(config)', () => {

	let durga;
	beforeEach(() => durga = new Durga());

	it('should throw error on missing config', () => {

		expect(() => durga.route())
			.to.throw(Error);

	});

	it('should throw error on missing route', () => {

		expect(() => durga.route({
			handler: () => true
		}))
			.to.throw(Error);

	});

	it('should throw error on missing handler', () => {

		expect(() => durga.route({
			route: 'test'
		}))
			.to.throw(Error);

	});


	it('should add route to _routes array', () => {

		durga.route({
			route: 'test',
			handler: () => true
		});

		expect(durga._routes)
			.to.have.length(1);

	});

});

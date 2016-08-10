'use strict';

const CWD = process.cwd();
const path = require('path');
const Code = require('code');
const expect = Code.expect;
const Durga = require(CWD);
const Session = require(path.join(CWD, 'lib', 'session'));




describe('session', () => {

	describe('lifecycles', () => {

		let durga;
		let session;
		before(() => durga = Durga());

		it('durga.createSession() should return a new session instance', () => {

			session = durga.createSession();

			expect(session)
				.to.be.an.object()
				.to.be.instanceOf(Session);

		});

		it('session should have method subscribe()', () => expect(session.subscribe).to.be.a.function());
		it('session should have method close()', () => expect(session.close).to.be.a.function());
		it('session should have method onNext()', () => expect(session.onNext).to.be.a.function());






		describe('subscribe()', () => {

			let sub;

			it('should return object', () => {

				sub = session.subscribe((e) => console.log(e));

				expect(sub)
					.to.be.an.object();

			});


			it('sub should have method dispose()', () => {

				expect(sub.dispose)
					.to.be.a.function();

			});

		});


	});

});

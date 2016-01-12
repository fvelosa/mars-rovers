'use strict';

var move = require('./move');
var expect = require('chai').expect;

describe('Test moves', function () {

	it('Test rotateLeft =>', function () {
		var obj = {
			x: 0,
			y: 0,
			d: 'N'
		}

		move.rotateLeft(obj)
		expect(obj.d).to.equal('W');
		move.rotateLeft(obj)
		expect(obj.d).to.equal('S');
		move.rotateLeft(obj)
		expect(obj.d).to.equal('E');
		move.rotateLeft(obj)
		expect(obj.d).to.equal('N');
	});

	it('Test rotateRight =>', function () {
		var obj = {
			x: 0,
			y: 0,
			d: 'N'
		}

		move.rotateRight(obj)
		expect(obj.d).to.equal('E');
		move.rotateRight(obj)
		expect(obj.d).to.equal('S');
		move.rotateRight(obj)
		expect(obj.d).to.equal('W');
		move.rotateRight(obj)
		expect(obj.d).to.equal('N');
	});

	it('Test moves =>', function () {
		var obj = {
			x: 0,
			y: 0,
			d: 'N'
		}

		move.move(obj)
		expect(obj.x).to.equal(0);
		expect(obj.y).to.equal(1);
		expect(obj.d).to.equal('N');

		move.rotateRight(obj)
		expect(obj.d).to.equal('E');

		move.move(obj)
		expect(obj.x).to.equal(1);
		expect(obj.y).to.equal(1);
		expect(obj.d).to.equal('E');

		move.rotateRight(obj)
		expect(obj.d).to.equal('S');

		move.move(obj)
		expect(obj.x).to.equal(1);
		expect(obj.y).to.equal(0);
		expect(obj.d).to.equal('S');

		move.rotateRight(obj)
		expect(obj.d).to.equal('W');

		move.move(obj)
		expect(obj.x).to.equal(0);
		expect(obj.y).to.equal(0);
		expect(obj.d).to.equal('W');

		move.rotateRight(obj)
		expect(obj.d).to.equal('N');

		move.move(obj)
		expect(obj.x).to.equal(0);
		expect(obj.y).to.equal(1);
		expect(obj.d).to.equal('N');
	});

	it('Test moveStep =>', function () {
		var obj = {
			x: 0,
			y: 0,
			d: 'N'
		}

		move.moveStep(obj, 'M')
		expect(obj.x).to.equal(0);
		expect(obj.y).to.equal(1);
		expect(obj.d).to.equal('N');

		move.moveStep(obj, 'R')
		expect(obj.d).to.equal('E');

		move.moveStep(obj, 'M')
		expect(obj.x).to.equal(1);
		expect(obj.y).to.equal(1);
		expect(obj.d).to.equal('E');

		move.moveStep(obj, 'R')
		expect(obj.d).to.equal('S');

		move.moveStep(obj, 'M')
		expect(obj.x).to.equal(1);
		expect(obj.y).to.equal(0);
		expect(obj.d).to.equal('S');

		move.moveStep(obj, 'R')
		expect(obj.d).to.equal('W');

		move.moveStep(obj, 'M')
		expect(obj.x).to.equal(0);
		expect(obj.y).to.equal(0);
		expect(obj.d).to.equal('W');

		move.moveStep(obj, 'R')
		expect(obj.d).to.equal('N');

		move.moveStep(obj, 'M')
		expect(obj.x).to.equal(0);
		expect(obj.y).to.equal(1);
		expect(obj.d).to.equal('N');

		move.moveStep(obj, 'L')
		expect(obj.d).to.equal('W');

		move.moveStep(obj, 'M')
		expect(obj.x).to.equal(-1);
		expect(obj.y).to.equal(1);
		expect(obj.d).to.equal('W');
	});

	it('Test doRoute =>', function () {
		var obj = {
			x: 0,
			y: 0,
			d: 'N'
		}
		
		var route = 'MRMLLMLMR'

		move.doRoute(obj, route)
		
		expect(obj.x).to.equal(0);
		expect(obj.y).to.equal(0);
		expect(obj.d).to.equal('W');
	});
})
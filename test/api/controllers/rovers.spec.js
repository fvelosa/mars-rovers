'use strict';

var async = require('async');
var request = require('supertest');
var should = require('should');
//var should = require('chai').should;
var expect = require('chai').expect;
var config = require('../../../config.js');
var address = config.protocol + '://' + config.host + ':' + config.port;
//var starting = false;

describe('Integration Tests', function () {
	this.timeout(10000); // Maximum timeout for tests

	// Checks if the server is running, should be included in the script
	//	before(function (done) {
	//		request(address)
	//			// Puts primes in the cache
	//			.get('/rovers')
	//			.end(function (error, res) {
	//				if (error) {
	//					console.error('Server is not started, start using \'gulp server\'');
	//				} else if (res.statusCode !== 200) {
	//					console.error(res.status, res.message);
	//					done();
	//				} else {
	//					starting = false;
	//					console.log('Adding numbers to cache');
	//					// Waits for prime queue to fill the cache, delete in future tests
	//					setTimeout(done, 1000);
	//				}
	//			});
	//	});

	it('respond with empty array', function (done) {
		request(address)
			.get('/rovers')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200)
			.expect([])
			.end(function (err) {
				should.not.exist(err);
				done();
			});
	});

	it('creates object and gets object', function (done) {
		var rover = {
			x: 0,
			y: 0,
			d: 'N'
		}

		var id

		async.series([
        	function (cb) {
				request(address)
					.post('/rovers')
					.send(rover)
					.expect('Content-Type', /json/)
					.expect(200)
					.end(function (err, res) {
						should.not.exist(err);

						id = res.body.id

						expect(res.body.x).to.eq(0)

						cb()
					})
			},
			function (cb) {
				request(address)
					.get('/rovers/' + id)
					.set('Accept', 'application/json')
					.expect('Content-Type', /json/)
					.expect(200)
					.end(function (err, res) {
						should.not.exist(err);

						expect(res.body.x).to.eq(0)
						expect(res.body.id).to.eq(id)

						cb()
					})
			},
			function (cb) {
				request(address)
					.delete('/rovers/' + id)
					.expect(200)
					.end(function (err) {
						should.not.exist(err);

						cb()
					})
			},
			function (cb) {
				request(address)
					.get('/rovers')
					.set('Accept', 'application/json')
					.expect('Content-Type', /json/)
					.expect(200)
					.expect([])
					.end(function (err) {
						should.not.exist(err);

						cb()
					});
			}], done)
	});
	
	it('respond with empty array', function (done) {
		request(address)
			.get('/routes')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200)
			.expect([])
			.end(function (err) {
				should.not.exist(err);
				done();
			});
	});

	it('creates object and gets object', function (done) {
		var rover = {
			x: 0,
			y: 0,
			d: 'N'
		}

		var route = {
			moves: 'RMLMRM'
		}

		var rover_id, route_id

		async.series([
			// Creates rover
        	function (cb) {
				request(address)
					.post('/rovers')
					.send(rover)
					.expect('Content-Type', /json/)
					.expect(200)
					.end(function (err, res) {
						should.not.exist(err);

						rover_id = res.body.id

						expect(res.body.x).to.eq(0)

						cb()
					})
			},
			// Checks rover
			function (cb) {
				request(address)
					.get('/rovers/' + rover_id)
					.set('Accept', 'application/json')
					.expect('Content-Type', /json/)
					.expect(200)
					.end(function (err, res) {
						should.not.exist(err);

						expect(res.body.x).to.eq(0)
						expect(res.body.id).to.eq(rover_id)

						cb()
					})
			},
			// Creates route
			function (cb) {
				request(address)
					.post('/rovers/' + rover_id + '/routes')
					.send(route)
					.expect('Content-Type', /json/)
					.expect(200)
					.end(function (err, res) {
						should.not.exist(err);

						route_id = res.body.id

						expect(res.body.moves).to.eq(route.moves)

						cb()
					})
			},
			// Checks route
			function (cb) {
				request(address)
					.get(/routes/ + route_id)
					.set('Accept', 'application/json')
					.expect('Content-Type', /json/)
					.expect(200)
					.end(function (err, res) {
						should.not.exist(err);

						expect(res.body.moves).to.eq(route.moves)
						expect(res.body.id).to.eq(route_id)
						expect(res.body.rover_id).to.eq(rover_id)

						cb()
					})
			}], done)
	});
})
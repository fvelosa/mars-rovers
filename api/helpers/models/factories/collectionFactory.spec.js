'use strict';

var collectionFactory = require('./CollectionFactory');
var expect = require('chai').expect;

describe('Test the prime Factory', function () {
	var collection, collection1

	beforeEach(function () {
		collection = collectionFactory()
		collection1 = collectionFactory()
	})

	it('should be empty to strat with', function () {
		expect(collection.getAll().length).to.equal(0);
	});

	it('should have one value after new', function () {
		collection.new({
			value: 'test'
		})

		expect(collection.getAll().length).to.equal(1);
	});

	it('should have 2 objects after 2 new', function () {
		collection.new({
			value: 'test1'
		})
		collection.new({
			value: 'test2'
		})

		expect(collection.getAll().length).to.equal(2);
	});

	it('should get the right value', function () {
		collection.new({
			value: 'test1'
		})
		var index = collection.new({
			value: 'test2'
		}).id
		collection.new({
			value: 'test3'
		})

		expect(collection.get(index).value).to.equal('test2');
	});

	it('should delete from the list', function () {
		collection.new({
			value: 'test1'
		})
		var index2 = collection.new({
			value: 'test2'
		}).id
		var index3 = collection.new({
			value: 'test3'
		}).id
		collection.new({
			value: 'test4'
		})

		collection.delete(index3)

		expect(collection.get(index2).value).to.equal('test2');
		expect(collection.getAll().length).to.equal(3);
	});

	it('update should change an attribute of the object', function () {
		collection.new({
			value: 'test1'
		})
		var index2 = collection.new({
			value: 'test2'
		}).id
		collection.new({
			value: 'test3'
		})

		collection.update(index2, 'value', 'new_test')

		expect(collection.get(index2).value).to.equal('new_test');
		expect(collection.getAll().length).to.equal(3);
	});

	it('test memory isolation', function () {
		collection.new({
			value: 'test1'
		})
		var index2 = collection.new({
			value: 'test2'
		}).id

		collection1.new({
			value: 'collection1-1'
		})
		var index1_2 = collection1.new({
			value: 'collection1-2'
		}).id

		expect(collection.get(index2).value).to.equal('test2');
		expect(collection1.get(index1_2).value).to.equal('collection1-2');
		expect(collection.getAll().length).to.equal(2);
	});

	it('test filter', function () {
		collection.new({
			value: 'test',
			status: 'completed'
		})
		collection.new({
			value: 'test1',
			status: 'ongoing'
		})
		collection.new({
			value: 'test2',
			status: 'planned'
		})

		var set = collection.search({
			status: 'ongoing'
		})

		expect(set.length).to.equal(1);
		expect(set[0].value).to.equal('test1');
		expect(set[0].status).to.equal('ongoing');

		set = collection.search({
			status: 'completed'
		})

		expect(set.length).to.equal(1);
		expect(set[0].value).to.equal('test');
		expect(set[0].status).to.equal('completed');
	});
});
'use strict';

var collectionFactory = require('./factories/collectionFactory')

var rovers = collectionFactory()

module.exports = {
	getAll: getAll,
	get: get,
	new: create,
	delete: remove,
	move: move
}

function move(id, movList) {
	rovers.update(movList)
}

function getAll() {
	var response = rovers.getAll()

	console.log('rovers getAll response =>', response)

	return response
}

function create(obj) {
	console.log('rovers POST body', obj)

	var response = rovers.new(obj)

	console.log('rovers POST response', response)
	return response
}

function get(id) {
	console.log('rovers get id', id)

	var response = rovers.get(id)

	console.log('rovers get response', response)
	return response
}

function remove(id) {
	console.log('rovers delete id', id)

	var response = rovers.delete(id)

	console.log('rovers delete response', response)
	return response
}
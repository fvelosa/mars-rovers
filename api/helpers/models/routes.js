'use strict';

var collectionFactory = require('./factories/collectionFactory')
var move = require('./move')
var rovers = require('./rovers')

var routes = collectionFactory()

module.exports = {
	getAll: getAll,
	get: get,
	new: create
}

function getAll() {
	var response = routes.getAll()

	console.log('routes getAll response =>', response)

	return response
}

function create(id, obj) {
	console.log('routes POST id,obj =>', id, obj)

	obj.rover_id = id

	var response = routes.new(obj)
	var rover = rovers.get(obj.rover_id)
	
	move.doRoute(rover, obj.moves)

	console.log('routes POST response', response)
	return response
}

function get(id) {
	console.log('routes get id', id)

	var response = routes.get(id)

	console.log('routes get response', response)
	return response
}
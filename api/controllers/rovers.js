'use strict';

var rovers = require('../helpers/models/rovers')

module.exports = {
	getAll: getAll,
	get: get,
	post: post,
	delete: deleteRover
}

function getAll(req, res) {
	console.log('rovers ctrl getAll =>')

	res.json(rovers.getAll())
}

function post(req, res) {
	console.log('rovers ctrl post body =>', req.swagger.params.rover.value)

	res.json(rovers.new(req.swagger.params.rover.value))
}

function get(req, res) {
	console.log('rovers ctrl get id =>', req.swagger.params.id.value)

	res.json(rovers.get(req.swagger.params.id.value))
}

function deleteRover(req, res) {
	console.log('rovers ctrl delete id =>', req.swagger.params.id.value)

	if (rovers.delete(req.swagger.params.id.value)) {
		res.status('200').send()
	} else {
		res.status('404').send() // Not found
	}
}
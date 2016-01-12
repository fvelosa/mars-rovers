'use strict';

var routes = require('../helpers/models/routes')

module.exports = {
	getAll: getAll,
	post: post,
	get: get
}

function getAll(req, res) {
	console.log('routes ctrl getAll =>')

	res.json(routes.getAll())
}

function post(req, res) {
	console.log('routes ctrl post id, body =>', req.swagger.params.id.value, req.swagger.params.route.value)

	res.json(routes.new(req.swagger.params.id.value, req.swagger.params.route.value))
}

function get(req, res) {
	console.log('routes ctrl get id =>', req.swagger.params.id.value)

	res.json(routes.get(req.swagger.params.id.value))
}

//function deleteRover(req, res) {
//	console.log('routes ctrl delete id =>', req.swagger.params.id.value)
//
//	if (routes.delete(req.swagger.params.id.value)) {
//		res.status('200').send()
//	} else {
//		res.status('404').send() // Not found
//	}
//}
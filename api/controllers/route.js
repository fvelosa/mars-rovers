'use strict';

var routes = require('../helpers/models/routes')

module.exports = {
	get: get,
	delete: deleteRover
}

function get(req, res) {
	res.json(routes.get(req.swagger.params.id))
}

function deleteRover(req, res) {
	res.json(routes.delete(req.swagger.params.id))
}
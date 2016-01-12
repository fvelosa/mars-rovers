'use strict';

module.exports = {
	doRoute: doRoute,
	moveStep: moveStep,
	rotateRight: rotateRight,
	rotateLeft: rotateLeft,
	move: move
}

function doRoute(obj, route) {
	var i
	var moves = route.split('')
	
	console.log('Move route =>', route)
	
	console.log('Move moves =>', moves)

	for (i = 0; i < moves.length; i++) {
		console.log('Move => ', moves[i])
		
		obj = moveStep(obj, moves[i])
	}
}

function moveStep(obj, movement) {
	switch (movement) {
	case 'R':		
		return rotateRight(obj)
	case 'L':		
		return rotateLeft(obj)
	case 'M':
		return move(obj)
	default:
		throw 'Wrong move'
	}
}

function rotateRight(obj) {
	switch (obj.d) {
	case 'N':
		obj.d = 'E'
		return obj
	case 'E':
		obj.d = 'S'
		return obj
	case 'S':
		obj.d = 'W'
		return obj
	case 'W':
		obj.d = 'N'
		return obj
	default:
		throw 'Direcction is not valid'
	}
}

function rotateLeft(obj) {
	switch (obj.d) {
	case 'N':
		obj.d = 'W'
		return obj
	case 'E':
		obj.d = 'N'
		return obj
	case 'S':
		obj.d = 'E'
		return obj
	case 'W':
		obj.d = 'S'
		return obj
	default:
		throw 'Direcction is not valid'
	}
}

function move(obj) {
	switch (obj.d) {
	case 'N':
		obj.y++
			return obj
	case 'E':
		obj.x++
			return obj
	case 'S':
		obj.y--
			return obj
	case 'W':
		obj.x--
			return obj
	default:
		throw 'Direcction is not valid'
	}
}
'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users');
	var notes = require('../../app/controllers/notes');

	// Notes Routes
	app.route('/notes')
		.get(users.requiresLogin, notes.hasAuthorization, notes.list)
		.post(users.requiresLogin, notes.hasAuthorization, notes.create);

	app.route('/notes/:noteId')
		.get(users.requiresLogin, notes.hasAuthorization, notes.read)
		.put(users.requiresLogin, notes.hasAuthorization, notes.update)
		.delete(users.requiresLogin, notes.hasAuthorization, notes.delete);

	// Finish by binding the Note middleware
	app.param('noteId', notes.noteByID);
};
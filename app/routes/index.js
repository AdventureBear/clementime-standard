'use strict';

var	commentCtrlr = require(process.cwd() + '/app/controllers/commentCtrlr.server.js');
var lessonController = require(process.cwd() + '/app/controllers/lessonController.server.js');

module.exports = function (app) {
	//Index route
	app.route('/')
		.get(function (req, res) {
			res.render('index');
		});

	//API routes
	app.route('/api/comments')
		.get(commentCtrlr.list)
		.delete(commentCtrlr.remove)
		.post(commentCtrlr.create);

	app.route('/api/lessons')
		.get(lessonController.list);


	app.route('/')
		.get(function (req, res) {
			res.sendFile(path + '/public/file.html');
		});





	//Exception handling for unspecified routes
	app.route('*')
		.get(function (req, res) {
			res.status(404);
			res.send('Page not found.');
		});
};

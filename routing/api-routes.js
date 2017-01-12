// Dependencies
// =============================================================
// var express = require("express");
// var bodyParser = require("body-parser");
// var path = require("path");

// // Sets up the Express App
// // =============================================================
// var app = express();
// var PORT = process.env.PORT || 3000;

// // Sets up the Express app to handle data parsing
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// var app = require('./../server.js');

var friends = require('./../data/friends.js');

// function friendCalculation(user, friendList) {
// 	var userScores = user.scores;
// 	for(var i=0; i < friend)
// }
module.exports = function(app) {
	  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------
	// console.log(friends[0]);
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});

	app.post('/api/friends', function(req, res) {
		// console.log(req.body);
		var minDifference = 10000;
		// totaldifference between user and friend for all questions.
		var totalDifference = 0;
		// difference for one question.
		var quesDifference = 0;
		function friendFinder(user, friends) {
			for(var i=0; i < friends.length; i++) {
				totalDifference = 0;
				for(var j=0; j < user.scores.length; j++) {
					questionDifference = Math.abs(~~(user.scores[j])-~~(friends[i].scores[j]));
					totalDifference+=questionDifference;
				}
				// console.log('total difference for friend ' +i+ 'is ' + totalDifference);
				// if it is the smallest minimum then it is your best friend!
				if(totalDifference<minDifference) {
					minDifference = totalDifference;
					var locationOfBestMatch = i;
				}
				// console.log('Best match is ' + bestFriend);

			}
			// console.log(locationOfBestMatch)
			res.json(friends[locationOfBestMatch]);
		}
		friendFinder(req.body, friends);
		friends.push(req.body);
		// console.log(friends);
	});
};


// // Create New Characters - takes in JSON input
// app.post("/api/friends", function(req, res) {
//   var newcharacter = req.body;
//   newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

//   console.log(newcharacter);

//   characters.push(newcharacter);

//   res.json(newcharacter);
// });

// app.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// });

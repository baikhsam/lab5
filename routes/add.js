var data = require("../data.json");

exports.addFriend = function(request, response) {   
	// Your code goes here
	name = request.query.name;
	desc = request.query.description;
	newbie = { 
		"name": name,
		"description": desc,
		"imageURL": 'http://lorempixel.com/400/400/people'
	};	
	console.log(newbie);
	response.render('index', data);
	data.friends.push(newbie);
};

/*
 * GET Users listing.
 */
var Users = require('../data/models/User');
var Partners = require('../data/models/Partner');

module.exports = function(app){
	app.post('/people/auth', function(req, res, next){
		console.log(req.body);
		Users.findOne(
				{ username: req.body.username }, function(err, user) {
			    if (err) { 
			    	console.log("Hi from 2")	
			    	res.json({success:0}); 
			    }
			    if (!user) { 
			    	console.log("Hi from 3")
			    	res.json({success:0}); 
			    } else{
			   		user.comparePassword(req.body.password, function(err, isMatch) {
				      if (err) {
				      	console.log("Hi from 4")
				      	res.json({success:0});
				      }
				      if(isMatch) {
				      		console.log("Hi from 5")
				      		res.json({
				      			success: 1,
				      			user: user
				      		})
				      } else {
				      		console.log("Hi from 6")
				        	res.json({success:"wrong password"});
				     }

				});
			}
		});
	});

	app.post('/partners/auth', function(req, res, next){
		Partners.findOne(
				{ username: req.body.username }, function(err, user) {
			    if (err) { 
			    	res.json({success:0}); 
			    }
			    if (!user) { 
			    	res.json({success:0}); 
			    } else{
			   		user.comparePassword(req.body.password, function(err, isMatch) {
				      if (err) {
				      	res.json({success:0});
				      }
				      if(isMatch) {
				      		res.json({
				      			success: 1,
				      			user: user
				      		})
				      } else {
				        	res.json({success:"wrong password"});
				     }

				});
			}
		});
	});
}
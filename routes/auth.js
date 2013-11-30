
/*
 * GET Partners listing.
 */
var Partners = require('../data/models/Partner');


module.exports = function(app){
	app.post('/people/auth', function(req, res, next){
		console.log(req.body);
		Partners.findOne(
				{ username: req.body.username }, function(err, user) {
			    console.log("Hi from 1")
			    if (err) { 
			    	console.log("Hi from 2")	
			    	res.json({succes:"error"}); 
			    }
			    if (!user) { 
			    	console.log("Hi from 3")
			    	res.json({succes:"not found"}); 
			    }
			    user.comparePassword(req.body.password, function(err, isMatch) {
			      if (err) {
			      	console.log("Hi from 4")
			      	res.json({succes:"error"});
			      }
			      if(isMatch) {
			      		console.log("Hi from 5")
			      		res.json({
			      			success: true,
			      			user: user
			      		})
			      } else {
			      		console.log("Hi from 6")
			        	res.json({success:"wrong password"});
			     }
			});
	})
	})
}
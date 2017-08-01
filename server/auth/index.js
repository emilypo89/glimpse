const express = require('express');
const router = express.Router();
const User = require('../db/models/user');
const passport = require('../passport');

// this route is just used to get the user basic info
router.get('/user', (req, res, next) => {
	console.log(req.user)
	if (req.user) {
		return res.json({ user: req.user })
	} else {
		return res.json({ user: null })
	}
});

router.post('/login', passport.authenticate('local'), (req, res) => {
	// req.user
	// make a query & populate group to mongo based off of req.user, in the callback
		// send back the response
	User.find({_id: req.user._id}).populate("groups").exec(function(err, doc) {
		if (err) {
			res.send(err);
		}
		else {
			console.log("this is the response doc")
			console.log(doc);
			console.log("user's groups");
			console.log(doc[0].groups[0]);
			// res.send(doc);
			res.json({ user: { email: doc[0].email, _id: doc[0]._id, groups: doc[0].groups } })
		}
	})

});

router.post('/logout', (req, res) => {
	if (req.user) {
		req.session.destroy()
		res.clearCookie('connect.sid') // clean up!
		return res.json({ msg: 'logging you out' })
	} else {
		return res.json({ msg: 'no user to log out!' })
	}
});

router.post('/signup', (req, res) => {
	const { email, password, firstName, lastName } = req.body
	// ADD VALIDATION
	const newUser = new User({ email, password, firstName, lastName })
	newUser.save((err, savedUser) => {
		if (err) return res.json(err)
		return res.json(savedUser)
	})
});

router.post('/addGroup', (req, res) => {
	console.log("add group req body");
	console.log(req.body);
	User.findOneAndUpdate({_id: req.body.userID}, 
	{
		$push: {groups: req.body.groups}
	}, function(err, doc) {
		if (err){
			console.log(err);
		}
		else {
			res.send(doc);
		}
	});
});

module.exports = router;

const express = require('express');
const router = express.Router();
const Group = require('../db/models/group');


// route to group document
router.get("/api/:id", function(req, res) {
	console.log("made it to api/:id")
	Group.findOne({_id: req.params.id}).exec(function(err, doc) {
		if (err) {
			console.log(err);
		}
		else {
			console.log("docs from findOne group on server")
			console.log(doc);
			res.send(doc);
		}
	});
});

// route create/add a new event
router.post("/event", function(req, res) {
	console.log("Made it to the event post route!")
	console.log(req.body)
	Group.findOneAndUpdate({_id: req.body.id},
	{
		$push: {events: req.body.event}
	}, function(err, doc) {
		if (err) {
			console.log(err)
		}
		else {
			res.send(doc)
		}
	});
});

// route to create a new group
router.post("/group", function(req, res) {
	console.log("Made it to the group post route!");
	console.log(req.body);
	var newGroup = new Group(req.body);

	newGroup.save(function(err, doc) {
		if (err) {
			console.log(err)
		}
		else {
			res.send(doc)
		}
	});
});

// export router
module.exports = router;

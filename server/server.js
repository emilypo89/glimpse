// Include Server Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const dbConnection = require('./db'); // loads our connection to the mongo database
const passport = require('./passport');

// Create a new express app
const app = express();
// Sets an initial port. We'll use this later in our listener
const PORT = process.env.PORT || 3001;

// ===== Middleware ====
app.use(morgan('dev'));
app.use(
	bodyParser.urlencoded({
		extended: false
	})
);
app.use(bodyParser.json());
app.use(
	session({
		secret: process.env.APP_SECRET || 'this is the default passphrase',
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false,
		saveUninitialized: false
	})
);

// ===== testing middleware =====
app.use(function(req, res, next) {
	console.log('===== passport user =======')
	console.log(req.session)
	console.log(req.user)
	console.log('===== END =======')
	next()
});

// ===== Passport ====
app.use(passport.initialize());
app.use(passport.session());

// ==== if its production environment!
if (process.env.NODE_ENV === 'production') {
	const path = require('path')
	console.log('YOU ARE IN THE PRODUCTION ENV')
	app.use('/static', express.static(path.join(__dirname, '../build/static')));
	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, '../build/'))
	});
}

/* Express app ROUTING */
app.use('/auth', require('./auth'));
app.use('/group', require('./group'));

// ====== Error handler ====
app.use(function(err, req, res, next) {
	console.log('====== ERROR =======')
	console.error(err.stack)
	res.status(500)
});


// Starting our express server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');
var cookieParser = require('cookie-parser');
var bodyParser     = require('body-parser');
var session = require('express-session');
var morgan = require('morgan');
var port     = process.env.PORT || 8080;
var db = require('./config/db');

mongoose.connect(db.url);

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({ secret: 'haathigodaroars' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session


app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/views'));

require('./config/passport')(passport);
require('./app/routes.js')(app, passport);


// start app ===============================================
app.listen(port);										// startup our app at http://localhost:8080
console.log('Magic happens on port ' + port); 			// shoutout to the user
// = module.exports = app; 						// expose app
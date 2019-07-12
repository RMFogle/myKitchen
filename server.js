// Dependencies
// ============
var db             = require('./models/index')
var express        = require('express');
var path           = require('path');
var session        = require('express-session'); 
var passport 			 = require("./config/passport");
var config				 = require("./config/extra-config");
// Express settings
// ================


// instantiate our app
var app            = express();
var PORT           = process.env.PORT || 3000;

// Requiring our models for syncing
var db = require("./models");

// view engine setup
app.set('views', path.join(__dirname, 'views'));

//set up handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var isAuth 				 = require("./config/middleware/isAuthenticated");
var authCheck 		 = require('./config/middleware/attachAuthenticationStatus');

require('./routes')(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ secret: config.sessionKey, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(authCheck);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

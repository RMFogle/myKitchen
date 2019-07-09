var express = require('express');
var router  = express.Router();

var kitchAwalkFridge_controller = require('../controllers/kitchAwalkFridge_controller');
var isAuthenticated = require("../config/middleware/isAuthenticated");

router.get('/', isAuthenticated, kitchAwalkFridge_controller.index);

router.post('/new', isAuthenticated, kitchAwalkFridge_controller.createKitchAwalkFridge);

module.exports = router;
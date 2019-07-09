var express = require('express');
var router  = express.Router();

var kitchAwalkFreeze_controller = require('../controllers/kitchAwalkFreeze_controller');
var isAuthenticated = require("../config/middleware/isAuthenticated");

router.get('/', isAuthenticated, kitchAwalkFreeze_controller.index);

router.post('/new', isAuthenticated, kitchAwalkFreeze_controller.createKitchAwalkFreezer);

module.exports = router;
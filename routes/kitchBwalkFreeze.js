var express = require('express');
var router  = express.Router();

var kitchBwalkFreeze_controller = require('../controllers/kitchBwalkFreeze_controller');
var isAuthenticated = require("../config/middleware/isAuthenticated");

router.get('/', isAuthenticated, kitchBwalkFreeze_controller.index);

router.post('/new', isAuthenticated, kitchBwalkFreeze_controller.createKitchBwalkFreezer);

module.exports = router;
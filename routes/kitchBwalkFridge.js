var express = require('express');
var router  = express.Router();

var kitchBwalkFridge_controller = require('../controllers/kitchBwalkFridge_controller');
var isAuthenticated = require("../config/middleware/isAuthenticated");

router.get('/', isAuthenticated, kitchBwalkFridge_controller.index);

router.post('/new', isAuthenticated, kitchBwalkFridge_controller.createKitchBwalkFridge);

module.exports = router;
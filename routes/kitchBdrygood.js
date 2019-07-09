var express = require('express');
var router  = express.Router();

var kitchBdrygood_controller = require('../controllers/kitchBdrygood_controller');
var isAuthenticated = require("../config/middleware/isAuthenticated");

router.get('/', isAuthenticated, kitchBdrygood_controller.index);

router.post('/new', isAuthenticated, kitchBdrygood_controller.createKitchBdryGoods);

module.exports = router;
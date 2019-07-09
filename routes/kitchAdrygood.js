var express = require('express');
var router  = express.Router();

var kitchAdrygood_controller = require('../controllers/kitchAdrygood_controller');
var isAuthenticated = require("../config/middleware/isAuthenticated");

router.get('/', isAuthenticated, kitchAdrygood_controller.index);

router.post('/new', isAuthenticated, kitchAdrygood_controller.createKitchAdryGoods);

module.exports = router;
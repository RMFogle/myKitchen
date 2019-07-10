var express = require('express');
var router  = express.Router();

var kitchAdryGood_controller = require('../controllers/kitchAdryGood_controller');
var isAuthenticated = require("../config/middleware/isAuthenticated");

router.get('/', isAuthenticated, kitchAdryGood_controller.index);

router.post('/new', isAuthenticated, kitchAdryGood_controller.createKitchAdryGoods);

module.exports = router;
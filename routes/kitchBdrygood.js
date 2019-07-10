var express = require('express');
var router  = express.Router();

var kitchBdryGood_controller = require('../controllers/kitchBdryGood_controller');
var isAuthenticated = require("../config/middleware/isAuthenticated");

router.get('/', isAuthenticated, kitchBdryGood_controller.index);

router.post('/new', isAuthenticated, kitchBdryGood_controller.createKitchBdryGoods);

module.exports = router;
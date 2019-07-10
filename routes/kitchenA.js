var express = require('express');
var router  = express.Router();

var kitchenA_controller = require('../controllers/kitchenA_controller');

router.get('/', kitchenA_controller.index);

module.exports = router;
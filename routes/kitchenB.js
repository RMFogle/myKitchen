var express = require('express');
var router  = express.Router();

var kitchenB_controller = require('../controllers/kitchenB_controller');

router.get('/', kitchenB_controller.index);

module.exports = router;
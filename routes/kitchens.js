var express = require('express');
var router  = express.Router();

var kitchens_controller = require('../controllers/kitchens_controller');

router.get('/', kitchens_controller.index);

module.exports = router;
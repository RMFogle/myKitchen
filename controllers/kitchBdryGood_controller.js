var db  = require('../models');

exports.index = function(req, res) {
  db.KitchBdryGoods.findAll({
    where: {
      UserId: req.user.id
    }
  }).then(function(dbKitchBdryGoods) {
    console.log(dbKitchBdryGoods);
    res.render('kitchBdryGoods/kitchBdryGoods', {
      layout: 'main- ',
      kitchBdryGoods: dbKitchBdryGoods
    });
  });
};

exports.createKitchBdryGoods = function(req, res) {

  console.log(req.user);
  // Add id from User onto req.body
  req.body.UserId = req.user.id;

  db.KitchBdryGoods.create(req.body).then(function(dbPost) {
    res.json(dbPost);
  });
};
var db  = require('../models');

exports.index = function(req, res) {
  db.KitchBwalkFridge.findAll({
    where: {
      UserId: req.user.id
    }
  }).then(function(dbKitchBwalkFridge) {
    console.log(dbKitchBwalkFridge);
    res.render('kitchBwalkFridge/kitchBwalkFridge', {
      layout: 'main- ',
      kitchBwalkFridge: dbKitchBwalkFridge
    });
  });
};

exports.createKitchBwalkFridge = function(req, res) {

  console.log(req.user);
  // Add id from User onto req.body
  req.body.UserId = req.user.id;

  db.KitchBwalkFridge.create(req.body).then(function(dbPost) {
    res.json(dbPost);
  });
};
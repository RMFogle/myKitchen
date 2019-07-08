var db  = require('../models');

exports.index = function(req, res) {
  db.KitchBwalkFreezer.findAll({
    where: {
      UserId: req.user.id
    }
  }).then(function(dbKitchBwalkFreezer) {
    console.log(dbKitchBwalkFreezer);
    res.render('kitchBwalkFreezer/kitchBwalkFreezer', {
      layout: 'main- ',
      kitchBwalkFreezer: dbKitchBwalkFreezer
    });
  });
};

exports.createKitchBwalkFreezer = function(req, res) {

  console.log(req.user);
  // Add id from User onto req.body
  req.body.UserId = req.user.id;

  db.KitchBwalkFreezer.create(req.body).then(function(dbPost) {
    res.json(dbPost);
  });
};
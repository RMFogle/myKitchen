var db  = require('../models');

exports.index = function(req, res) {
  db.KitchAwalkFreezer.findAll({
    where: {
      UserId: req.user.id
    }
  }).then(function(dbKitchAwalkFreezer) {
    console.log(dbKitchAwalkFreezer);
    res.render('kitchAwalkFreezer/kitchAwalkFreezer', {
      layout: 'main- ',
      kitchAwalkFreezer: dbKitchAwalkFreezer
    });
  });
};

exports.createKitchAwalkFreezer = function(req, res) {

  console.log(req.user);
  // Add id from User onto req.body
  req.body.UserId = req.user.id;

  db.KitchAwalkFreezer.create(req.body).then(function(dbPost) {
    res.json(dbPost);
  });
};
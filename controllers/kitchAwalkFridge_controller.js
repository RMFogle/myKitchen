var db  = require('../models');

exports.index = function(req, res) {
  db.KitchAwalkFridge.findAll({
    where: {
      UserId: req.user.id
    }
  }).then(function(dbKitchAwalkFridge) {
    console.log(dbKitchAwalkFridge);
    res.render('kitchen/tableA', {
      layout: 'main-Kitchen',
      kitchAwalkFridge: dbKitchAwalkFridge
    });
  });
};

exports.createKitchAwalkFridge = function(req, res) {

  console.log(req.user);
  // Add id from User onto req.body
  req.body.UserId = req.user.id;

  db.KitchAwalkFridge.create(req.body).then(function(dbPost) {
    res.json(dbPost);
  });
};
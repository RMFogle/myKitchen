var db  = require('../models');

exports.index = function(req, res) {
  //db.KitchAdryGoods.findAll({
    db.kitchenA.findAll({
    //where: {
      //UserId: req.user.id
    //}
  }).then(function(dbKitchAdryGoods) {
    console.log(dbKitchAdryGoods);
    res.send(rows);
    res.render("kitchen/tableA",{
layout: 'main-Kitchen',
    });
    //res.render('kitchAdryGoods/kitchAdryGoods', {
      //layout: 'main-Kitchen',
     // kitchAdryGoods: dbKitchAdryGoods
    //});
  });
};

exports.createKitchAdryGoods = function(req, res) {

  console.log(req.user);
  // Add id from User onto req.body
  req.body.UserId = req.user.id;

  db.KitchAdryGoods.create(req.body).then(function(dbPost) {
    res.json(dbPost);
  });
};
//var db = require('../models'); 

exports.index = function(req, res) {
  res.render('kitchen/tableB', {
    layout: "main-Kitchen",
  });
  // db.KitchenAs.findAll({
  //   where: {
  //     id: req.KitchenAs.id 
  //   }
  // }).then(function(dbKitchenAs) {
  //   console.log(dbKitchenAs); 
  //   res.render('kitchen/tableA', {
  //       layout: "main-Kitchen",
  //     });
  //   })
};


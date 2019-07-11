module.exports = function(app){

    var application = require('./routes/application');
    var kitchens = require('./routes/kitchens');
    var kitchenA = require('./routes/kitchenA');
    var kitchenB = require('./routes/kitchenB');
    var users = require('./routes/users');
    var kitchAdrygood = require('./routes/kitchAdrygood');

    

    app.use('/', application);
    app.use('/kitchens', kitchens);
    app.use('/kitchenA', kitchenA);
    app.use('/kitchenB', kitchenB);
    app.use('/users', users);
    app.use('/kitchAdrygood', kitchAdrygood);
    
}


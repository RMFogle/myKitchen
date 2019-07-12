module.exports = function(app){

    var application = require('./routes/application');
    var kitchens = require('./routes/kitchens');
    var kitchenA = require('./routes/kitchenA');
    var kitchenB = require('./routes/kitchenB');
    var users = require('./routes/users');

    

    app.use('/', application);
    app.use('/kitchens', kitchens);
    app.use('/kitchenA', kitchenA);
    app.use('/kitchenB', kitchenB);
    app.use('/users', users);
    
}


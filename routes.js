module.exports = function(app){

    var application = require('./routes/application');
    var kitchens = require('./routes/kitchens');
    var kitchenA = require('./routes/kitchenA');
    var kitchenB = require('./routes/kitchenB');
    //var users = require('./routes/users');
    //var kitchAdrygood = require('./routes/kitchAdrygood');
    //var kitchAwalkFreeze = require('./routes/kitchAwalkFreeze');
    //var kitchAwalkFridge = require('./routes/kitchAwalkFridge');
    //var kitchBdrygood = require('./routes/kitchBdrygood');
    //var kitchBwalkFreeze = require('./routes/kitchBwalkFreeze');
    //var kitchBwalkFridge = require('./routes/kitchBwalkFridge');
    

    app.use('/', application);
    app.use('/kitchens', kitchens);
    app.use('/kitchenA', kitchenA);
    app.use('/kitchenB', kitchenB);
    //app.use('/users', users);
    //app.use('/kitchAdrygood', kitchAdrygood);
    //app.use('/kitchAwalkFreeze', kitchAwalkFreeze);
    //app.use('/kitchAwalkFridge', kitchAwalkFridge);
    //app.use('/kitchBdrygood', kitchBdrygood);
    //app.use('/kitchBwalkFreeze', kitchBwalkFreeze);
    //app.use('/kitchBwalkFridge', kitchBwalkFridge);
    
}


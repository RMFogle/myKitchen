module.exports = function(app){

    var application = require('./routes/application');
    var kitchens = require('./routes/kitchens');
    var kitchenA = require('./routes/kitchenA');
    var kitchenB = require('./routes/kitchenB');
    var users = require('./routes/users');
<<<<<<< HEAD
    //var kitchAdrygood = require('./routes/kitchAdrygood');
    //var kitchAwalkFreeze = require('./routes/kitchAwalkFreeze');
    //var kitchAwalkFridge = require('./routes/kitchAwalkFridge');
    //var kitchBdrygood = require('./routes/kitchBdrygood');
    //var kitchBwalkFreeze = require('./routes/kitchBwalkFreeze');
    //var kitchBwalkFridge = require('./routes/kitchBwalkFridge');
=======
    var kitchAdrygood = require('./routes/kitchAdrygood');

>>>>>>> be59720448e1d20e89abe29c4caffd1aeb8204a0
    

    app.use('/', application);
    app.use('/kitchens', kitchens);
    app.use('/kitchenA', kitchenA);
    app.use('/kitchenB', kitchenB);
    app.use('/users', users);
<<<<<<< HEAD
    //app.use('/kitchAdrygood', kitchAdrygood);
    //app.use('/kitchAwalkFreeze', kitchAwalkFreeze);
    //app.use('/kitchAwalkFridge', kitchAwalkFridge);
    //app.use('/kitchBdrygood', kitchBdrygood);
    //app.use('/kitchBwalkFreeze', kitchBwalkFreeze);
    //app.use('/kitchBwalkFridge', kitchBwalkFridge);
=======
    app.use('/kitchAdrygood', kitchAdrygood);
>>>>>>> be59720448e1d20e89abe29c4caffd1aeb8204a0
    
}


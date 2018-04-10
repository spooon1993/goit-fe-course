const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/goit');

mongoose.connection.on('error', () => {
    console.log('check your database');
});
mongoose.connection.once('open', function() {
    // we're connected!
    console.log('all okey');

});


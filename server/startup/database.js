const config = require('config');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = function () {
  const db = 'mongodb+srv://mealvoteadmin2381:KeysToTheKingdom@meal-vote-jiwmk.mongodb.net/test?retryWrites=true';


  console.log('Connecting to MongoDB.');

  mongoose.connect(db, {
    useNewUrlParser: true
  });

  mongoose.connection.on('connected', () => console.log('Connected to MongoDB'));

  mongoose.connection.on('error', (err) => console.log('MongoDB connection error: ' + err));

  mongoose.connection.on('disconnected', () => console.log('MongoDB connection disconnected'));

  process.on('SIGINT', () => {
    mongoose.connection.close(function () {
      console.log('MongoDB connection disconnected through app termination');
      process.exit(0);
    });
  });

};

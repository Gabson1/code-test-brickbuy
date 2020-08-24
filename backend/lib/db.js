const mongoose = require('mongoose');

const connectDB = async (dbUri) => {
  try {
    await mongoose.connect(dbUri,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
      });
    console.log('MongoDB Connected');
  } catch (err) {
    console.error(`There was a problem: ${err}`);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;

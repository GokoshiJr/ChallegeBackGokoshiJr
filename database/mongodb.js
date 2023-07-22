require('dotenv').config()
const mongoose = require("mongoose");

mongoose.connection.on('open', () => {
    console.log('DB connected');
});

async function connectDb(){
    try {
      const uri = process.env.DB_URI;
      await mongoose.connect(uri, { useNewUrlParser: true });
    } catch (error) {
      console.log(error);
      process.exit(0);
    }
  }
  
module.exports = connectDb;

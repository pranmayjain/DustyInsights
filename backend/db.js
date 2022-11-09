const mongoose = require("mongoose");

// "mongodb://localhost:27017/dustyinsights?readPreference=primary&directConnection=true";
const mongoURI =
  "mongodb+srv://pranmayjain:Jain%40987@dustyinsights.mxoea21.mongodb.net/dustyinsights?retryWrites=true&w=majority";

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connected to Mongo Successfully");
  });
};

module.exports = connectToMongo;

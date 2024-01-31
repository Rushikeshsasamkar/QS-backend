const mongoose = require("mongoose");
require('dotenv').config();

const connection = mongoose.connect('mongodb+srv://bansiya55:lokesh55@live-streaming.gbcm0s3.mongodb.net/QurinomSolutions?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = {
  connection,
};
const mongoose = require("mongoose");
require('dotenv').config();

const connection = mongoose.connect('mongodb+srv://rushikeshsasamakar94:y2C56KAAK4mSJc7D@productware.ezpyhlp.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = {
  connection,
};
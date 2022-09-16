const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    unique:true,
  },
  expiry: String
});
const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
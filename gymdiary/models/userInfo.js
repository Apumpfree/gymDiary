const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserInfo = new Schema({
  name: { 
      type: String, 
      trim: true,
      required: "Please insert Name"
    },
  email: { 
      type: String, 
      unique: true,
      match: [/.+@.+\..+/, "Please enter a valid e-mail address"] 
    },
  password:{
      type: String,
      required: true,
      validate: [
        function(input) {
          return input.length >= 6;
        },
        "Password should be longer than 6 characters."
      ]
  },
  date: { 
      type: Date, 
      default: Date.now 
    },
});

const UserInfo = mongoose.model("UserInfo", UserInfo);

module.exports = UserInfo;
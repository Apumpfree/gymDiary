const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserInfo = new Schema({
    targetGroup: {
        type: String,
        required: true
    },
    targetMuscle: {
        type: String,
    },
    reps: {
        type: Number,
    },
    weight: {
        type: Number,
    },
    date: {
        type: Date,
        default: Date.now
    },
});

const UserInfo = mongoose.model("UserInfo", UserInfo);

module.exports = UserInfo;
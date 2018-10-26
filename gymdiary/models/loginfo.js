const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LogInfo = new Schema({
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

const LogInfo = mongoose.model("LogInfo", LogInfo);

module.exports = LogInfo;
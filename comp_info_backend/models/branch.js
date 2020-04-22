const mongoose = require("mongoose").set('debug', true);

const branchSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    devices: [{type: mongoose.Types.ObjectId, ref: "Device"}]
});

const Branch = mongoose.model("Branch", branchSchema);
module.exports = Branch;
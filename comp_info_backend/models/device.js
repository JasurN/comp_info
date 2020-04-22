const mongoose = require("mongoose").set("debug", true);

const deviceSchema = new mongoose.Schema(
    {
        organization: {type: mongoose.Types.ObjectId, ref: "Organization"},
        branch: {type: mongoose.Types.ObjectId, ref: "Branch"}
    }
);

const Device = mongoose.model("Device", deviceSchema);
module.exports = Device;
const mongoose = require("mongoose").set('debug', true);

const organizationSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true
        },
        devices: [{type: mongoose.Schema.Types.ObjectId, ref: "Device"}]
    }
);

const Organization = mongoose.model("Organization", organizationSchema);
module.exports = Organization;
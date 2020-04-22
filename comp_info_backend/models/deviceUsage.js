const mongoose = require("mongoose").set("debug", true);

const deviceUsage = new mongoose.Schema(
    {
        device: {type: mongoose.Types.ObjectId, ref: "Device"},
        version: {
            type: String,
            required: true
        },
        cpuTemperature: {
            type: Number,
            required: true
        },
        gpuTemperature: {
            type: Number,
            required: true
        },
        cpuWorkload: {
            type: Number,
            required: true
        },
        gpuWorkload: {
            type: Number,
            required: true
        },
        ramUsage: {
            type: Number,
            required: true
        },
        cpuUsage: {
            type: Number,
            required: true
        },
        gpuUsage: {
            type: Number,
            required: true
        },
        ramAvailable: {
            type: Number,
            required: true
        },
        isRendering: {
            type: Boolean,
            required: true
        }

    },
    {
        timestamps: true
    }
);

const DeviceUsage = mongoose.model("DeviceUsage", deviceUsage);
module.exports = DeviceUsage;
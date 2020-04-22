const db = require("../models/index");

//POST /api/deviceUsage/:device_id - add device usage
exports.addDeviceUsage = async function (request, response, next) {
    try {
        let deviceUsage = await db.DeviceUsage.create({
            device: request.params.device_id,
            version: request.body.version,
            cpuTemperature: request.body.cpuTemperature,
            gpuTemperature: request.body.gpuTemperature,
            cpuWorkload: request.body.cpuWorkload,
            gpuWorkload: request.body.gpuWorkload,
            ramUsage: request.body.ramUsage,
            cpuUsage: request.body.cpuUsage,
            gpuUsage: request.body.gpuUsage,
            ramAvailable: request.body.ramAvailable,
            isRendering: request.body.isRendering,
        });
        return response.status(201).json(deviceUsage);
    } catch (error) {
        return next(error);
    }
};

//GET /api/deviceUsage/:device_id - get device usage
exports.getDeviceUsage = async function (request, response, next) {
    try {
        let deviceUsage = await db.DeviceUsage.findById(request.params.device_id);

        return response.status(200).json(deviceUsage);
    } catch (error) {
        return next(error);
    }
};
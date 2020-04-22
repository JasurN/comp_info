const db = require("../models/index");

// POST /api/devices/:organization_id/:branch_id
exports.addDevice = async function (request, response, next) {
    try {
        let device = await db.Device.create({
            organization: request.params.organization_id,
            branch : request.params.branch_id
        });

        let foundOrganization = await db.Organization.findById(request.params.organization_id);
        foundOrganization.devices.push(device._id);
        await foundOrganization.save();

        let foundBranch = await db.Branch.findById(request.params.branch_id);
        foundBranch.devices.push(device._id);
        await foundBranch.save();

        let foundDevice = await db.Device.findById(device._id).populate("organization branch");
        return response.status(201).json(foundDevice);
    } catch(error) {
        return next(error);
    }
};
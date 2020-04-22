const db = require("../models/index");

// POST /api/branches/ - add new branch
exports.addBranch= async function(request, response, next) {
    try {
        let branch = await db.Branch.create(request.body);
        return response.status(201).json(branch);

    } catch (error) {
        return next(error);
    }
};

// GET /api/branches/ - get branches list
exports.getBranches = async function(request, response, next) {
    try {
        let branches = await db.Branch.find();
        return response.status(200).json(branches);
    } catch (error) {
        return next(error);
    }
};
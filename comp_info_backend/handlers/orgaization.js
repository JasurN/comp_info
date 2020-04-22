const db = require("../models/index");

exports.addOrganization = async function(request, response, next) {
    try {
        let organization = await db.Organization.create(request.body);
        return response.status(201).json(organization);

    } catch (error) {
        return next({status: 400, message: error.message});
    }
};

exports.getOrganizations = async function(request, response, next) {
    try {
        let organizations = await db.Organization.find();
        return response.status(200).json(organizations);
    } catch (error) {
        return next({status: 400, message: error.message});
    }
};
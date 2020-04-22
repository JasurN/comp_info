require('dotenv').config();
const jwt = require('jsonwebtoken');

exports.loginRequired = function (request, response, next) {
    try {
        const token = request.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.SECRET_KEY, function (error, decoded) {
            if (decoded) {
                return next();
            } else {
                return next({
                    status: 401,
                    message: "Please log in first"
                });
            }
        });
    } catch (error) {
        return next({status: 401, message: "Please log in first"});
    }
};

exports.ensureCorrectUser = function (request, response, next) {
    try {
        const token = request.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.SECRET_KEY, function (error, decoded) {
            if (decoded && decoded.id === request.params.id) {
                next();
            } else {
                return next({
                    status: 401,
                    message: "Unauthorized"
                });
            }
        });
    } catch {
        return next({
            status: 401,
            message: "Unauthorized"
        });
    }
};
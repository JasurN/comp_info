const db = require("../models/index");
const jwt = require("jsonwebtoken");

exports.signin = async function (request, response, next) {
    try {
        let user = await db.User.findOne({
            username: request.body.username
        });

        let {id, username} = user;
        let isMatch = await user.comparePassword(request.body.password);
        if (isMatch) {
            let token = jwt.sign(
                {
                    id,
                    username,
                },
                process.env.SECRET_KEY
            );
            return response.status(200).json({
                id,
                username,
                token
            });
        } else {
            return next({
                status: 400,
                message: "Invalid Username/Password"
            });
        }
    } catch (error) {
        return next(error);
    }
};

exports.signup = async function (request, response, next) {
    try {
        let user = await db.User.create(request.body);
        let {id, username} = user;
        let token = jwt.sign({
                id,
                username,
            },
            process.env.SECRET_KEY);
        return response.status(200).json({
            id,
            username,
            token
        })
    } catch (error) {
        if (error.code === 11000) {
            error.message = "Sorry that username and/or email is taken";
        }
        return next({
            status: 400,
            message: error.message
        });
    }
};
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchmea = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
});

// convert to hash before saving password to db
userSchmea.pre("save", async function (next) {
    try {
        if (!this.isModified("password")) {
            return next();
        }
        this.password = await bcrypt.hash(this.password, 10);
        return next();
    } catch (error) {
        return next(error);
    }
});

// compare hash value when user sign in and db password of user
userSchmea.methods.comparePassword = async function (candidatePassword, next) {
    try {
        return await bcrypt.compare(candidatePassword, this.password);
    } catch (error) {
        return next(error);
    }
};
const User = mongoose.model("User", userSchmea);

module.exports = User;
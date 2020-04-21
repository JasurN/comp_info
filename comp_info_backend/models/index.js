const mongoose = require("mongoose");
mongoose.set('debug', true); // need to disable for production
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/comp_info", {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});
module.exports.User = require("./user");
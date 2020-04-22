const mongoose = require("mongoose");
mongoose.set('debug', true); // need to disable for production
mongoose.Promise = Promise;

mongoose.connect("mongodb://localhost/comp_info", {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports.User = require("./user");
module.exports.Device = require("./device");
module.exports.Device = require("./deviceUsage");
module.exports.Organization = require("./organization");
module.exports.Branch = require("./branch");


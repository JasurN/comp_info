require("dotenv").config(); // loads all env to process.env
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const authRoutes = require("./routes/auth");
const organizationRoutes = require("./routes/organization");
const branchRoutes = require("./routes/branch");
const deviceRoutes = require("./routes/device");
const deviceUsageRoutes = require("./routes/deviceUsage");

const errorHandlers = require("./handlers/error");
const {loginRequired} = require("./middleware/auth");

const PORT = 8081;

// enable cors
app.use(cors());
app.use(bodyParser.json());


// routes for authorization
app.use("/api/auth", authRoutes);
app.use("/api/organizations", loginRequired, organizationRoutes);
app.use("/api/branches", loginRequired, branchRoutes);
app.use("/api/devices", loginRequired, deviceRoutes);
app.use("/api/deviceUsage", loginRequired, deviceUsageRoutes);

// handle invalid routes and return 404
app.use(function (req, res, next) {
    let error = new Error("Not found");
    error.status = 404;
    next(error);
});

app.use(errorHandlers);


app.listen(PORT, function () {
    console.log(`Server is starting on port ${PORT}`);
});
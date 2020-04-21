require("dotenv").config(); // loads all env to process.env
const express = require("express");
const app = express();
const cors = require("cors");

const errorHandlers = require("./handlers/error");

const PORT = 8081;

app.use(cors());

app.use(function (req, res, next) {
    let error = new Error("Not found");
    error.status = 404;
    next(error);
});

app.use(errorHandlers);


app.listen(PORT, function () {
    console.log(`Server is starting on port ${PORT}`);
});
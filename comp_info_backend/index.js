const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 8081;

app.use(cors());

app.listen(PORT, function () {
    console.log(`Server is starting on port ${PORT}`);
});
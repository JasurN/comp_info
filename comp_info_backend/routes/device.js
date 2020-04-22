const express = require("express");
const router = express.Router();
const {addDevice} = require("../handlers/device");

router.post("/:organization_id/:branch_id", addDevice);

module.exports = router;
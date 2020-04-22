const express = require("express");
const router = express.Router();
const {addDeviceUsage, getDeviceUsage} = require("../handlers/deviceUsage");

router.post("/:device_id", addDeviceUsage);
router.get("/:device_id", getDeviceUsage);
module.exports = router;
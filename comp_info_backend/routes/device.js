const express = require("express");
const router = express.Router();
const {addDevice, getAllDevices} = require("../handlers/device");

// /api/devices
router.post("/:organization_id/:branch_id", addDevice);
router.get("/", getAllDevices);
module.exports = router;
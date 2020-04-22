const express = require("express");
const router = express.Router();
const {addOrganization, getOrganizations} = require("../handlers/orgaization");

router.post("/", addOrganization);
router.get("/", getOrganizations);
module.exports = router;
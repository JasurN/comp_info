const express = require("express");
const router = express.Router();
const {addBranch, getBranches} = require("../handlers/branch");

router.post("/", addBranch);
router.get("/", getBranches);

module.exports = router;
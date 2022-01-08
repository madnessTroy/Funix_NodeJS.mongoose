// Import
const path = require("path");
// Express
const express = require("express");
// Router
const router = express.Router();
//
const rootDir = require("../util/path");

router.get("/", (req, res, next) => {
	res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;

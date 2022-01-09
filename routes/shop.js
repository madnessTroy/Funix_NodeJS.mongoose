// Import
const path = require("path");
// Express
const express = require("express");
// Router
const router = express.Router();
// path to html
const rootDir = require("../util/path");
//
const adminData = require("./admin");

router.get("/", (req, res, next) => {
	res.render("shop");
});

module.exports = router;

// Import
const path = require("path");
// Express
const express = require("express");
// Router
const router = express.Router();

router.get("/", (req, res, next) => {
	res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

module.exports = router;

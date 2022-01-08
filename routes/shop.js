// Import
// Express
const express = require("express");
// Router
const router = express.Router();

router.get("/", (req, res, next) => {
	res.send("<h1>Hello fromm Express!</h1>");
});

module.exports = router;

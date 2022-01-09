// Import
const path = require("path");
// ExpressJS
const express = require("express");
// Route
const router = express.Router();
// path to html
const rootDir = require("../util/path");

const products = [];

router.get("/add-product", (req, res, next) => {
	res.sendFile(path.join(rootDir, "views", "add-product.html"));
});
router.post("/add-product", (req, res, next) => {
	product.push({ title: req.body.title });
	res.redirect("/");
});

exports.routes = router;
exports.products = products;

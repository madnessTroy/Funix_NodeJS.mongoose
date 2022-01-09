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
	const products = adminData.products;
	res.render("shop", { prods: products, pageTitle: "Shop", path: "/" });
});

module.exports = router;

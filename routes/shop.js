// Import
const path = require("path");
// Express
const express = require("express");
// Router
const router = express.Router();
// path to html
const productsController = require("../controller/product");

router.get("/", productsController.getProduct);

module.exports = router;

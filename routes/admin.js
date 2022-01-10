// Import
const path = require("path");
// ExpressJS
const express = require("express");
// Route
const router = express.Router();
//
const productsController = require("../controller/product");

router.get("/add-product", productsController.getAddProduct);
router.post("/add-product", productsController.postAddProduct);

module.exports = router;

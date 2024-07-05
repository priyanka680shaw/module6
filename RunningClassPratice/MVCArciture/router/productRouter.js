const express = require("express");
const productController = require("../controller/productController")
const router = express.Router();
//dunmmy data

router.get("/product-list" , productController.productsList)

module.exports = router
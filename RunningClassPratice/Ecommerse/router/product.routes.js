const express = require("express")
const router = express.Router()
const productController = require("../contreller/product.controller")

router.get("/list" , productController.productList)
router.post("/createproduct" , productController.createProduct)

module.exports = router;

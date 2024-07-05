
const productModel = require("../model/productModel")


const productsList =  (req , res)=>{
    const productsList = productModel.getProducts();
    console.log(productsList)
    res.json({
        status : "true",
        results : productsList
    })
}

const productController = {productsList}
module.exports = productController;
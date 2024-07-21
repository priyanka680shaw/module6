const userMoodel = require("../model/user.module")
const productList = async (req ,res)=>{
    //instead of body use header here which is industry pratice like api call karte hai na header me key value pass karte hai berear ke sathe wahi kr rahe hai  
   // const token = req.body.token; console.log(token);
   const token = req.headers ; console.log(token)
    const isValidUser = await userMoodel.findOne({token : token})
    if(!isValidUser){
       return  res.status(401).json({
            status : false,
            message  : "User not found "
        })
    }
    console.log("token"  , token)
    res.status(200).json({
        status : true,
        message  : "user exist ",
        token  :token 
    })

}

const createProduct = async(req , res)=>{
    res.json({
        status  : true , 
        message  :"Product creation successfully !"
    })
}

const productController = {
    productList , createProduct
}

module.exports = productController;
const userModel = require("../model/user.module")
const { v4: uuidv4 } = require('uuid');
const login = async (req , res)=>{
    try{
        const userExist = await userModel.findOne({email : req.body.email}) //findone method use to find first matching request  
        console.log("useEsist Login" , userExist , "pass" , req.body.password)
        if(!userExist){
            res.json({
                status : "true",
                message  :"Invalid user email address"
             })
        }
        if(userExist.password !== req.body.password){
            return res.status(400).json({
                status : "false",
                message : "Invalid user Email And Password !"
            })
        }
       //cheack user  is loged in or not for that add a token using uuid for token and saved it in to DB 
            res.status(200).json({
                status : "true",
                message  :"Your Profile is matched !",
                token : userExist.token,
             })
             const token = uuidv4()
             console.log(token)
             //update in db token id if user login , after getting the token id usre will able to prooceed to the product list  
        const update = await userModel.findByIdAndUpdate(userExist._id , {$set : {token}}) 
        console.log("update" , update)
    
    }
    catch(err){
        console.log("login error" , err)
    }
}

const singUp = async (req ,res)=>{
    console.log(req.body)
   // const newlyInserted = await userModel.create(req.body)
    try{
        const newlyInserted = await userModel.create(req.body)
    res.json({
        status : "true",
        message  :"Singup called!"
    })
    }
    catch(err){
        console.log("User Sing up Error !" , err)
    }
    
}

const userController = {
    login , singUp
}

module.exports = userController
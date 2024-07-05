const userRegister = (req , res)=>{
    res.json({
        status : "successfully Reigster !",
        message : "Register Api Callesd"
    })
};
const userLogin =  (req , res)=>{
    const param = (req.params.name)
    res.json({
        status : "successfully Login !",
        message : "Login Api Callesd",
        user : `Welcome ${param}`
    })

}

const userController = {
    userRegister, 
    userLogin
}

module.exports = userController;  
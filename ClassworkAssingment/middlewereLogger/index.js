const express = require("express");
const app = express()
/***********************/
//logging middlewere
function loggingMiddldewere(req , res ,next){
    console.log(`REquest Method : ${req.method}`)
    console.log(`Request Url : ${req.url}`);
    console.log(`Request Time : ${new Date()}`)
    next();
}
/***********************/
app.use(loggingMiddldewere)
app.get("/" , (req , res)=>{
    res.json({
        status : true,
        message : "Logging Api called"
    })
})
const port = 4500;
app.listen(port , (req , res)=>{
    console.log("Server is created on port" , port);
})
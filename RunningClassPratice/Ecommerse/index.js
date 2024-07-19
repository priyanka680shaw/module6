const express = require("express");
const app = express()
const mongooes = require("mongoose");
const dotenv = require("dotenv")
const port = 2000
//*********************************************************//
//DB Connection 
dotenv.config();
mongooes.connect(process.env.DATABASE_URL)
.then((res)=> console.log("Database connect Successfully !"))
.catch((err)=>console.log("Getting Error" ,  err))

//import routers
const userRouter  = require("./router/user.router")
const productRouter = require("./router/product.routes")
//using millddeweres
app.use(express.json())  
app.use("/api/v1/user" , userRouter) // /api/v1/user common part for every link 
app.use("/api/v1/product" , productRouter)
// recivng data from the body
//*********************************************************//

app.listen(port , (req , res)=>{
    console.log("server running on port : ", port);
})
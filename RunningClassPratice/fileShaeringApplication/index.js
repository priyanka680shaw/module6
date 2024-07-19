const express = require("express");
const mongoose = require("mongoose");
//const fileModel = require("./models/index.model")
const app = express();
const port = 2000;
//***********************************************************//
//connect with data base //
mongoose.connect("mongodb://localhost:27017/file_app")
.then(()=>console.log("DB Connect  Successfully !"))
.catch((error)=> console.log("Rrror connecting database " , error))
//*************************************/
// Routes Import//
const fileRouts = require("./routes/index.routes")

//use routes and middlewewre
// app.post("/api" , (req , res)=>{
//     res.json("hello")
// })
app.use(express.json())
app.use(fileRouts);
//***********************************************************//
app.listen(port , (req , res)=>{
    console.log("Server created on port : ", port);
}) 
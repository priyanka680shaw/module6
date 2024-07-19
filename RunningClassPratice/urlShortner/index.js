//const express = require("express");
import express from "express"
const port = 3050;
import { nanoid } from 'nanoid'
//const {nanoid} = require("nanoid");
const app = express();
console.log(nanoid())
//***********************************************************************//

app.use(express.json());
app.post("/shorten" , (req , res)=>{
    //console.log(nanoid())
    console.log(req.body);
    res.json({
        status : "successfull",
        message : "Shorten Api url called !"
    })
})

//***********************************************************************//


app.listen(port , (req , res)=>{
console.log("Server Activated on port : " , port);
})
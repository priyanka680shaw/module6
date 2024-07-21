const express = require("express");
const app = express();
const port = 5000;
const nodemailer = require("nodemailer")

/**********************************************/
const transporter = nodemailer.createTransport({
    host : "localhost",
    port : "1025,"
})



app.get("/" , (req , res)=>{


    const mailOption = {
        to : "priyankashaw680@gmail.com",
        from  :"abc@gmail.com",
        subject  :"Testing mail Smtp server",
        text  : "Hello welcome to JJob App !",
        //html , file in blob from f
    }
    
    transporter.sendMail(mailOption , (err , info)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log(info)
        }
    })

    res.end("Mail send !")
})
/**********************************************/

app.listen(port , (req , res)=>{{
    console.log("server created on port : " , port);
}})
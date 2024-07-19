
const multer = require("multer")
const { v4: uuidv4 } = require("uuid");
const fileModel = require("../models/index.model")
const path = require("path")
const express = require("express")
const nodemailer = require("nodemailer");
const { error } = require("console");
const { release } = require("os");

const transport = nodemailer.createTransport({
    host : "localhost",
    port : "1025",
    secure  : false
})

//where tostore/save
//And name the uploded file else it will not give appropriate name
const uplodeFolderPath = "uploads"
const storage = multer.diskStorage( // multer has  permenent storage(ddisk) / temperory stroge(Ram)  of files (//multer ky ky late hai ye sb documenataion se ptaa chle ge
    {
        destination : (req , res , cb)=>cb(null , uplodeFolderPath),
        filename  : (req , file , cb) =>{
            //console.log("fileNameCall", file)//file upload ho ge to there are  many informations 
            //res.filename se original file name mile ge to  andd hard coddedd filename ko remove kr  ddo 
            //there are conflictions with the name same name ke 2 pdf aa sakte hai so they overide each other for that use uuid for unique name
            const fileName = uuidv4() +file.originalname// + path.extname(res.originalname) // "newfile.pdf"
            cb(null , fileName)
        }
    }
)
//upload the file an specify that how may files to upload for now we upload single file 
const upload = multer({
    storage : storage
}).single("attachement") // how many files and name of the key (field jaha se file aaye ge)

const uploadFile = async(req , res)=>{
    console.log(req.res)
    upload(req , res , async()=>{
           //all file related data 
            console.log("dataExternal" , req.file)// others jittne bhi fields addd ho sb hi mile 
            const fileData = {
                originalName : req.file.originalname,
                newName : req.file.filename,
                size : req.file.size
            }
            const newlyInserteData = await fileModel.create(fileData)
            //console.log("newlyInserteData" ,newlyInserteData)
            
        res.json({
            status : "true",
            message :  "Post api successfully run File added into folder!",
            file_id : newlyInserteData._id
        })
    })
}

//SharableLink 
const generatedShaeableLink = async(req , res)=>{
    const shareableLink = `/file/download/${req.params.fileId}` // attached by its own to the base url path
    res.json({
        success  :"true" , 
        message  : "generated Sharable Link !",
        shareableLink
    })
}
//dowmloadable Link
const downloadfile = async(req , res)=>{
    const fileId = req.params.fileId;
    console.log(fileId)
    const fileData = await fileModel.findById(fileId)
    if(!fileData){
        return res.status(400).end("invalid Link !")
    }
    console.log("getting Data" , fileData)
    const path = `Uploads/${fileData.newName}`;
    console.log("path" , path)
    res.download(path , fileData.originalName)
    // res.json({
    //     success  :"true" , 
    //     message : "download link working properly !"   
    // })
}

const sendEmail = async (req ,res)=>{
    console.log("send email" , req.body)
    //download
    const fileId = req.body.fileId;
    console.log(fileId)
    const fileData = await fileModel.findById(fileId)
    if(!fileData){
        return res.status(400).end("invalid Link !")
    }
    console.log("getting Data" , fileData)
    const path = `Uploads/${fileData.newName}`;
    console.log("path" , path)
    //res.download(path , fileData.originalName)
    //Send Email
    const emailData = {
        to : "req.body.email",
        from : "priyankashaw680@gmail.com",
        subject : "your frienfd has send email to you !",
        html : `
        <p>Email recived from Priyanka shaw , You recived a link below to download it ! ........... <a href=${generatedShaeableLink}>Click here to download ... !</a></p>
        `
    }

    transport.sendMail(emailData , (err , info)=>{
        if(err){
            console.log(err)
           return  res.json({
                success : false,
                message : "unable to sen Email",
                error : err
            })
        }
        else{
            return res.json({
                success : true,
                message : "successfully send Email "
            })
        }
    })

    res.json({
        status  :"success",
        message : "Send EMAIL api working !"
    })
}

const fileController = {
    uploadFile , generatedShaeableLink , downloadfile , sendEmail
}


module.exports = fileController

//now we don't have exect file name so take the file name and save this into databaseModel 

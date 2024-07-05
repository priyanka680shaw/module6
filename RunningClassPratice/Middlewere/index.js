//midddlewere
/**
 * Type of midddlewears 
 * 1. Application middlewere = applys into the whole Application (normal Function app.use()=>make it middlwere it followes the sequence andd applies to all over the function)
 * 2.error handdaling middleWere= it takes the 4 parameter (err , r, r , n) or in normal case middle were is not skippable but in case of  error middlewere ti is  skippiable in catch bblock next(err) this (err) prameter skip all the midddlewere and execute the errhandler midddlewere !
 * 3.built in middlewere = express.json() {body me data inject}, express.encodedUrl() {inject the datd into body encoed from}, express.static(){to serve img , pdf , file , (if directlty pass the url so it start findding into the enf points or not able to find the url 404 error so for that we use static middlewere (is me file ke namee pass ker do so urk goes to first into this folder and find is that name file present or not if yes so return and if no so end popints me cheach kre ge ))};
 * **********In backend middlewere is the only thing which have power to inject  anything on the running code or in between of the code***********
 * 4. third party middlewere = morgan ,  responseTimeb 
 * 5. routing middlewere = (most important) = > 
 */
//####################Routing Middlewere#############################//
/*
1. express routing
*/ 
//exporting router
const userRoutes = require("./UserApi");

//install expreess pacckage from npm   

//import express
const express = require("express")
//creatting server 
const app = express();

//all the codex resides between thest two Business Logics

//** User data**//


//middlewere functions 
// ** (in middlewears we have 3 parameters (r , r , n) m.w has capability too sto   ) **//

const m1 =  (req , res , next)=>{
    console.log("middleware 1");
    //console.log(req.query)
    //  if(req.query.name === "piku"){
    //     console.log("finally get it")

    //     //passing data from midddle were 
    //     const {name , id} = req.query;
    //     const data  = (`${name}  ${id}`)
    //     console.log(data)
    //     req.data = data;
        
    //     next();
    // }
    // else{
    //     res.json({
    //         status : false,
    //         message  :"Something went wrong !"
    //     })
    // }
}

const m2 = (req, res ,  next)=>{
    console.log("middlewere 2");
    //reciving the data from middle were  1
    console.log("m1 pass the data and recivedd here" , req.data)
    next();
}
//** Application Middlewere **//
// to pass the ata from the middlewere (req se pass karte hai) sequence wise ppass hote rhte hai all middlewere have an access of this..
//app.use(m1);
//app.use(m2)




//28/06/24

function erroehandler(err , req , res , next){
    console.log("errHandler function call" , err);
    res.status(500).json({
        status : "false",
        message : " error Handling Called something  went wrong"
    })
}

//*********************************************** */

//*What we want here is jab bhi url me images mile ya to koi or file ke name mile to isko api treat na kre direct images ke file me jaye or waha se image de de bs*//
//api kr url nahi hai ye ye middlewewe yahi battane ke kaam karte hai
app.use(express.static("images"))// not forr api cheak 

//** Api Endd Points **//


app.get("/login" , (req , res)=>{
    console.log(req.quer )
    res.json({
    
        message : "Login Api Called"
    })
})
//user router se le ke aa rhe 
app.use(userRoutes)
// app.get("/user" , (req , res , next)=>{ 
//     // console.log(req.method);

//      try{
//         console.log(req.query.api)
//         //const user = user.fullname
        
//      if(req.query.name === "piku"){

//         return res.json({
//             status : true,
//             results : users
//         })
//      }
//     else{
//        return  res.status(400).json({
//         status : false,
//         message : "something went wrong"

//         })
       
//     }
//      }
//      catch(err){

        
//         // res.status(400).json({
//         //     status : false,
//         //     message : "something went wrong errror occured"
    
//         //     })
//         return next(err);
//      }
// })
//28/6/24
//post methodd
//to getting the ddata inside the boddy its importane
//app.use(express.urlencoded())
app.use(express.json());//req.body (it has acpacity to to recive the ddata from body and inject into the body it is middlewere) nother we write nor created this midddlerwere so  it is build in midddlewere
app.post("/redirect" , (req , res)=>{
    
    console.log("Body Data" , req.body);
   return res.json({
        status :"false",
        message : "post is invalid"
    })
})


//error handler
//app.use(m2)
app.use(erroehandler);


//bindding server
const port = "5000";
app.listen(port , (req , res)=>{
    console.log("port is created on " , port);
})

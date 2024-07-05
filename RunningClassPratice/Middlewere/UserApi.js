const express = require("express");
 const router = express.Router();

 //routing export ho ge rout ke name se index me attext rout but (/routename is particular route file se hi mile ge )

 const users = [
    {
        id : 1,
        name : "puja",
        mobileNo : "0983459300",
        //folder ke name espress.static me ho ge and yaha direct image ke name it will foundd 
        profile  :"http://localhost:5000/image.jpeg"
    },

    {
        id : 2,
        name : "kajal",
        mobileNo : "0983488"
    },
    
    {
        id : 3,
        name : "roma",
        mobileNo : "097875" 
    },
   
    {
        id : 4,
        name : "sonal",
        mobileNo : "0983459300" 
    },
    
    {
        id : 5,
        name : "anamika",
        mobileNo : "7890467" 
    },
      
]


 router.get("/user" , (req , res , next)=>{ 
    // console.log(req.method);

     try{
        console.log(req.query.api)
        //const user = user.fullname
        
     if(req.query.name === "piku"){

        return res.json({
            status : true,
            results : users
        })
     }
    else{
       return  res.status(400).json({
        status : false,
        message : "something went wrong"

        })
       
    }
     }
     catch(err){

        
        // res.status(400).json({
        //     status : false,
        //     message : "something went wrong errror occured"
    
        //     })
        return next(err);
     }
})
module.exports = router;

const jobModel = require("../model/job.Model");
//read 
const getJobApi = async (req , res)=>{
    // const results = await jobModel.find(); read data na isme hi find me query add kr sakte hai 
    // const results = await jobModel.find({
    //     slalar : {
    //         $gt  :8000
    //     }
    // })
    //dynamic api
    const minSalary = req.query 
    console.log(minSalary)
    const results = await jobModel.find(
    //     {
    //     slalar : {
    //         $gt : 900
    //     }
    // }
)
    res.json({
        status : "true",
        message : "Get Api called",
        results : results
    })
}
//create
const postJobApi =async (req ,res , next)=>{
   try{  
    console.log(req.body)
    //inserting data into database
    const response = await jobModel.create(req.body)
    console.log(response)
    res.json({
        status : "true",
        message :"post Api called"
    })
   }
   catch(err){
        next(err);
        console.log("err"  , err)
   }
}
//put method 
//Db operations aer Async 
const putJobApi = async (req ,res)=>{
    console.log(req.params.id)
    //find by id and then update it
    const whattoupdate = req.params.id
    //to update the data we have  so many methods (methods takes 2 parameters 1. find(where to upddate) , 2. what to update(update value in object from))
    //
    const updateval = {
        //overrite the value for that we use $set 
        //make it dynamic 
        $set : req.body
        //hard coded
        // $set  :{
        //     salary  : 150000
        // }
        
    }
//find jis ki salary 30000 hai usko usko update kro
    const filterObj = {
        //in sideie filter filter kittne pr bhi lga sakte ho and or kuch bhi  
       // salary : 30000 hard coded
       salary  : whattoupdate
    }
    //yaha job model ke use ho ge bcz changes db me ho ge jyse create me use kiye hai
    //findByID for upddate only 1 row
    /////////const response = await jobModel.findByIdAndUpdate(whattoupdate , updateval)
    //at time more then 1 row ko upddate id use nahi krange
    const response = await jobModel.updateMany(filterObj , updateval)
    console.log("update Call" , response)
    
    //validation cleack de do if update nahi huia to response null date hai 
    //response = null
    res.json({
        status : "true",
        message : "put API Call"
    })
}
//Delete Method

const deleteJobApi =async (req , res)=>{
    const id= req.params.id;
    console.log(id)
    try{
        const response = await jobModel.findByIdAndDelete(id);
        if(!response){
            return res.status(400).json({
                status : "false",
                message : "Document not found"
            })
        }
        console.log("delet" , response);
        res.json({
            status: "true",
            message: "delete API call",
            deletedDocument: response
        })
    }
    catch(err){
        console.log("Error in deleting DDocument " , err);
        res.status(500).json({
            status : "false",
            message : "Enternal server Error !",

        })
    }
}
    //jobModel.deleteMany()
    


// Delete Method
// const deleteJobApi = async (req, res) => {
//     const id = req.params.id;
//     console.log(id);
//     try {
//         // Await the deletion operation
//         const response = await jobModel.findByIdAndDelete(id);
        
//         if (!response) {
//             return res.status(404).json({
//                 status: "false",
//                 message: "Document not found",
//                 error : err.message
//             });
//         }

//         console.log("deleted", response);
//         res.json({
//             status: "true",
//             message: "delete API call",
//             deletedDocument: response
//         });
//     } catch (err) {
//         console.error("Error deleting document", err);
//         res.status(500).json({
//             status: "false",
//             message: "Internal Server Error",
//             error: err.message
//         });
//     }
// };

const jobApiController = {getJobApi  , postJobApi , putJobApi  , deleteJobApi};

module.exports = jobApiController;
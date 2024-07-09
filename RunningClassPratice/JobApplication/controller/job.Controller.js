
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
    const results = await jobModel.find({
        slalar : {
            $gt : 900
        }
    })
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

const putJobApi = (req ,res)=>{
    res.json({
        status : "true",
        message : "put API Call"
    })
}

const deleteJobApi = (req , res)=>{
    res.json({
        status : "true",
        message : "delete api call"
    })
}

const jobApiController = {getJobApi  , postJobApi , putJobApi  , deleteJobApi};

module.exports = jobApiController;
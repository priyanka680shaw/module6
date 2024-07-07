const getJobApi = (req , res)=>{
    res.json({
        status : "true",
        message : "Get Api called"
    })
}

const postJobApi = (req ,res)=>{
    res.json({
        status : "true",
        message :"post Api called"
    })
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
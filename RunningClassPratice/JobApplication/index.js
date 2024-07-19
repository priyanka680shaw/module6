const  express = require("express");
const app = express();
const port = 4000;
/**********##########********************##########********************##########**********/
//**********Connection node to mongoDB using mongooes**********//

    const mongoose = require("mongoose")
    //server(url)+dbName (** whwnever you get any async task use .then .catch for clearity )
    mongoose.connect("mongodb://localhost:27017/jobApp")
    .then(()=>console.log("Connection Successfully ! "))
    .catch((err)=> console.log("Not Connect with Database !"))

//**********Completed Connection node to mongoDB using mongooes**********//
//**********routes import**********//

const jobRoutes = require("./Routes/job.Route")  

//**********end routes import**********//

//middleweares
app.use(express.json()) // to reciving body from post url 
//error handling function 
function errorHandling(err , req , res , next){
    res.json({
        status  :"false",
        message : "Getting Error !",
        err : err.name
    })
}

//**********end points in middlewere**********//

app.use(jobRoutes);

app.use(errorHandling)
//**********end of end points**********//

/**********##########********************##########********************##########**********/
app.listen(port , (req , res)=>{
    console.log("Server runs on port :" , port);
})
const  express = require("express");
const app = express();
const port = 4000;
/**********##########********************##########********************##########**********/

//**********routes import**********//

const jobRoutes = require("./Routes/job.Route")  

//**********routes import**********//

//**********end points**********//
app.use(jobRoutes);
//**********end points**********//

/**********##########********************##########********************##########**********/
app.listen(port , (req , res)=>{
    console.log("Server runs on port :" , port);
})
const express = require("express")
const app = express();
const morgan = require("morgan");//all the detailes lis of my server 

/*************************************/
//request logger
function requestLogger(req ,res, next){
    const {method , ip , url} = req;
    console.log("Log" , `Method : ${method} , IpAddress : ${ip} , URL : ${url}`)
    console.log(`TimeStaamp : ${new Date()}`)
    next()
}
//middlewere info
function requestLoggerInfo(req , res , next){
    const {method , ip , url} = req;
    console.log("Info" , `Method : ${method} , IpAddress : ${ip} , URL : ${url}`)
    console.info(`TimeStaamp : ${new Date()}`)
    next()
}
//Debug
function requestLoggerDebug(req , res , next){
    const {method , ip , url} = req;
    console.debug("Debug" , `Method : ${method} , IpAddress : ${ip} , URL : ${url}`)
    console.debug(`TimeStaamp : ${new Date()}`)
    next()
}
//using thirdParty midddlewere morgan
app.use(morgan("combined"))
//custom midddlewere
app.use(requestLogger)
app.use(requestLoggerInfo)
app.use(requestLoggerDebug)

app.get("/" , (req , res)=>{
    res.send("Home Api calleds")
})
/*************************************/


const port = 5000;
app.listen(port , (req , res)=>{
    console.log("Server created on port : ", port);

})
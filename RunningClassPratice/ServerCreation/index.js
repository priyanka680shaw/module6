
//step 1 = to create http moddule
//ster 2 = create server
//step 3 = create port 
//to show data in the in the browser createServer is going to response to  the user . it takes 2 parameters call back funnction
//logics define which is going to create i create server
const http = require('http');
const myFun = (req , res) =>{
    //write the logic to handele  the request and send the response
    console.log("rqquest" , req)
}
//server takes the request and  ndd the response http is hamddle hownto send the response to the 
//const ss = http.createServer((req , res)=>app(req , res))
//browser swe request jay ge tab hi  ye ccall 
const server = http.createServer((req , res)=>{
    //business logic written inside it   
    //console.log("reccivedd" , req)
    console.log(req.url)
    //res.end is used for the response to the user 
   //res.end("hello from node js")
    //handeling urs(endd points)
    let endPoint = req.url;//where the request is recived
    console.log(endPoint)
    //handle  all the urls from 
    //creating json data
    const response = {
        "name" : "piku",
        "country" : "Inddia",
        "pin" : "712311"
    }
    switch(endPoint){
        case "/" :
            res.end("Welcome to the login page !")
            //adding headers in api 
            
            break;
        case "/login" :
            res.end(JSON.stringify(response)) // same as fs http also only recive  string in it.
        case "/logout" : 
            res.end("Goodd Bye Logout out successy !")
        case "user-list" : 
            res.end("welcome to the main user area !")
    }

    // if(req.url === "/"){
    //     res.end("welcome to home Page !")
    // }
    // else if(req.url === "/login"){
    //     res.end("login Api")
    // }

});
server.listen(10000 , ()=>{
    console.log("server Started on 9000")
})
//if url handels (req and response) so it is api 
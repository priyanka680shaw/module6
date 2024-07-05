const express = require("express");
const jokes = require("./data");
const app = express()
/*********************************************************************************************/
app.use(express.static("images"))

//import routes
const jokesRoute = require("./router/jokesRouter");
//creating endpoints
app.use(jokesRoute)
// app.get("/jokes" , (req , res)=>{
//     //random no create
//     const requireRandomJokesIndex = Math.floor(Math.random()*jokes.length)
//     return res.json(jokes[requireRandomJokesIndex])
// })

// app.get("/jokes/:id" , (req , res)=>{
//     console.log(req.params);
//     //const findJoke = jokes.find((joke)=>joke.id == req.params.id)

//     if(req.params.id <= jokes.length && req.params.id >= 0){
//         return res.json({
//             message : "Success",
//             result : jokes[req.params.id]
//         })
//     }
//     else{
//         res.status(503).json({
//             status : false ,
//             message : "Please enter valid no !"
//         })
//     }
   
// })
//images
app.get("/images" , (req , res)=>{
    return res.json(["http://localhost:7000/image.jpeg"  , "http://localhost:7000/image2.jpg" , "http://localhost:7000/img2.avif" , "http://localhost:7000/img4.jpeg", "http://localhost:7000/img5.jpeg", "http://localhost:7000/img6.jpeg",

    ]
        )
}
)






















/*********************************************************************************************/
const port = 7000
app.listen(port  , (req , res)=>{
    console.log("server created on " , port);
})

const express = require("express")
const router = express.Router();

const jokeController = require("../controllre/jokeController")



router.get("/jokes" , jokeController.jokes)


//joke with param
router.get("/jokes/:id" , (req , res)=>{
    console.log(req.params);
    //const findJoke = jokes.find((joke)=>joke.id == req.params.id)

    if(req.params.id <= jokes.length && req.params.id >= 0){
        return res.json({
            message : "Success",
            result : jokes[req.params.id]
        })
    }
    else{
        res.status(503).json({
            status : false ,
            message : "Please enter valid no !"
        })
    }
   
})

module.exports = router;

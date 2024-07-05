const jokeModelData = require("../model/jokeModel")
const jokes = (req , res)=>{
    const jokes = jokeModelData.getJokes();
    //random no create
    const requireRandomJokesIndex = Math.floor(Math.random()*jokes.length)
    return res.json(jokes[requireRandomJokesIndex])
} 

const jokesController = {
    jokes
}

module.exports = jokesController

//1.import module express
const express = require('express')
//2.creating server
const app = express();
//7.creating dummy user data
const users = [
    {
        id : 1,
        name : "puja",
        mobileNo : "0983459300" 
    },

    {
        id : 2,
        name : "kajal",
        mobileNo : "0983488"
    },
    
    {
        id : 3,
        name : "roma",
        mobileNo : "097875" 
    },
   
    {
        id : 4,
        name : "sonal",
        mobileNo : "0983459300" 
    },
    
    {
        id : 5,
        name : "anamika",
        mobileNo : "7890467" 
    },
      
]
//4.all the api and code in written within (2 or 3 servverCreate and server bind)
//5.aap.method(name) call it as function it will take two parameters ("url endpoint" , callBack(req, res)=>{})
//5..complete logic of 1 mothed is written in 1 function not as http to create 1 fun(myfun) and which handdle all the business logic part!!!
//6.Creating home page route
    app.get("/" , (req , res)=>{
    res.send("hello welcome to home page")
    console.log("login api created !!!")
})
//creating login get
app.get("/login" , (req , res)=>{
    //7.sending the data in which method you have to ddecide and for that funcunality are avilable  as  http mee jsoon recive nahi kiye the error yaha koi jaruri nahi hai so=irf string dena hai json bhi de sakte hai and we prefer json data 
    //res.send("Login Api call") html
    //res.end("ligin Api calll") string
    res.json({
        name  :"piku",
        add : "kol"
    })
})
//create login post
app.post("/login" , (req , res)=>{
    res.json({
        name   : "piku",
        messagw : "post Api Call",
    })
})
//7.useer route
// app.get("/user" , (req , res)=>{
//     res.json({
//         success : "true",
//         messaage : "Dummmy  user data",
//         results  : user
//     })
// })
//8.dynamic routing using params(//7 comment andd usi me add params) 
app.get("/user/:id" , (req , res)=>{
    //**************9.example of more then one param
   // app.get("/user/:id/:piku" , (req , res)=>{*****************//
    const param = req.params
    //10. qery parameter (?) or multiple queryparameter end point ke baad ke search (/user?) url me  
 
    console.log(param);
    //usiing the id find the particular user and and response(find ke use )
    const user = users.find((user)=>user.id == param.id) 
    console.log(user)
    if(!user){
        res.status(404).json({
            success : "False",
            message  : "User not found !"
        })
    }
    else{
        res.json({
            success : "true",
            messaage : "Dummy  user data",
            results  : user
        })
    }
   
})

//using query parameter ?######################### "endpoint me kuch nahi dena hote params me end point me : se pta chlta hai "
app.get("/user" , (req , res)=>{
    const query = req.query;
    console.log(query)
    //usiing the id find the particular user and and response(find ke use )
    //queryparameter me jo query pass ho same wahi yaha bhi ddena hote hai (query.userid)yahi search url me bhi ho ge islie kisi bhi api  ko use karne ke liye ddocumantation bahut jaruri hai 
    const user = users.find((user)=>user.id == query.userid) 
    console.log("useer" ,user)
    if(!query.userid){
        res.json({
            success : "true",
            messaage : "Dummmy  user data",
            results  : users
        })  
    }
    if(!user){
        res.status(404).json({
            success : "False",
            message  : "User not found !"
        })
    }
    else{
        res.json({
            success : "true",
            messaage : "Dummmy  user data",
            results  : user
        })
    }
   
})
//3.bindding server 
app.listen(10000 , (req , res)=>{
    console.log("prot created with 10000")
})


/*
//benifits of js

1. lees writtendency code clean 
2.for every method seperate function
3.ddatako jis formate  me ddena hai do  jason mr bhi jay ge no dstringifuy needed
4..put ->is usedd to replace something andd patch is usedd to edit some small  part (100 ddata me 10  chage karna ho to patch) or complete change karna hai file me kuch to patch (immage put)



*/


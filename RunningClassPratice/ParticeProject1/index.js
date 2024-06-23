//this the file which is going to be log in 1st 
//file extension will be js 
//there is no componet so  wew need to create all the stuffs ;
//console in node js is our terminal it is work as browser (console.log() is going to work in terminal)

//console.log("Hello World !");
//import fs from "fs" not goinfg to use this 
const fs = require("fs") // inbuldd funcnality of nodde 
const path = require("path")
const { dirname } = require("path")

const fileNmae = "users.json"

const usersData = [
    {
        id : 1,
        name  :"pinky",
        roll  : 55
    }
]
//*********** create or write file **************** */

//async meathodd of writefile will take callback 
//if you chage the content it will overwrite the file constent again and again

// fs.writeFile("sample.txt" , "Hello World" , (err)=>{
//     if(err){
//         console.log("Error = " , "err")
//     }
//     else{
//         console.log("Successfully Written ");
//     }
// })

//make it function foe every  stuffs
//now make it all functions dynamic(20/6/24)
function writeFileDemo(filePath , content){
    fs.writeFile(filePath, content , (err)=>{
        if(err){
            console.log("Error = " , "err")
        }
        else{
            console.log("Successfully Written ");
        }
    })
}
//writeFileDemo(fileNmae , JSON.stringify( usersData));


//*********** read the file **************** */

// function readFileDemo(filePath){
//     fs.readFile(filePath , (err)=>{
//         if(err){
//             console.log("err" , err)  
//         }
//         else{
//             console.log("read Successfully !")
//         }
//     })
// }
///readFileDemo("sample.txt");
//append file normal write file rewrite the the file without remove previous one add ddata
function appenddfileDemo(filePath ,  content){
    fs.appendFile(filePath , content , (err)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log("Appennd Successfully !")
        }
    })  
}
//appenddfileDemo("sample.txt" , "\n Appended Data \n")

//instead of appendd data to add manually in specific place where i want to ad use read and write operation
const user2 = {
    id : 4,
    name : "priya",
    roll :29  
}
function readFileDemo(filePath){
    fs.readFile(filePath , (err , data)=>{
        if(err){
            console.log("err" , err) 
            return;
        }
        console.log(data.toString())
        //recive the data into the  dstring formate andd the convert it in to obj andd the write file add in to the user.json or write file methodd will overide the previouf=s
        const userData = JSON.parse((data.toString()));
        userData.push(user2);
        writeFileDemo(fileNmae , JSON.stringify (userData))
    })
    
}
readFileDemo(fileNmae);


//deleate 

function deleatDemo(filePath){
    fs.unlink(filePath , (err)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log("File Deleted !")
        }
    })
}
//deleatDemo("sample.txt")


/*
    path module
    // relative path = > .././ ==>which shows 1 foldder to another foldder or file path i.e is relative path ../../index.js
    //Absolute path => ddetailed path = >desxtop/users/d:/module6/rumnningclass/pratice1=>absolute complete path no dependency
    //for all rhe purpous we use path module 
*/

//1 . __dirname , __filename
console.log("ddirectory name Absolute path" , __dirname);
console.log("absolute file name" , __filename);
const fullPath = path.join(__dirname , "files" , "../../../ddownloads", "index.js");
console.log(fullPath)
console.log(path.parse(fullPath))
//2.path usefull methodes


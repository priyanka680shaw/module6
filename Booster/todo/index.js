// we will be storing our task in to json formate 
const path = require("path");
//file system access  of all the node current folder file
const fs = require('fs')
//using path join 
const taskfilePath = path.join(__dirname , "task.json");
//ensure the file exist
if(!fs.existsSync(taskfilePath)){
    //in write file 1. file name 2.content of the file always in string formate
    fs.writeFileSync("task.json" , JSON.stringify([{"name" : "piky" , "class" : "12" , "school" : "Sun Rise" ,"present" : true}]));
}

//read line (for taking user input) treminal or s cmd
//1. creating user interface
const readline = require('readline');
const { stdout } = require("process");
const { constants } = require("buffer");
//creating interface for taking input and output from user by teminal interface is create this standdered input and output  
const rl = readline.createInterface(
    {
        input : process.stdin,
        output : stdout
    }
)
//for asking with user have question method
// rl.question("What is your Name : " , (input)=>{
//     console.log(`Hello ${input} welcome`)
//     //see your terminal is not colse abhi bhi aap  likh sakte lo bcz read line is not close 
//     rl.close()
// })
//***********************************add task process *****************************************//
//read data
function getMyTasks(){
    //read file also takes 2 args (path , which formate you want to recive data)
    const recivedDta = fs.readFileSync(taskfilePath ,  "utf-8");
    console.log(recivedDta);
    //convert data into obj bcz jon recives oonly string and return bhi string hi ho ge 
    return JSON.parse(recivedDta)
}

//savetask 
function saveMyTask(tasks){
    fs.writeFileSync(taskfilePath , JSON.stringify(tasks))
}
//reciving data from rea lne
function addTask(task){
    const recivedDta = getMyTasks();
    recivedDta.push({"name" : task , "class" : "12" , "school" : "Sun Rise" , "present" : true})
    saveMyTask(recivedDta);
    console.info("task added sussessfully ! ");
}

//***********************************add task process *****************************************//
//List all tasks

function listalltask(){
    const tasks = getMyTasks();
   tasks.forEach((ele , index)=>{
        console.log(`${index+1} . ${ele.name} - ${ele.class} - ${ele.school}`)
   })
}
/****************************** */
//********************************completeedd upddate ***********************//
function completedTask(indexNo){
    const tasks = getMyTasks();
    if(tasks[indexNo-1]){
        tasks[indexNo-1].present = flase;
        saveMyTask(tasks);
        console.log("upddateSuccessfully")
    }
    else{
        console.warn("Invalid Student id !")
    }
    return;
}
//delete
function deleteData(indexNo){
    const tasks = getMyTasks();
    if(tasks[indexNo-1]){
        const filteredata = tasks.filter((item , index)=> index !== indexNo-1);
        saveMyTask(filteredata);
        console.log("deleted SuccessFully !");
    }
    else{
        console.log("invalid id ")
    }
    return;
}

//Add task manager
function todoManager(){
    rl.question("What would you like to do ? \n 1. Add a Task \n 2. List all task \n 3. Update List \n 4 .Delete Data \n", (answer)=>{
        switch(answer){
            case "1"  : 
                rl.question("What task do you want to  add ! \n" , (taskInput)=>{
                    console.log(`${taskInput}`);
                    addTask(taskInput);
                    todoManager();
                })
                break;
            case "2" : 
                listalltask();
                todoManager();
                break;
            case "3" :
                rl.question("Enter student id to make change its presence \n" , (id)=>{
                    
                    completedTask(parseInt(id));
                  
                    todoManager();
                })
                break;
            case "4" :
                rl.question("Which data you want to delete enter id no \n." , (indexNo)=>{
                    console.log("deleted id" ,indexNo)
                    deleteData(indexNo);
                    todoManager()
                })
                break;
            default  : console.log( "Invalid Option \n Enter a valid option \n")
            todoManager();
        }
    })
}

todoManager()
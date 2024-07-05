//express import 
const express = require("express");
//creating server
const app = express();

/******************************************All the codes resides between this **********************************************/
//import all the routes//

const userRoute = require("./router/userRouter");
const productRoute = require("./router/productRouter");
const orderRoute = require("./router/orderRouter");
const cartRouter = require("./router/cartRouter");

//connect routes with index page 1st step done //
app.use(userRoute);
app.use(productRoute);
// app.use(orderRoute);
// app.use(cartRouter);
//******Models*******/
        //user model
        //cart model
        //prodduct model
//order model
//******Models*******/


/****************************************** All the codes resides between this end **********************************************/
//bindig or creating port
const port = 8080;

app.listen(port , (req ,res)=>{
    console.log("server start  run on" , port);
})
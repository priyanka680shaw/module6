const mongoose= require("mongoose")

const addsress = {
    addressLine1  :{
        type : String,
        required : true
    },
    adddressLine2 : {
        type : String,
        required :  false,
        default : "ano avilable "
    },
    pinCode : {
        type : String,
        required : true
    },
    state :{
        type : String,
        required : true
    },
    _id : false // address is obj and mongodb treade d every obj asa document so it gives it id again make it false to id nahi mile ge 
}
const userSchems = new mongoose.Schema({
    email  : {
        type : String,
        required  :true,
        unique  :true
    },
    mobileNo : {
        type : String,
        required : true,
        unique  :true
    },
    password : {
        type : String,
        required : true,
        unique  :true
    },
    firstName : {
        type : String,
        required : true
    },
    lastName :{
        type : String,
        required : true
    },
    address : {
       type : addsress
    },
    role : {
        type : String ,
        required : true ,
        enum : ["CUSTOMER" , "ADMIN" , "SELLER"] //It  is  option if given value  matches then it allow to enter in the data base , other then this koi  bhi value  nahi de sakte hai  
    },
    token : {
        type : String,
        required  : true ,
        default : "-"
    }
})

const userSchema = mongoose.model("users" , userSchems);
module.exports = userSchema
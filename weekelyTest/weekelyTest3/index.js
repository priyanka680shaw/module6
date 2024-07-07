const express = require("express");
const app = express();
//****************************************************************************************************************//
app.use(express.json());
//error handlder midddlewere
function errorHandler(err , req , res , next){
    console.log(req.method)
    res.status(400).json({
        "error" : err.message
    })
}

app.post  ("/userregister" , (req , res , next)=>{
    
    try {
        const { firstName, lastName, password, email, phoneNumber } = req.body;
        console.log(firstName , lastName , password , email , phoneNumber)

        // Validate First Name and Last Name
        if (!/^[A-Z]/.test(firstName)) {
            throw new Error('First name must start with a capital letter.');
        }
        if (!/^[A-Z]/.test(lastName)) {
            throw new Error('Last name must start with a capital letter.');
        }

        // Validate Password
        if (!/(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*\d).{8,}/.test(password)) {
            throw new Error('Password must contain at least one special character, one uppercase letter, one numeric character, and be at least 8 characters long.');
        }

        // Validate Email Address
        if (!/@/.test(email)) {
            throw new Error('Email address must contain "@" symbol.');
        }

        // Validate Phone Number
        if (!/^\d{10,}$/.test(phoneNumber)) {
            throw new Error('Phone number must be at least 10 digits long.');
        }

        res.status(200).json({ message: 'User registered successfully!' });
    }
    catch(err){
        next(err);
    }
    
})

app.use(errorHandler);
//****************************************************************************************************************//
const port = 3000;
app.listen(port , (req , res)=>{
    console.log("Server created on : " , port);
})
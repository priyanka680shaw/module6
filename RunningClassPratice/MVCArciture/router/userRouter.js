//Routs = api end points and api urls
const express = require("express");
const router= express.Router();
const userController = require("../controller/userController")

//register
router.post("/register" , userController.userRegister
)
//login
router.get("/login:name" , userController.userLogin)

module.exports = router
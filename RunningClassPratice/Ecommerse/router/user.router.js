const express = require("express")
const router = express.Router();
const userController = require("../contreller/user.controller")
router.post("/signUp/"  , userController.singUp ) //register user api
router.post("/login/", userController.login ) //login user api

module.exports = router ;
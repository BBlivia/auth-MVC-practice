//login page 
const express = require('express') 
const router = express.Router()
const homeController = require('../controller/home')
//const authController = require('../controller/auth')
//const {ensureAuth, ensureGuest} = require('../controller/auth')
const User = require('../models/User')
//! calling in the controller that's needed 

router.get('/', homeController.getLogin)   //it's an object and were getting the method 




module.exports = router
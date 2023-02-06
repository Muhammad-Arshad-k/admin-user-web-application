const express = require('express');
const userController = require('../controllers/userController')



const router = express.Router()

//login Route
router.post('/login',userController.loginUser)

//signup route

router.post('/signup',userController.signupUser)


module.exports = router;
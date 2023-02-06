
const User = require('../models/userSchema')

//login user
const loginUser = async(req,res)=>{
    res.json({mssg:"login user"})
}


//signup user
const signupUser = async(req,res)=>{
    const {name,email,phone,password} = req.body;

  //add docs to database
  try {
    const user = await User.signup(name,email,phone,password)
    res.status(200).json({email,user})
  } catch (error) {
    console.log("heloo");
    res.status(400).json({error:error.message})
  }
}

module.exports={
    loginUser,
    signupUser
}
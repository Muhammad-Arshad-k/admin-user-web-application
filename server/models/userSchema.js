const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator')
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  phone:{
    type:Number,
    required:true,
  },
  password: {
    type: String,
    required: true
  }
  
});

//static signup mehod
userSchema.statics.signup = async function(name,email,phone,password){

    if(!name||!email||!phone||!password){
      throw Error('All fields must be filled')
    }   
    if(!validator.isEmail(email)){
      throw Error("Email is not valid")
    }
    const phonenumber = phone.toString();
    if(!validator.isMobilePhone(phonenumber,'any')){
      throw Error('Must Emter a valid phone number')
    }

    if(!validator.isStrongPassword(password)){
      throw Error('password not strong enough')
    }

      const exists = await this.findOne({email})
      if(exists){
        throw Error("email already in use")
      }
      const salt = await bcrypt.genSalt(10)
      const hash = await bcrypt.hash(password,salt)

      const user = await this.create({name,email,phone,password:hash})
      return user
}
module.exports =  mongoose.model('User', userSchema);

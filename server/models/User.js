const mongoose = require('mongoose') 
const bcrypt = require('bcrypt')
const validator = require('validator')
var moment = require('moment')
var sendEmail = require('../utils/sendEmail')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String
  },
  phone: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  lastLogin: {
    type: Date,
    default: Date.now,
    required: true,
  },
})

// static signup method
UserSchema.statics.signup = async function (name, email, password, confirmPassword) {

  // valdation
  console.log(confirmPassword)
  if (!name || !email || !password || !confirmPassword) {
    throw Error('All fields must be filled')
  }
  if (!validator.isEmail(email)){
    throw Error('Email is not valid')
  }
  
  if (!(password===confirmPassword)){
    throw Error('Password and confirm password mismatch')
  }
  if (!validator.isStrongPassword(password)){
    throw Error('Password not strong enough. Must contains uppercase, lowercase, numbers and more than eight characters')
  }

  const exists = await this.findOne({email})

  if(exists){
    throw Error('Email already in use')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({name, email, password:hash})

  sendEmail(email, 'Jiffy Account Created', 'Your account has been created successfully. Thanks for using our services')

  return user
}

// static login method
UserSchema.statics.login = async function (email, password) {
  // valdation
  if (!email || !password) {
    throw Error('All fields must be filled')
  }

  const user = await this.findOne({email})

  if(!user){
    throw Error('Incorrect email or password')
  }

  const match = await bcrypt.compare(password, user.password)

  if(!match){
    throw Error('Incorrect email or password')
  }

  await this.findOneAndUpdate({ email: email }, {
    lastLogin: moment(new Date())
  })

  return user

}

const User = mongoose.model('User', UserSchema)

module.exports = User;

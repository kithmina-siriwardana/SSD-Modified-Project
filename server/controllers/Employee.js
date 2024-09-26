const mongoose = require('mongoose') 
const bcrypt = require('bcrypt')
const validator = require('validator')

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  dob:{
    type: Date,
    required: true,
  },
  role:{
    type:String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
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
EmployeeSchema.statics.signup = async function (name,dob, role,address ,phone, email, password) {

  // valdation
  if (!name || !email || !dob || !role || !address|| !phone || !password) {
    throw Error('All fields must be filled')
  }
  if (!validator.isEmail(email)){
    throw Error('Email is not valid')
  }
  if (!validator.isStrongPassword(password)){
    throw Error('Password not strong enought')
  }

  const exists = await this.findOne({email})

  if(exists){
    throw Error('Email already in use')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const employee = await this.create({name,dob, role, address, phone, email, password:hash})

  return employee
}

// static login method
EmployeeSchema.statics.login = async function (email, password) {
  // valdation
  if (!email || !password) {
    throw Error('All fields must be filled')
  }

  const employee = await this.findOne({email})

  if(!employee){
    throw Error('Incorrect email or password')
  }

  const match = await bcrypt.compare(password, employee.password)

  if(!match){
    throw Error('Incorrect email or password')
  }

  return employee

}

const Employee = mongoose.model('Employee', EmployeeSchema)

module.exports = Employee;

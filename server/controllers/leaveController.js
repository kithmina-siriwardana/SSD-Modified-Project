const Leave = require('../models/Leave')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '2d'})
}

// get all users
const getLeaves = async (req, res) => {
    const leaves = await Leave.find({}).sort({ lastLogin: -1 })

    res.status(200).json(leaves)
}

// get a single user
const getLeave = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'User does not exsist' })
    }

    const leave = await Leave.findById(id)

    if (!leave) {
        return res.status(404).json({ error: 'User does not exsist' })
    }

    res.status(200).json(leave)
}

// create new user
const createLeave = async (req, res) => {
    const { description, startDate, endDate, type } = req.body

    // add doc to db
    try {
        const leave = await Leave.create({description, startDate,endDate, type })
        res.status(200).json(leave)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// delete a user
const deleteLeave = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'User does not exsist' })
    }

    const leave = await Leave.findOneAndDelete({ _id: id })

    if (!leave) {
        return res.status(404).json({ error: 'User does not exsist' })
    }

    res.status(200).json(leave)

}

// update a user
const updateLeave = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'User does not exsist' })
    }

    const leave = await Leave.findOneAndUpdate({ _id: id }, {
        description: req.body.description,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        type: req.body.type,
    })

    if (!leave) {
        return res.status(404).json({ error: 'User does not exsist' })
    }

    res.status(200).json(leave)
}

// login
const loginUser = async (req, res) => {
    const {email, password} =  req.body

    try {
        const user = await Employee.login(email, password)

        // create a token
        const token = createToken(user._id)
        
        res.status(200).json({email, token})
    }catch (error){
        res.status(400).json({error: error.message})
    }
}

// signup user
const signupUser = async (req, res) => {
    const {name, email, password} = req.body

    try {
        const user = await Employee.signup(name, email, password)

        // create a token
        const token = createToken(user._id)
        
        res.status(200).json({email, token})
    }catch (error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    createLeave,
    getLeaves,
    getLeave,
    deleteLeave,
    updateLeave,
    loginUser,
    signupUser
}
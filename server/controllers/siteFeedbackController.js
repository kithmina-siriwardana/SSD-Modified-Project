const SiteFeedback = require('../models/SiteFeedback')
const mongoose = require('mongoose')
var sendEmail = require('../utils/sendEmail')

// get all private feedbacks
const getPrivateSiteFeedbacks = async (req, res) => {
    const siteFeedbacks = await SiteFeedback.find({isApproved: false})
    res.status(200).json(siteFeedbacks)
}

// get all private feedbacks
const getPublicSiteFeedbacks = async (req, res) => {
    const siteFeedbacks = await SiteFeedback.find({isApproved: true})
    res.status(200).json(siteFeedbacks)
}

// create new user
const createSiteFeedback = async (req, res) => {
    const { name, sFeedback, email } = req.body
    
    console.log(name+" "+sFeedback+" "+email)
    if (!sFeedback) {
        return res.status(400).json({ error: 'Feedback must be filled', errorPosition: '1' })
    }
    
    // add doc to db
    try {
        const siteFeedback = await SiteFeedback.create({ name: name, feedback: sFeedback })
        //sendEmail(email, 'Jiffy Account Created', `Your feedback has been recorded successfully.`)

        res.status(200).json(siteFeedback)
    } catch (error) {
        console.log(error.message)
        res.status(400).json({ error: error.message })
    }

}

// delete a user
const deleteSiteFeedback = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Feedback does not exsist' })
    }

    const feedback = await SiteFeedback.findOneAndDelete({ _id: id })

    if (!feedback) {
        return res.status(404).json({ error: 'Feedback does not exsist' })
    }    

    res.status(200).json(feedback)

}

// update a user
const updatePublicSiteFeedback = async (req, res) => {
    const { id } = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Feedback does not exsist' })
    }

    feedback = await SiteFeedback.findOneAndUpdate({ _id: id }, {
        isApproved: true
    })

    if (!feedback) {
        return res.status(404).json({ error: 'Feedback does not exsist' })
    }

    res.status(200).json(feedback)
}

const updatePrivateSiteFeedback = async (req, res) => {
    const { id } = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Feedback does not exsist' })
    }

    feedback = await SiteFeedback.findOneAndUpdate({ _id: id }, {
        isApproved: false
    })

    if (!feedback) {
        return res.status(404).json({ error: 'Feedback does not exsist' })
    }

    res.status(200).json(feedback)
}

module.exports = {
    getPrivateSiteFeedbacks,
    getPublicSiteFeedbacks,
    createSiteFeedback,
    deleteSiteFeedback,
    updatePublicSiteFeedback,
    updatePrivateSiteFeedback
}
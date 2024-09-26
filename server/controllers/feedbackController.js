const { default: mongoose } = require("mongoose");
const Feedback = require("../models/Feedback");
const Order = require("../models/Order")


//*delete feedback      
const deleteFeedback = async (req, res) => {
    await Feedback.deleteOne({ orderId: req.params.id })
        .then(() => res.json({ success: true }))
        .catch((err) => res.status(404).json({ success: false }));
};


//* create new feedback
const newFeedback = async (req, res) => {

    const newFeedback = {
        orderId: req.params.id,
        CustomerID: req.body.CustomerID,
        name: req.body.name,
        deliveryFeedback: req.body.deliveryFeedback,
        rating: req.body.rating,
    };

    await Feedback.findOneAndUpdate({ orderId: req.params.id }, newFeedback, {
        upsert: true,
        new: true,
        setDefaultsOnInsert: true
    })
        .then((feedback) => res.status(200).json(feedback))
        .catch((err) => res.status(400).send(err));

    // try {
    //     const feed = await Feedback.create(newFeedback);
    //     res.status(200).json(feed);
    // } catch (err) {
    //     res.status(400).json({ err: err });
    // }
};


// update as Completed by User
//Update order as delivering
const updateasCompletedbyUser = async (req, res) => {
    updateStatus = {
        DelevaryStatus: req.body.DelevaryStatus,
    };

    await Order.findOneAndUpdate({ _id: req.params.id }, updateStatus, {
        new: true,
    })
        .then((order) => res.status(200).json(order))
        .catch((err) => res.status(400).send(err));
};





// //add new feedback
// var newFeedback = async (req, res) => {
//     newFeedback = {
//         deliveryFeedbacks: req.body.deliveryFeedbacks
//     };


//     await Delivery.findOneAndUpdate({ _id: req.params.id }, newFeedback, {
//         new: true,
//     })
//         .then((delivery) => res.status(200).json(delivery))
//         .catch((err) => res.status(400).send(err));
// };



//* find a delivery by id
const deliveryFeedbackById = async (req, res) => {
    Feedback
        .findOne({ orderId: req.params.id })
        .then(feedback => {
            console.log(feedback);
            res.status(200).json(feedback);
        })
        .catch(error => res.status(400).json({ error: error.message }));
};



// //* find a delivery by id
// const deliveryByName = async (req, res) => {
//     Feedback.find({ orderId: { $regex: req.params.orderId + ".*" } }).then(
//         (feedback) => {
//             res.json(feedback);
//         }
//     );
//! };


// update as Completed by User
// var updateasCompletedbyUser = async (req, res) => {
//     newFeedback = {
//         deliveryStatus: req.body.deliveryStatus
//     };


//     await Delivery.findOneAndUpdate({ _id: req.params.id }, newFeedback, {
//         new: true,
//     })
//         .then((delivery) => res.status(200).json(delivery))
//         .catch((err) => res.status(400).send(err));
// };



// get all feedbacks
const getAllFeedbacks = async (req, res) => {
    Feedback
        .find()
        .then(feedback => { res.status(200).json(feedback) });
}


// const getAllFeedbacks = async (req, res) => {
//     await Feedback.find()
//         .then((feedback) => res.status(200).json(feedback));
// };



//count
const countRating = async (req, res) => {
    await Feedback
        .aggregate()

        .group({

            _id: "$rating",

            count: {

                $count: {}

            }

        })

        .sort({

            _id: 1

        })

        .then(data => res.json(data))

        .catch(error => res.json({ error: error.message }));

}


module.exports = {

    newFeedback,
    deleteFeedback,
    deliveryFeedbackById,
    updateasCompletedbyUser,
    getAllFeedbacks,
    countRating,
}
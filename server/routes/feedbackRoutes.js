const express = require('express')

const { 
    newFeedback,
    deleteFeedback,
    updateasCompletedbyUser,
    deliveryFeedbackById,
    getAllFeedbacks,
    countRating,
} = require('../controllers/feedbackController');


const router = express.Router();


//*Delete a delivery
router.delete("/:id", deleteFeedback);

//*Add a new feedback
router.post("/:id", newFeedback);


//*Get a specific delivery by ID
router.get("/:id", deliveryFeedbackById);

//update the delivery feedback by user
router.patch("/deliveryStatus/:id",updateasCompletedbyUser)


//get all feedbacks
router.get("/all/feedbacks",getAllFeedbacks)

//get count rating
router.get("/rating/count",countRating);


module.exports = router;
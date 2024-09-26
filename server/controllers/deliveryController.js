const Feedback = require("../models/Feedback");
const Order = require("../models/Order")


const getReportDetails = async (req, res) => {
    let cusDetails, orderCount, completedCount, feedbackCount;
    await Order
        .find({}, { _id: 1, CustomerID: 1, Reciever_Name: 1, DelevaryStatus: 1 })
        .then(data => cusDetails = data)
        .catch(error => console.log(error));

    await Order
        .aggregate()
        .group({
            _id: "$CustomerID",
            Count: {
                $sum: 1
            }
        })
        .then(data => orderCount = data)
        .catch(error => console.log(error));

    await Order
        .aggregate()
        .match({ DelevaryStatus: "Completed" })
        .group({
            _id: "$CustomerID",
            Count: {
                $sum: 1
            }
        })
        .then(data => completedCount = data)
        .catch(error => console.log(error));

    await Feedback
        .aggregate()
        .group({
            _id: "$CustomerID",
            Count: {
                $sum: "$rating"
            }
        })
        .then(data => feedbackCount = data)
        .catch(error => console.log(error));

    let dataArray = [];
    let dataObj = {};
    for (let i = 0; i < orderCount.length; i++) {
        console.log(orderCount[i]);
        let isRead = false;

        for (let j = 0; j < cusDetails.length; j++) {
            if (orderCount[i]._id === cusDetails[j].CustomerID) {
                if (cusDetails[j].DelevaryStatus === "Completed") {

                    for (let k = 0; k < completedCount.length; k++) {
                        if (completedCount[k]._id === orderCount[i]._id) {
                            for (let l = 0; l < feedbackCount.length; l++) {
                                if (!isRead) {
                                    if (completedCount[k]._id === feedbackCount[l]._id) {
                                        dataObj = {
                                            CustomerID: orderCount[j].CustomerID,
                                            CustomerName: cusDetails[j].Reciever_Name,
                                            OrderCount: orderCount[k].Count,
                                            CompCount: completedCount[k].Count,
                                            AvgRating: feedbackCount[l].Count
                                        }
                                        isRead = true;
                                    }
                                    else {
                                        dataObj = {
                                            CustomerID: orderCount[j].CustomerID,
                                            CustomerName: cusDetails[j].Reciever_Name,
                                            OrderCount: orderCount[k].Count,
                                            CompCount: completedCount[k].Count,
                                            AvgRating: 0
                                        }
                                        isRead = true;
                                    }
                                    dataArray.push(dataObj)
                                }
                            };
                        }
                    }

                }
                else {

                    for (let j = 0; j < cusDetails.length; j++) {
                        if (orderCount[i]._id === cusDetails[j].CustomerID) {
                            if (!isRead) {
                                dataObj = {
                                    CustomerID: orderCount[i]._id,
                                    CustomerName: cusDetails[j].Reciever_Name,
                                    OrderCount: orderCount[i].Count,
                                    CompCount: 0,
                                    AvgRating: 0
                                }
                                isRead = true;
                            }
                            dataArray.push(dataObj)
                        }
                    }

                }

            };


        }

    }
    console.log(orderCount);
    // cusDetails.forEach(customer => {
    //     let isRead = fasle;
    //     if (customer.DelevaryStatus === "Completed") {
    //         orderCount.forEach(order => {

    //             if (order._id === customer.CustomerID) {
    //                 completedCount.forEach(compOrder => {
    //                     if (compOrder._id === order._id) {
    //                         feedbackCount.forEach(fbackCount => {
    //                             if (compOrder._id === fbackCount._id) {
    //                                 dataArray.push({
    //                                     CustomerID: compOrder._id,
    //                                     CustomerName: customer.Reciever_Name,
    //                                     OrderCount: order.Count,
    //                                     CompCount: compOrder.Count,
    //                                     AvgRating: fbackCount.Count
    //                                 })
    //                             }
    //                             else {
    //                                 dataArray.push({
    //                                     CustomerID: compOrder._id,
    //                                     CustomerName: customer.Reciever_Name,
    //                                     OrderCount: order.Count,
    //                                     CompCount: compOrder.Count,
    //                                     AvgRating: 0
    //                                 })
    //                             }
    //                         });
    //                     }
    //                 });
    //             }
    //         })
    //     }
    //     else {
    //         orderCount.forEach(order => {
    //             if (order._id === customer.CustomerID) {

    //                         dataArray.push({
    //                             CustomerID: order._id,
    //                             CustomerName: customer.Reciever_Name,
    //                             OrderCount: order.Count,
    //                             CompCount: 0,
    //                             AvgRating: 0
    //                         })
    //             }
    //         })
    //     }
    // });

    await res.status(200).json(dataArray);


}





module.exports = {
    getReportDetails
}
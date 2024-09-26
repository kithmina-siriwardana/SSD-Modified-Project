import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import axios from 'axios'
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"


function OrderDetails(props) {
    const { id } = useParams();

    const [CustomerID, setCustomerID] = useState('')
    const [Status, setStatus] = useState('')
    const [Date, setDate] = useState('')

    const [orderId, setorderId] = useState(id)
    const [deliveryFeedback, setdeliveryFeedback] = useState('')
    const [rating, setrating] = useState(0)
    const [name, setname] = useState('')

    const [orderProducts, setOrderProducts] = useState([]);

    const [DelevaryStatus, setDelevaryStatus] = useState('')
    const [Reciever_Name, setReciever_Name] = useState('')
    const [Shpiing_Address, setShpiing_Address] = useState('')
    const [Phone, setPhone] = useState('')



    //var customer = null
    const [order, setOrder] = useState(
        {
            CustomerID: "",
            Status: "",
            DelevaryStatus: "",
            Reciever_Name: "",
            Shpiing_Address: "",
            Phone: "",
            Date: "",
            __v: 0,
            _id: "",
            deliveredAt: ""
        })

    useEffect(() => {
        const fetchOrder = async () => {
            const response = await fetch(`/api/orders/getasingleorder/${id}`)
            const json = await response.json()
            if (response.ok) {
                setOrder(
                    {
                        CustomerID: `${json["CustomerID"]}`,
                        Status: `${json["Status"]}`,
                        DelevaryStatus: `${json["DelevaryStatus"]}`,
                        Reciever_Name: `${json["Reciever_Name"]}`,
                        Shpiing_Address: `${json["Shpiing_Address"]}`,
                        Phone: `${json["Phone"]}`,
                        Date: `${json["Date"]}`,
                        __v: 0,
                        _id: `${json["_id"]}`,
                        deliveredAt: `${json["deliveredAt"]}`
                    })
                setCustomerID(json["CustomerID"])
                setStatus(json["Status"])
                setDelevaryStatus(json["DelevaryStatus"])
                setReciever_Name(json["Reciever_Name"])
                setShpiing_Address(json["Shpiing_Address"])
                setPhone(json["Phone"])
                setDate(json["Date"])

                axios.get(`/api/v7/orderedProduct/getProductbyOrderid/${id}`)
                    .then((getData) => {
                        setOrderProducts(getData.data);
                    })
            } else {
                console.log("not ok")
            }

        }

        fetchOrder()

    }, [setOrder])



    const navigate = useNavigate();

    //disable enter feedbacks until order completed
    const [isDisable, setisDisable] = useState(true);


    const [deliveryFeedbacks, setDeliveryFeedbacks] = useState(
        ""
    );


    const [deliveryStatus, setDeliveryStatus] = useState(order.CustomerID);



    //changing the progress bar
    const [precentage, setPrecentage] = useState(0)



    //================================================================================================================================================ 

    const [message, setMessage] = useState('No feedbacks');
    const [readRating, setreadrating] = useState();
    const [updateOrInsert, setUpdateOrInsert] = useState('Add');

    const [divfeedback, setDivfeedback] = useState('none')
    const [notice, setNotice] = useState('block')

    const { oId } = useParams();

    console.log(oId);


    useEffect(() => {
        const fetchDeliveryFeedback = async () => {
            const response = await fetch(`/api/users/feedbacks/${id}`);
            const json = await response.json()
            //console.log(json["name"])
            if (response.ok) {
                //console.log("json " + json["orderId"])
                setMessage(json.deliveryFeedback)
                setreadrating("Rating : " + json.rating)
                setUpdateOrInsert("Update")
            } if (!response.ok) {
                setMessage("No feedbacks")
            }
        }
        fetchDeliveryFeedback()
    }, [])

    //================================================================================================================================================ 
    const [error, setError] = useState(null);


    const progressbar = order["DelevaryStatus"];
    const progressbarfixvalue = "Completed";


    useEffect(() => {
        if (progressbar === progressbarfixvalue) {
            setDeliveryFeedbacks(order.DeliveryFeedback);
            setDeliveryStatus(order.DelevaryStatus);
            setisDisable(false);
            setPrecentage(100);
            setDivfeedback("block")
            setNotice("none")
        } else if (progressbar === "Delivering") {
            setPrecentage(75);
        } else if (progressbar === "Not shipped") {
            setPrecentage(25);
        }

    }, [order.deliveryStatus, order.deliveryStatus, progressbar]);

    const delivery = {
        deliveryFeedbacks,
    };

    const [validation, setValidation] = useState('')
    const [validationdesc, setValidationdesc] = useState('')


    //Insert Feedback
    const handleFeedbackUpdate = async (e) => {
        e.preventDefault();

        let status = true

        if (name == Number(name)) {
            setValidation(
                <p role="alert" style={{ fontSize: "13px", marginTop: -20 }}>
                    <font color="red"><strong>Please enter a text for the Name</strong></font>
                </p>
            )
            status = false
        }
        else {
            setValidation('')

        }
        if (deliveryFeedback.length == 0) {
            setValidationdesc(
                <p role="alert" style={{ fontSize: "13px", marginTop: -25 }}>
                    <font color="red"><strong>Please enter a text</strong></font>
                </p>
            )
            status = false
        } else {
            setValidationdesc('')
        }

        if (status == true) {



            const feed = { orderId, CustomerID, name, deliveryFeedback, rating }

            const response = await fetch(`/api/users/feedbacks/${orderId}`, {
                method: 'POST',
                body: JSON.stringify(feed),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const json = await response.json();

            if (!response.ok) {
                setError(json.error);
                alert("Insert failed please try again." + error);
            }

            if (response.ok) {
                setorderId('')
                setCustomerID('')
                setdeliveryFeedback('')
                setname('')
                setrating('')
                setError(null)

                

                handleShow2()

            }

        }
    };



   


    //* Update the Completed status
    async function handlestatus() {
        const response = await fetch(`/api/users/feedbacks/deliveryStatus/${id}`, {
            method: "PATCH",
            body: JSON.stringify({ DelevaryStatus: "Completed" }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const json = await response.json();

        if (!response.ok) {
            alert("Update failed please try again.");
        }

        if (response.ok) {

            handleClose3()

            window.location.reload();
        }
    }





    

    //delete feedback    original correct---------------------------------------------------------
    const handleFeedbackdelete = async (e) => {
        e.preventDefault();

        // if (window.confirm("Do you want to delete this delivery Feedback?")) {

        const response = await fetch(`/api/users/feedbacks/${id}`, {
            method: "DELETE",
        });

        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
            alert("delete failed please try again." + error);
        }

        if (response.ok) {
            setDeliveryFeedbacks(json.deliveryFeedbacks);
            setError(null);

            handleClose()
            window.location.reload();
        }

    };




    //* Reset the form
    const handleReset = () => {
        setdeliveryFeedback("");
        setname("");
        setrating("")
        setValidation("")
        setValidationdesc("")
    };



    //rating system

    // const [rating, setrating] = useState(0);
    const [hoverStar, setHoverStar] = useState(undefined);

    const handleText = () => {
        switch (rating || hoverStar) {
            case 0:
                return "Evaluate";
            case 1:
                return "Dissatifation";
            case 2:
                return "Unsatisfied";
            case 3:
                return "Normal";
            case 4:
                return "Satisfied";
            case 5:
                return "Very Satisfied";
            default:
                return "Evaluate";
        }
    };

    const handlePlaceHolder = () => {
        switch (rating || hoverStar) {
            case 0:
                return "Comment here...";
            case 1:
            case 2:
            case 3:
            case 4:
                return "What is your problem?";
            case 5:
                return "Why do you like the product?";
            default:
                return "Comment here...";
        }
    };

    const [showModal, setShowModal] = useState(false);
    const handleClose = () => {
        setShowModal(false);
    };
    const handleShow = () => setShowModal(true);


    const [showModal2, setShowModal2] = useState(false);
    const handleClose2 = () => {
        setShowModal2(false);
        window.location.reload();
    };
    const handleShow2 = () => setShowModal2(true);

    const [showModal3, setShowModal3] = useState(false);
    const handleClose3 = () => {
        setShowModal3(false);
        window.location.reload();
    };
    const handleShow3 = () => setShowModal3(true);

    return (
        <div class="liton__wishlist-area pb-70">
            {/* modal start */}
            <Modal show={showModal} onHide={handleClose} keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ marginTop: 20, marginLeft: 20 }}>Delete Feedback</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this feedback?</Modal.Body>
                <Modal.Footer>
                    <Button variant="btn btn-outline-danger" onClick={handleFeedbackdelete}>
                        Yes
                    </Button>
                    <Button variant="btn btn-outline-success" onClick={handleClose}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>


            {/* modal end */}


            {/* modal start */}
            <Modal show={showModal2} onHide={handleClose2} keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ marginTop: 20, marginLeft: 20, fontSize: 30, textAlign: 'center' }}>success</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ marginTop: 20 }}>feedback added</Modal.Body>
                <Modal.Footer>

                    <Button variant="btn btn-outline-success" onClick={handleClose2}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>


            {/* modal end */}


            {/* modal mark as completed */}
            <Modal show={showModal3} onHide={handleClose3} keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ marginTop: 20, marginLeft: 20 }}>Recived my order</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you received the order?</Modal.Body>
                <Modal.Footer>
                    <Button variant="btn btn-outline-danger" onClick={handlestatus}>
                        Yes
                    </Button>
                    <Button variant="btn btn-outline-success" onClick={handleClose3}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>


            {/* modal end */}

            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        {/* <!-- PRODUCT TAB AREA START --> */}
                        <div class="ltn__product-tab-area">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-3">
                                        <div class="ltn__tab-menu-list mb-50">
                                            <div class="nav">
                                                <a class="active show" data-toggle="tab" href="#liton_tab_1_1">Overview</a>
                                                <a data-toggle="tab" href="#liton_tab_1_2">Tracking Info</a>
                                                <a data-toggle="tab" href="#liton_tab_1_3">Feedback</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-9">
                                        <div class="tab-content">
                                            <div class="tab-pane fade active show" id="liton_tab_1_1">
                                                <div class="ltn__myaccount-tab-content-inner">
                                                    <div class="row">
                                                        <div class="col-md-6 col-12 learts-mb-30">
                                                            <h4>Order ID <small>{id}</small></h4>
                                                            <h4>Customer ID <small>{CustomerID}</small></h4>
                                                            <h4>Status <small>{Status}</small></h4>
                                                            <h4>Date <small>{Date}</small></h4>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ltn__myaccount-tab-content-inner">
                                                    <div class="table-responsive">
                                                        <table class="table">
                                                            <thead>
                                                                <tr>
                                                                    <th>Product ID</th>
                                                                    <th>Name</th>
                                                                    <th>Quantity</th>
                                                                    <th></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {orderProducts.map((product) => (
                                                                    <tr key={product._id}>
                                                                        <td>{product.ProductID}</td>
                                                                        <td>{product.product_Name}</td>
                                                                        <td>{product.Quantity}</td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>


                                            {/* Tracking info section */}

                                            <div class="tab-pane fade" id="liton_tab_1_2">
                                                <div class="ltn__myaccount-tab-content-inner">


                                                    

                                                    <section class="section">

                                                        <div class="card-body , card">
                                                            <h5 class="card-title">Delivery Status</h5>

                                                            <div class="progress" style={{ height: "25px" }}>
                                                                <div
                                                                    style={{ style: "width:x%", height: "25px" }}
                                                                    class={`progress-bar w-${precentage}`}
                                                                    role="progressbar"
                                                                    aria-label="Example with label"
                                                                    aria-valuenow="75"
                                                                    aria-valuemin="0"
                                                                    aria-valuemax="100"
                                                                >{order["DelevaryStatus"]}</div>
                                                            </div>



                                                            <div style={{ marginTop: 30 }}>

                                                                <p>Order ID : {id}</p>
                                                                <p>Reciver Name : {order.Reciever_Name}</p>
                                                                <p>Status :  {order.DelevaryStatus}</p>
                                                                <p>Ordered Date : {order.Date}</p>
                                                                <p>Address : {order.Shpiing_Address}</p>
                                                                {/* <p>Address : {order["deliveryAddress"]}</p> */}

                                                                <div >

                                                                    <button style={{ float: "right" }} type="button" className="btn btn-success" onClick={handleShow3}>
                                                                        Mark as completed
                                                                    </button>
                                                                </div>

                                                            </div>


                                                        </div>

                                                    </section>

                                                </div>
                                            </div>

                                            {/* Feedback secction */}
                                            <div class="tab-pane fade" id="liton_tab_1_3" >

                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <section className="section">
                                                            <div className="row">

                                                                <div style={{ display: notice }}>
                                                                    <h5>You need to receive your order to add feedback</h5>
                                                                </div>


                                                                <div className="card" style={{ display: divfeedback }}>
                                                                    <div className="card-body">
                                                                        <h5 className="card-title">{updateOrInsert} your feedback</h5>

                                                                       

                                                                        {/* <!-- Vertical Form --> */}

                                                                        <form className="row g-3" onSubmit={handleFeedbackUpdate}>


                                                                            <div className="col-12">



                                                                                <label for="inputFID" className="form-label">
                                                                                    Order ID
                                                                                </label>
                                                                                <input
                                                                                    type="text"
                                                                                    className="form-control"
                                                                                    id="inputFName"
                                                                                    value={orderId}
                                                                                    disabled
                                                                                />


                                                                                <input
                                                                                    type="hidden"
                                                                                    className="form-control"
                                                                                    id="inputFName"
                                                                                    value={CustomerID}
                                                                                    disabled
                                                                                />


                                                                                <label for="inputFName" className="form-label">
                                                                                    Name
                                                                                </label>
                                                                                <input
                                                                                    // style={{ height: 100 }}
                                                                                    type="text"
                                                                                    className="form-control"
                                                                                    id="deliveryFeedbacks"
                                                                                    onChange={(e) => {
                                                                                        setname(e.target.value);
                                                                                    }}
                                                                                    value={name}
                                                                                    required
                                                                                    disabled={isDisable}
                                                                                />
                                                                                {validation}



                                                                                <h4>{handleText()}</h4>
                                                                                {Array(5)
                                                                                    .fill()
                                                                                    .map((_, index) =>
                                                                                        rating >= index + 1 || hoverStar >= index + 1 ? (
                                                                                            <AiFillStar
                                                                                                onMouseOver={() => !rating && setHoverStar(index + 1)}
                                                                                                onMouseLeave={() => setHoverStar(undefined)}
                                                                                                style={{ color: "orange" }}
                                                                                                size={32}
                                                                                                onClick={() => setrating(index + 1)}
                                                                                            />
                                                                                        ) : (
                                                                                            <AiOutlineStar
                                                                                                onMouseOver={() => !rating && setHoverStar(index + 1)}
                                                                                                onMouseLeave={() => setHoverStar(undefined)}
                                                                                                style={{ color: "orange" }}
                                                                                                size={32}
                                                                                                onClick={() => setrating(index + 1)}
                                                                                            />
                                                                                        )
                                                                                    )}

                                                                                <textarea placeholder={handlePlaceHolder()} id="deliveryFeedbacks"
                                                                                    onChange={(e) => {
                                                                                        setdeliveryFeedback(e.target.value);
                                                                                    }}
                                                                                    value={deliveryFeedback}

                                                                                    disabled={isDisable}></textarea>
                                                                                {/* <button className={` ${!rating && "disabled"} `}>Submit</button> */}

                                                                                {validationdesc}







                                                                            </div>

                                                                            <div className="col-12">
                                
                                                                            </div>


                                                                            <button
                                                                                type="submit"
                                                                                className="btn btn-primary"
                                                                                style={{ alignItems: 'center', marginLeft: "18px" }}
                                                                                disabled={isDisable}
                                                                            >{updateOrInsert} Feedback
                                                                            </button>
                                                                            <button
                                                                                type="button"
                                                                                className="btn btn-secondary"
                                                                                style={{ marginLeft: "20px" }}
                                                                                onClick={handleReset}
                                                                                disabled={isDisable}
                                                                            >
                                                                                Reset
                                                                            </button>



                                                                        </form>
                                                                        {/* <!-- Vertical Form --> */}
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-4"></div>
                                                            </div>
                                                        </section>
                                                    </div>








                                                    



                                                    <div class="col-lg-6" style={{ display: divfeedback }}>
                                                        <div class="card">
                                                            <div class="card-body">
                                                                <h5 class="card-title">My Feedback</h5>
                                                                <div style={{ backgroundColor: "#d3e9ff", borderRadius: 5, height: 150 }}>
                                                                    <p style={{ padding: 15 }}>
                                                                        {message}
                                                                    </p>
                                                                    <h5 style={{ paddingLeft: 15 }}> {readRating}</h5>


                                                                </div>
                                                                <button type="button" class="btn btn-danger" onClick={handleShow} style={{ marginTop: 30 }}>
                                                                    delete
                                                                </button>



                                                            </div>
                                                        </div>
                                                    </div>



                                                </div>





                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default OrderDetails;
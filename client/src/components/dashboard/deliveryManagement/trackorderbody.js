import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Bodycontent(props) {
    const { id } = useParams();
    const navigate = useNavigate();

    const [isDisable,setisDisable] = useState(true); //disable enter feedbacks until order completed
    const [deliveryFeedbacks, setDeliveryFeedbacks] = useState("");
    const [deliveryStatus, setDeliveryStatus] = useState(props.deliveryStatus);
    
    const [precentage,setPrecentage] = useState(0) //changing the progress bar

    //fetch data
    const [deliveryFeadback, setDeliveryFeadback] = useState(
        {
        orderId: "",
        customerUserName: "",
        deliveryAddress: "",
        deliveryDate: "",
        deliveryStatus: "",
        deliveryFeedbacks: "",
        })
      useEffect(() => {
        const fetchDeliveryFeedback = async () => {
          const response = await fetch(`/api/users/feedbacks/${id}`)
          const json = await response.json()
          if (response.ok) {
            console.log("json "+json["orderId"])
            setDeliveryFeadback(
              {
                orderId: `${json["orderId"]}`,
                customerUserName: `${json["customerUserName"]}`,
                deliveryAddress: `${json["deliveryAddress"]}`,
                deliveryDate: `${json["deliveryDate"]}`,
                deliveryStatus  : `${json["deliveryStatus"]}`,
                deliveryFeedbacks: `${json["deliveryFeedbacks"]}`,
              })
          } else{
            console.log("not ok")
          }
           
        }
    
        fetchDeliveryFeedback()
        
      }, [setDeliveryFeadback])


    const [error, setError] = useState(null);

    
    
    
    const progressbar = deliveryFeadback["deliveryStatus"];
    const progressbarfixvalue = "Completed";


    useEffect(() => {
        
        
        if(progressbar === progressbarfixvalue){
        
       
            setDeliveryFeedbacks(deliveryFeadback.deliveryFeedbacks);
            setDeliveryStatus(deliveryFeadback.deliveryStatus);
            setisDisable(false);
            setPrecentage(100);
   
        }else if(progressbar === "Delivering"){
            
            setPrecentage(75);
        }else{
            setPrecentage(25);

        }
        
        
        

    }, [deliveryFeadback.deliveryFeedbacks, props.deliveryStatus,progressbar]);

    const delivery = {
        deliveryFeedbacks,
    };



    










    //update Feedback
    const handleFeedbackUpdate = async (e) => {
        e.preventDefault();

        const response = await fetch(`/api/users/feedbacks/${id}`, {
            method: "PATCH",
            body: JSON.stringify(delivery),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
            alert("Update failed please try again." + error);
        }

        if (response.ok) {
            setDeliveryFeedbacks(json.deliveryFeedbacks);
            setError(null);

            if (
                !window.confirm(
                    "Supplier details updated successfully. Do you want to do more changes?"
                )
            ) {
                navigate("/suppliers");
            }
        }
    };



//update as completed by user
const handlestatus = async (e) => {
    e.preventDefault();

    const response = await fetch(`/api/users/feedbacks/deliveryStatus/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ deliveryStatus: "Completed" }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    const json = await response.json();

    if (!response.ok) {
        setError(json.error);
        alert("failed please try again." + error);
    }

    if (response.ok) {
        setDeliveryFeedbacks(json.deliveryFeedbacks);
        setError(null);

        if (
            !window.confirm(
                "Congrats! You recived the order"
            )
        ) {
            // navigate("/");
        }
    }
};
    




    //* Delete deliver records
    const handleDeletedeliveryrecode = async () => {
        if (window.confirm("Do you want to delete this delivery records?")) {
            const response = await fetch(`/api/users/feedbacks/${id}`, {
                method: "DELETE",
            });

            const json = await response.json;

            if (response.ok) {
                alert("Successfully Deleted the delivery records");
                window.location.reload();
            }

            if (!response.ok) {
                setError(json.error);
                alert("Failed to remove the delivery records." + error);
                window.location.reload();
            }
        }
    };


    //delete feedback
    const handleFeedbackdelete = async (e) => {
        e.preventDefault();

        if (window.confirm("Do you want to delete this delivery Feedback?")){

            const response = await fetch(`/api/users/feedbacks/${id}`, {
                method: "PATCH",
                body: JSON.stringify({ deliveryFeedbacks: "" }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
    
            const json = await response.json();
    
            if (!response.ok) {
                setError(json.error);
                alert("delete failed please try again." + error);
            }
    
            if (response.ok) {
                setDeliveryFeedbacks(json.deliveryFeedbacks);
                setError(null);
    
                if (
                    !window.confirm(
                        "Feedback deleted successfully"
                    )
                ) {
                    // navigate("/");
                }
            }

        }
        
    };




    //* Reset the form
    const handleReset = () => {
        setDeliveryFeedbacks("");
    };


    

    const deliveryStatusw = "Complete"
    return (
        <main
            id="main"
            className="main"
            style={{
                position: "absolute",
                top: 0,
                right: 80,
                height: 150,
                width: "90%",
                marginLeft: 370,
            }}
        >

            <section class="section">
                
                <div class="card-body , card">
                    <h5 class="card-title">Delivery Status</h5>
                    <button style={{width:42, marginLeft:1220, marginTop:-50, marginBottom: 50 , backgroundColor:"transparent", color:"blue" }} type="button" class="btn btn-link" onClick={handleDeletedeliveryrecode}>
                                    <i class="bi bi-trash3"></i>
                                </button>
                    <div class="progress" style={{height: "25px"}}>
                        <div
                        style={{style: "width:x%", height: "25px"}}
                            class={`progress-bar w-${precentage}`}
                            role="progressbar"
                            aria-label="Example with label"
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >{deliveryFeadback["deliveryStatus"]}</div>
                    </div>

                    

                    <div style={{ marginTop: 30 }}>

                    <p>User Name : {deliveryFeadback["customerUserName"]}</p>
                    <p>Delivery ID : {id}</p>
                        <p>Status :  {deliveryFeadback["deliveryStatus"]}</p>
                        <p>Ordered Date : {deliveryFeadback["deliveryDate"]}</p>
                        <p>Address : {deliveryFeadback["deliveryAddress"]}</p>
                        
                        <div style={{ marginLeft: 950 }}>
                            
                        <button style={{ float: "right"}} type="button" className="btn btn-success" onClick={handlestatus}>
                                                            Mark as completed
                                                        </button>
                        </div>
                        
                        </div>
                    
                    
                </div>
                
            </section>

            <section class="section">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">My Feedback</h5>
                                <div style={{backgroundColor : "#f8f9fa", height: 100, borderRadius:5}}>
                                <p style={{padding:10}}>
                                {deliveryFeadback["deliveryFeedbacks"]}
                                </p>
                                </div>
                                <br>
                                </br>
                                <br></br>

                                <button style={{width:42, marginLeft:550 ,backgroundColor:"transparent", color:"blue" }} type="button" class="btn btn-link" onClick={handleFeedbackdelete}>
                                    <i class="bi bi-trash3"></i>
                                </button>
                            </div>
                        </div>
                    </div>


                     
                        <div class="col-lg-6">
                            <section className="section">
                                <div className="row">
                                    <div className="col-lg-4"></div>
                                    <div className="col-lg-12">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">Add or update your feedback</h5>

                                                {error && (
                                                    <div
                                                        className="alert alert-danger alert-dismissible fade show"
                                                        role="alert"
                                                    >
                                                        {error}
                                                        <button
                                                            type="button"
                                                            className="btn-close"
                                                            data-bs-dismiss="alert"
                                                            aria-label="Close"
                                                        ></button>
                                                    </div>
                                                )}

                                                {/* <!-- Vertical Form --> */}
                                                <form
                                                    className="row g-3"
                                                    onSubmit={
                                                        props.buttonName === "submit"
                                                            ? "":""
                                                    }
                                                >
                                                    <div className="col-12">
                                                        <label for="inputFID" className="form-label">
                                                            Delivery ID
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="inputFName"
                                                            value={id}
                                                            disabled={isDisable}
                                                        />
                                                    </div>

                                                    <div className="col-12">
                                                        <label for="inputFName" className="form-label">
                                                            Feedback
                                                        </label>
                                                        <input
                                                            style={{ height: 100 }}
                                                            type="text"
                                                            className="form-control"
                                                            id="deliveryFeedbacks"
                                                            onChange={(e) => {
                                                                setDeliveryFeedbacks(e.target.value);
                                                            }}
                                                            value={deliveryFeedbacks}
                                                            required
                                                            disabled={isDisable}
                                                        />
                                                    </div>

                                                    <div className="text-center">
                                                        <button
                                                            type="submit"
                                                            className="btn btn-primary"
                                                            style={{ marginLeft: 10 }}
                                                            onClick={handleFeedbackUpdate}
                                                        >
                                                            {props.buttonName}Add Feedback
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
                                                        {props.buttonName === "Update Supplier" ? (
                                                            <button
                                                                type="button"
                                                                className="btn btn-danger"
                                                                style={{ margin: "20px" }}
                                                                disabled={isDisable}
                                                            >
                                                                Delete
                                                            </button>
                                                        ) : null}
                                                    </div>
                                                </form>
                                                {/* <!-- Vertical Form --> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4"></div>
                                </div>
                            </section>
                        </div>
                   

                </div>
            </section>
        </main>
    );
}
export default Bodycontent;

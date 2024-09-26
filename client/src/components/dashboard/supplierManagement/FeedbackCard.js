import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/esm/Modal";
import { useParams } from "react-router-dom";
const moment = require('moment');

function FeedbackCard(props) {

    const { id } = useParams();

    const [data, setData] = useState();
    const [error, setError] = useState();
    const [isChanged, setIsChanged] = useState(false);

    //* Modal Popup
    const [show, setShow] = useState(false);
    const [popupHead, setPopupHead] = useState();
    const [popupMsg, setPopupMsg] = useState("");

    const handleClose = () => {
        setShow(false)
        setIsChanged(true)
        console.log("handle close")
    };
    const handleShow = () => setShow(true);



    useEffect(() => {
        const getPaymentData = async () => {
            const response = await fetch(`/api/supplierfeedbacks/${id}`);
            const json = await response.json();

            if (response.ok) {
                setData(json);
            }

            if (!response.ok) {
                setError(json.error);
                console.log(error);
            }
        }

        getPaymentData();   
        setIsChanged(false)

    }, [error, isChanged]);

    const handleDelete = async (id) => {

        const response = await fetch(`/api/supplierfeedbacks/${id}`, {
            method: "DELETE",
        });

        const json = await response.json();

        if (response.ok) {
            setPopupHead("Feedback");
            setPopupMsg(json.message);           
            handleShow();
        }

        if (!response.ok) {
            setError(json.error);
            setPopupHead("Feedback");
            setPopupMsg(`Error : ${error}`)
            handleShow();
        }
    }


    return (
        <>

            {/* Modal Popup */}
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{popupHead}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{popupMsg}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        OK
                    </Button>              
                </Modal.Footer>
            </Modal>

            <div className="row">
                {data && data.map(feedback =>

                    <div className="col-lg-6 col-md-6" key={feedback._id}>
                        <div
                            className="card tab-pane fade show active profile-overview"
                            id="profile-overview" style={{ padding: "50px" }}>
                            <div className="row">
                                <div className="">Posted : {moment(feedback.createdAt).format('DD-MM-YYYY')}</div>
                            </div>
                            <div className="row">
                                <div className="">Feedback : {feedback.feedback}</div>
                            </div>
                            <div className="text-center">
                                <button className="btn btn-danger" style={{ float: "right", margin: "0 20px" }} onClick={() => { handleDelete(feedback._id) }}><i className="bi bi-trash-fill"></i><span style={{ color: "#FFF" }}></span></button>
                            </div>
                        </div>

                    </div>
                )}
            </div>
        </>
    )
}

export default FeedbackCard;
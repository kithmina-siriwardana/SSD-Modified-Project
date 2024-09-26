import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function FeedbackForm(props) {
    const { id } = useParams();

    //* Modal Popup
    const [show, setShow] = useState(false);
    const [popupHead, setPopupHead] = useState();
    const [popupMsg, setPopupMsg] = useState("");
    const [error, setError] = useState("");
    const [feedback, setFeedback] = useState();



    const handleClose = () => {
        setShow(false)
        window.location.reload();
        console.log("handle close")
    };
    const handleShow = () => setShow(true);


    const newFeedback = {
        id,
        feedback
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(`/api/supplierfeedbacks`, {
            method: "POST",
            body: JSON.stringify(newFeedback),
            headers: {
                "Content-Type": "application/json",
            }
        });

        const json = await response.json();

        if (response.ok) {
            setPopupHead("Feedback")
            setPopupMsg("Successfully Posted")
            handleShow();
        }

        if (!response.ok) {
            console.log(json);
            setPopupHead("Feedback")
            setPopupMsg("Error : " + json.error)
            handleShow();
        }

    }

    return (
        <section className="section">

            {/* Modal Popup */}
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{popupHead}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{popupMsg}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>

            <div className="row">
                <div className="col-6">
                    <div className="card" style={{ padding: "50px" }}>
                        <div className="card-body">
                            <h1>{props.formName}</h1>
                            <br />
                            <form className="row g-3"
                                onSubmit={handleSubmit}>
                                <div className="col-md-12">
                                    <label htmlFor="Feedback" className="form-label">
                                        Feedback
                                    </label>
                                    <textarea
                                        type="text"
                                        className="form-control"
                                        rows={5}
                                        cols={5}
                                        onChange={(e) => {
                                            setFeedback(e.target.value);
                                        }}
                                        value={feedback}
                                        required
                                    />
                                </div>

                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        style={{ margin: "20px" }}
                                    >
                                        Post
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
export default FeedbackForm;

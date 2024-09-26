import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function SupplierPaymentForm(props) {

    const navigate = useNavigate();


    const [supplierName, setSupplierName] = useState();
    const [rawMaterial, setRawMaterial] = useState();
    const [unitPrice, setUnitPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [senderBankName, setSenderBankName] = useState();
    const [senderBankAccountNo, setSenderBankAccountNo] = useState();
    const [receiverBankName, setReceiverBankName] = useState();
    const [receiverBankBranch, setReceiverBankBranch] = useState();
    const [receiverBankAccountNo, setReceiverBankAccountNo] = useState();
    const [amount, setAmount] = useState(0);
    const [transactionDate, setTransactionDate] = useState();
    const [paymentReferenceNo, setPaymentReferenceNo] = useState();

    const [suppliers, setSuppliers] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        const getSupNames = async () => {
            const response = await fetch('api/suppliers/names/name');
            const json = await response.json();

            if (response.ok) {
                setSuppliers(json);
            }

            if (!response.ok) {
                setError(json.error);
                console.log(error);
            }
        };

        getSupNames();
    }, []);


    useEffect(() => {

        suppliers && suppliers.map((supplier) => {
            if (supplier.companyName === supplierName) {
                setRawMaterial(supplier.rawMaterial)
                setReceiverBankName(supplier.bankName);
                setReceiverBankBranch(supplier.bankBranch);
                setReceiverBankAccountNo(supplier.bankAccountNo);
            }
        })

    }, [supplierName, suppliers]);

    useEffect(() => {
        setAmount(Number(unitPrice) * Number(quantity));
    }, [unitPrice, quantity]);

    //* Modal Popup
    const [show, setShow] = useState(false);
    const [popupHead, setPopupHead] = useState();
    const [popupMsg, setPopupMsg] = useState("");
    const [quantityAlert, setQuantityAlert] = useState("");
    const [unitPriceAlert, setUnitPriceAlert] = useState("");

    const handleClose = () => {
        setShow(false)
    };


    //*Frontend Validation
    //*Validate unitPrice
    function checkUnitPrice() {
        if (isNaN(Number(unitPrice))) {
            return true;
        }
        else if (Number(unitPrice) < 0) {
            return true;
        }
        else {
            return false;
        }
    };

    //*Validate quantity
    function checkQuantity() {
        if (isNaN(Number(quantity))) {
            return true;
        }
        else if (Number(quantity) < 0) {
            return true;
        }
        else {
            return false;
        }
    }

    //* Validation before submit
    const isValid = () => {

        setQuantityAlert(checkQuantity());
        setUnitPriceAlert(checkUnitPrice());

        console.log(checkQuantity() + "  +  " + checkUnitPrice());

        if (checkQuantity() || checkUnitPrice()) {
            return false;
        }
        else {
            return true;
        }
    }


    //* Add Supplier Payment
    const handleAdd = async (e) => {
        e.preventDefault();

        console.log(isValid());
        if (isValid()) {
            const supplierPayment = {
                supplierName,
                rawMaterial,
                unitPrice,
                quantity,
                senderBankName,
                senderBankAccountNo,
                receiverBankName,
                receiverBankBranch,
                receiverBankAccountNo,
                amount,
                transactionDate,
                paymentReferenceNo
            }


            const response = await fetch("/api/supplier-payment", {
                method: "POST",
                body: JSON.stringify(supplierPayment),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const json = await response.json();

            if (!response.ok) {
                setError(json.error);
                setPopupHead("Insertion Failed.");
                setPopupMsg(`Error: ${error} \nDo you want to try again?`);
            }

            if (response.ok) {
                handleReset();
                setError(null);

                setPopupHead("Successfuly added the supplier payment");
                setPopupMsg("Do you want to add more payment details?");

                handleShow();
            }
        }
        else {
            console.log(isValid());
            return isValid();
        }
    }

    const handleShow = () => setShow(true);

    //* Reset Form
    const handleReset = () => {
        setSupplierName("");
        setRawMaterial("");
        setUnitPrice("");
        setQuantity("");
        setSenderBankName("");
        setSenderBankAccountNo("");
        setReceiverBankName("");
        setReceiverBankBranch("");
        setReceiverBankAccountNo("");
        setAmount("");
        setTransactionDate("");
        setPaymentReferenceNo("");
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
                        Yes
                    </Button>
                    <Button variant="danger" onClick={() => {
                        navigate("/suppliers");
                    }}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>


            <div className="row">
                <div className="col-12">
                    <div className="card" style={{ padding: "50px" }}>
                        <div className="card-body">
                            <h1>{props.formName}</h1>
                            <br />
                            <form className="row g-3" onSubmit={handleAdd}>
                                <h2 className="col-md-12">Payment Details</h2>
                                <div className="col-md-4">
                                    <label htmlFor="SupplierName" className="form-label">
                                        Supplier Name
                                    </label>
                                    <select className="form-select" value={supplierName} onChange={(e) => setSupplierName(e.target.value)}>
                                        <option  selected>---Choose---</option>
                                        {suppliers && suppliers.map((supplier) => {
                                            return (<option value={supplier.companyName} >{supplier.companyName}</option>)
                                        })}
                                    </select>

                                </div>

                                <div className="col-md-4">
                                    <label htmlFor="rawMaterial" className="form-label">
                                        Raw Material
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="rawMaterial"
                                        onChange={(e) => {
                                            setRawMaterial(e.target.value);
                                        }}
                                        value={rawMaterial}
                                        required
                                        disabled
                                        readOnly
                                    />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="UnitPrice" className="form-label">
                                        Unit Price
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="companyTpNo"
                                        onChange={(e) => {
                                            setUnitPrice(e.target.value);
                                        }}
                                        value={unitPrice}
                                        required
                                    />
                                    {unitPriceAlert ? (
                                        <div class="alert alert-danger" role="alert">
                                            Invalid Value. Enter a positive number
                                        </div>
                                    ) : null}
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="QTY" className="form-label">
                                        Quantity
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="qty"
                                        onChange={(e) => {
                                            setQuantity(e.target.value);
                                        }}
                                        value={quantity}
                                        required
                                    />
                                    {quantityAlert ? (
                                        <div class="alert alert-danger" role="alert">
                                            Invalid Value. Enter a positive number
                                        </div>
                                    ) : null}
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="Amount" className="form-label">
                                        Amount
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="amount"
                                        onChange={(e) => {
                                            setAmount(e.target.value);
                                        }}
                                        value={amount}
                                        required
                                        readOnly
                                    />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="TransactionDate" className="form-label">
                                        Transaction Date
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="transactionDate"
                                        onChange={(e) => {
                                            setTransactionDate(e.target.value);
                                        }}
                                        value={transactionDate}
                                        required
                                    />

                                </div>

                                <div className="col-md-4">
                                    <label htmlFor="PaymentReferenceNo" className="form-label">
                                        Payment Reference Number
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="paymentReferenceNo"
                                        onChange={(e) => {
                                            setPaymentReferenceNo(e.target.value);
                                        }}
                                        value={paymentReferenceNo}
                                        required
                                    />
                                </div>

                                {/* Sender's  Details*/}
                                <h2 className="col-md-12">Sender's Bank Details</h2>
                                <div className="col-md-3">
                                    <label htmlFor="SenderBankName" className="form-label">
                                        Sender's Bank Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="comAddress"
                                        onChange={(e) => {
                                            setSenderBankName(e.target.value);
                                        }}
                                        value={senderBankName}
                                        required
                                    />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="ContactPersonName" className="form-label">
                                        Sender's Bank Account Number
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="senderBankAccountNo"
                                        onChange={(e) => {
                                            setSenderBankAccountNo(e.target.value);
                                        }}
                                        value={senderBankAccountNo}
                                        required
                                    />
                                </div>

                                <h2 className="col-md-12">Reciever's Bank Details</h2>

                                <div className="col-md-4">
                                    <label htmlFor="ReceiverBankName" className="form-label">
                                        Receiver's Bank Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="receiverBankName"
                                        value={receiverBankName}
                                        required
                                        readOnly
                                        disabled
                                    />
                                </div>

                                <div className="col-md-4">
                                    <label htmlFor="RecieverBankBranch" className="form-label">
                                        Receiver's Bank Branch
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="receiverBankBranch"
                                        value={receiverBankBranch}
                                        required
                                        readOnly
                                        disabled
                                    />
                                </div>

                                <div className="col-md-4">
                                    <label htmlFor="ReceiverBankAccountNo" className="form-label">
                                        Receiver's Bank Account Number
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="receiverBankAccountNo"
                                        value={receiverBankAccountNo}
                                        required
                                        readOnly
                                        disabled
                                    />
                                </div>
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        style={{ margin: "20px" }}
                                    >
                                        {props.buttonName}
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        style={{ margin: "20px" }}
                                        onClick={handleReset}
                                    >
                                        Reset
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
export default SupplierPaymentForm;

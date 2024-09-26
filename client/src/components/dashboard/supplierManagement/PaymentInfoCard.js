import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const moment = require('moment');

function PaymentInfoCard() {

    const [data, setData] = useState();
    const [error, setError] = useState();
    const { name } = useParams();

    useEffect(() => {

        const getPaymentData = async () => {
            const response = await fetch(`/api/supplier-payment/payment-data/${name}`);
            const json = await response.json();

            if (response.ok) {
                setData(json);
                console.log(json);

            }

            if (!response.ok) {
                setError(json.error);
                console.log(error);
            }
        }

        getPaymentData();

    }, [])

    return (
        <>
            <div>
                <h1 style={{ margin: "15px 0" }} className="row">{name}</h1>
                {data && data.map(details =>
                    <div class="col-lg-12 col-md-12">
                        <div
                            class="card tab-pane fade show active profile-overview"
                            id="profile-overview" style={{ padding: "50px" }}>
                            <div className="row">
                                <div className="col-4">
                                    <h4 class="card-title">Transaction Details</h4>

                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 label">Raw Material</div>
                                        <div class="col-lg-6 col-md-6" style={{textAlign:"end"}}>{details.rawMaterial}</div>
                                    </div>

                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 label">Unit Price</div>
                                        <div class="col-lg-6 col-md-6" style={{textAlign:"end"}}>{details.unitPrice}</div>
                                    </div>

                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 label">Quantity</div>
                                        <div class="col-lg-6 col-md-6" style={{textAlign:"end"}}>{details.quantity}</div>
                                    </div>

                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 label">Amount</div>
                                        <div class="col-lg-6 col-md-6" style={{textAlign:"end"}}>{details.amount}</div>
                                    </div>

                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 label">Reference Number</div>
                                        <div class="col-lg-6 col-md-6" style={{textAlign:"end"}}>{details.paymentReferenceNo}</div>
                                    </div>

                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 label">Transaction Date</div>
                                        <div class="col-lg-6 col-md-6" style={{textAlign:"end"}}>{moment(details.transactionDate).format('DD - MM - YYYY')}</div>
                                    </div>

                                </div>
                                <div className="col-4">
                                    <h4 class="card-title">Sender's Details</h4>

                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 label">Bank Name</div>
                                        <div class="col-lg-6 col-md-6" >{details.senderBankName}</div>
                                    </div>

                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 label">Bank Account Number</div>
                                        <div class="col-lg-6 col-md-6">{details.senderBankAccountNo}</div>
                                    </div>

                                </div>
                                <div className="col-4">
                                    <h4 class="card-title">Reciever's Details</h4>

                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 label">Bank Name</div>
                                        <div class="col-lg-6 col-md-6">{details.receiverBankName}</div>
                                    </div>

                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 label">Bank Branch</div>
                                        <div class="col-lg-6 col-md-6">{details.receiverBankBranch}</div>
                                    </div>

                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 label">Bank Account Number</div>
                                        <div class="col-lg-6 col-md-6">{details.receiverBankAccountNo}</div>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                )
                }
            </div>
        </>
    )
}

export default PaymentInfoCard;
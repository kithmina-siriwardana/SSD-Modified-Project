import React, { useEffect, useState } from "react";

function SupplierInfoCard(props) {
    const [companyName, setCompanyName] = useState("");
    const [companyPhoneNo, setCompanyPhoneNo] = useState("");
    const [brNo, setBrNo] = useState("");
    const [rawMaterial, setRawMaterial] = useState("");
    const [companyAddress, setCompanyAddress] = useState("");
    const [contactPersonName, setContactPersonName] = useState("");
    const [contactPersonPhoneNo, setContactPersonPhoneNo] = useState("");
    const [contactPersonEmail, setcontactPersonEmail] = useState("");
    const [bankName, setBankName] = useState("");
    const [bankBranch, setBankBranch] = useState("");
    const [bankAccountNo, setBankAccountNo] = useState("");
    const [error, setError] = useState(null);

    useEffect(() => {

        const getSupplier = async () => {
            const response = await fetch(`/api/suppliers/${props.id}`);
            const json = await response.json();

            if (response.ok) {
                setCompanyName(json.companyName);
                setCompanyPhoneNo(json.companyPhoneNo);
                setBrNo(json.brNo);
                setRawMaterial(json.rawMaterial);
                setCompanyAddress(json.companyAddress);
                setContactPersonName(json.contactPersonName);
                setContactPersonPhoneNo(json.contactPersonPhoneNo);
                setcontactPersonEmail(json.contactPersonEmail);
                setBankName(json.bankName);
                setBankBranch(json.bankBranch);
                setBankAccountNo(json.bankAccountNo)
            }
            if (!response.ok) {
                console.log(json.error);
            }

        }

        getSupplier();


    }, []);

    return (
        <div
            className="card tab-pane fade show active profile-overview"
            id="profile-overview" style={{ padding: "50px" }}>
            <h2 className="">{companyName}</h2>

            <div className="row">
                <div className="col-4">
                    <h4 className="card-title">Company Details</h4>

                    <div className="row">
                        <div className="col-lg-6 col-md-4 label">Raw Material</div>
                        <div className="col-lg-6 col-md-8">{rawMaterial}</div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-4 label">Phone Number</div>
                        <div className="col-lg-6 col-md-8">{companyPhoneNo}</div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-4 label">BR Number</div>
                        <div className="col-lg-6 col-md-8">{brNo}</div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-4 label">Company Address</div>
                        <div className="col-lg-6 col-md-8">{companyAddress}</div>
                    </div>
                </div>

                <div className="col-4 border-dark border-start border-end ">
                    <h4 className="card-title">Contact Person Details</h4>

                    <div className="row">
                        <div className="col-lg-6 col-md-4 label">Contact Person Name</div>
                        <div className="col-lg-6 col-md-8">{contactPersonName}</div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-4 label">Contact Number</div>
                        <div className="col-lg-6 col-md-8">{contactPersonPhoneNo}</div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-4 label">E - mail</div>
                        <div className="col-lg-6 col-md-8">{contactPersonEmail}</div>
                    </div>
                </div>

                <div className="col-4">
                    <h4 className="card-title">Bank Details</h4>

                    <div className="row">
                        <div className="col-lg-6 col-md-4 label">Bank Name</div>
                        <div className="col-lg-6 col-md-8">{bankName}</div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-4 label">Branch</div>
                        <div className="col-lg-6 col-md-8">{bankBranch}</div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-4 label">Account Number</div>
                        <div className="col-lg-6 col-md-8">{bankAccountNo}</div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default SupplierInfoCard;
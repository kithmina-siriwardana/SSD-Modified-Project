import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import Axios from 'axios';
const moment = require('moment');

function FullOrderReport (){
    const [apiData,setApiData] = useState([]);
    const [productData, setProductData] = useState([]);


    const [error, setError] = useState();
    const { id } = useParams();

      

    useEffect(()=>{
        
        const getOrderData = async () => {
            const response = await fetch (`/api/v6/orders/getasingleorder/${id}`);
            const json = await response.json();


            if(response.ok){
                setApiData(json);
                console.log(json);
            }
            if (!response.ok) {
                setError(json.error);
            }
        }
        getOrderData();
        
    },[])


    useEffect(()=>{
        
        const getProductData = async () => {
            const response = await fetch (`/api/v7/orderedProduct/getProductbyOrderid/${id}`);
            const json = await response.json();

            console.log("Data aawa uttoooooooooooo");

            if(response.ok){
                setProductData(json[0]);
                console.log(json);
            }
            if (!response.ok) {
                setError(json.error);
            }
        }
        getProductData();
    }, [])

    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();


    
    return (
        <>
            <div className="col-12">
                <div className="row" style={{ margin: "60px 0 30px" }}>
                    <div className="col-12">
                        <img src="https://i.ibb.co/c6HQzff/jiffy-logo.png" style={{ width: "20%", height: "auto", margin: "20px 0 20px 0"}} alt="jiffy-logo" />

                        <span style={{ margin: "0 0 0 50%", fontWeight:"800"}}>Generated Date : {`${day} - ${month} - ${year}`} </span>

                        <h1 style={{ margin: "20px 0 0 0", textAlign:"center", fontWeight:"600" }}>Costomer Order Report</h1>
                    </div>
                </div>
                <div className="row" >
                    <div className="col-12">

                        <h2 style={{ margin: "20px 0"}}> {`Customer Name : `}{apiData.Reciever_Name} </h2>
                        <h2 style={{ margin: "20px 0"}}> {`Customer ID  : `} {apiData.CustomerID} </h2>

                        <table className="table col-md-6">
                            <thead className="table-secondary" style={{ textAlign: "right" }}>
                                <tr>
                                    <th style={{ width: "30%" }} scope="col">Order ID</th>
                                    <th style={{ width: "20%" }} scope="col">Placed On</th>
                                    <th style={{ width: "20%" }} scope="col">Shiping Address</th>
                                    <th style={{ width: "10%" }} scope="col">Status</th>
                                    <th style={{ width: "20%" }} scope="col">ProductID</th>
                                    <th style={{ width: "20%" }} scope="col">Quantitiy</th>
                                </tr>
                            </thead>
                            <tbody className="table-light">
                            
                                        
                                        
                                            {productData&&apiData?<tr key={apiData._id}>
                                                <td style={{ textAlign: "right" }}>{apiData._id}</td>
                                                <td style={{ textAlign: "right" }}>{moment(apiData.Date).format('DD MMMM YYYY')}</td>
                                                <td style={{ textAlign: "right" }}>{apiData.Shpiing_Address}</td>
                                                <td style={{ textAlign: "right" }}>{apiData.Status}</td>
                                                <td style={{ textAlign: "right" }}>{productData.product_Name }</td> 
                                                <td style={{ textAlign: "right" }}>{productData.Quantity }</td>               
                                            </tr>:null}
                                    
                            </tbody>
                            
                        </table>
                    </div>
                </div>
            </div>
        </>
    )



}


export default FullOrderReport;
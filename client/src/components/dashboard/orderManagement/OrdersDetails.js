import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { toast } from "react-toastify";
import axios from 'axios';
import Axios from 'axios';
import { View, StyleSheet, Alert } from "react";
import Dialog from '../../../components/dashboard/orderManagement/Dialog';
import { Container, Row, Table, Modal, Button } from "react-bootstrap"
import SearchBar from './searchbar';

const moment = require('moment');


export default function OrderDetails() {
  const [apiData, setApiData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState();
  // For Modal Hold
  const [show, setShow] = useState(false)
  const handleClose = () => {
    setShow(false)
  }

  const idHoldRef = useRef();
  const onDelete = (id) => {
    setShow(true)
    console.log(id)
    idHoldRef.current = id;
  }

  const handleHoldOrder = () => {
    axios.patch(`/api/v6/orders/reject/${idHoldRef.current}`)
      .then(() => {
      })
    toast.error(`Order ID:${idHoldRef.current} holed`, {
      position: "bottom-left",

    });
    setShow(false)
  }


  // FETCH ORDERS
  useEffect(() => {
    Axios.get('/api/v6/orders')
      .then((getData) => {
        setApiData(getData.data);
      })
  })
  
  const [dialog, setDialog] = useState({
    message: "",
    isLoading: false,
  })

  const handleDialog = (message, isLoading) => {
    setDialog({
      message,
      isLoading,
    })
  }

  const idUpdateRef = useRef();
  const onUpdate = (_id) => {
    handleDialog("Are you sure you want to update the order?", true)
    idUpdateRef.current = _id;

  }
  //Dialog listener
  const UpdateSure = (choose) => {
    console.log("UPDATEDDDDDDDDDDDDDDDDD")
    if (choose) {
      axios.patch("/api/v6/orders/" + idUpdateRef.current)
        .then(() => {

        })

      toast.info(`Order ID:${idUpdateRef.current} updated as completed`, {
        position: "bottom-left",
      });

      handleDialog("", false);


    } else {
      handleDialog("", false);
    }

  }
  ////////////search barrr
  useEffect(() => {

    if (searchTerm !== "") {
      const handleSearch = (data) => {

        let term;

        if (searchTerm !== null) {
          term = searchTerm.replace(/[^a-zA-Z0-9_ \d]/, '');
          console.log(term);
        }

        const regExp = new RegExp(term, "i");
        console.log(regExp);
        //*If search category is emp name

        if (data) {
          const filterData = data.filter(data => data.Status.match(regExp));
          setFilteredData(filterData);
        }
      }

      handleSearch(apiData);



    }
  }, [searchTerm]);



  //* Get search term from Search Bar Component
  const getSearchTerm = (data) => {
    setSearchTerm(data)
  }



  return (

    <main id="main" className="main">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Hold Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to hold the order?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleHoldOrder}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="pagetitle">


        <h1>Order Controller</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item">Tables</li>
            <li className="breadcrumb-item active">General</li>
          </ol>
        </nav>
      </div>
      {/* <!-- End Page Title --> */}

      {/* Searchbar */}
      <SearchBar searchTerm={getSearchTerm} />
      <section className="section">
        <div className="row">
          <div className="col-lg-12">

            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Edit Orders..</h5>

                {/* <!-- Default Table --> */}
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Order ID</th>
                      <th scope="col">Placed On</th>

                      <th scope="col">Order status</th>
                      <th scope="col">Delivered On</th>
                      <th scope="col">Update Order</th>
                      <th scope="col">Hold Order</th>
                      <th scope="col">More</th>

                    </tr>
                  </thead>
                  <tbody>
                    {searchTerm === "" ? apiData && apiData.map((data) => (
                      <tr key={data._id}>
                        <th scope="row">{data._id}</th>
                        <td>{moment(data.Date).format('DD MMMM YYYY')}</td>
                        <td>{data.Status}</td>
                        <td>{data.deliveredAt}</td>
                        <td><button type="button" class="btn btn-warning" onClick={() => onUpdate(data._id)}>Update</button></td>
                        <td><button type="button" class="btn btn-danger" onClick={() => onDelete(data._id)}>Hold</button></td>
                        <td><Link to={{ pathname: `/singleOrderReport/${data._id}` }}><button className="btn btn-primary" ><i className="bi bi-file-earmark-text-fill"></i></button> </Link></td>
                      </tr>)) : filteredData && filteredData.map((data) => (
                        <tr key={data._id}>
                          <th scope="row">{data._id}</th>
                          <td>{moment(data.Date).format('DD MMMM YYYY')}</td>
                          <td>{data.Status}</td>
                          <td>{data.deliveredAt}</td>
                          <td><button type="button" class="btn btn-warning" onClick={() => onUpdate(data._id)}>Update</button></td>
                          <td><button type="button" class="btn btn-danger" onClick={() => onDelete(data._id)}>Hold</button></td>
                          <td><Link to={{ pathname: `/singleOrderReport/${data._id}` }}><button className="btn btn-primary" ><i className="bi bi-file-earmark-text-fill"></i></button> </Link></td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                {/* <!-- End Default Table Example --> */}
              </div>
            </div>
          </div>

          {dialog.isLoading && <Dialog onDialog={UpdateSure} message={dialog.message} />}

        </div>
      </section>

    </main>



  );








}








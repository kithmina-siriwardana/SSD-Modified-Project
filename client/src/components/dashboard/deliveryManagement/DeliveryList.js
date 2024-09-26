import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

function Deliveries(props) {
  const [orders, setOrders] = useState(props.orders);
  const { id } = useParams();
  const navigate = useNavigate();

  const [orderDeliveringAllAlert, setOrderDeliveringAllAlert] = useState('')
  const [orderDeliveringAllAlertError, setOrderDeliveringAllAlertError] = useState('')

  // const complete = "Pending";

  useEffect(() => { setOrders(props.orders) }
    , [props.orders])




  //* Update the Delivering status
  async function handleUpdateontheway(orderId) {
    const response = await fetch(`/api/orders/delivering/${orderId}`, {
      method: "PATCH",
      body: JSON.stringify({ DelevaryStatus: "Delivering" }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setOrderDeliveringAllAlertError(
        <>
          <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <i className="bi bi-exclamation-octagon me-1"></i>
            Failed to update the status as delivering! &nbsp;
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        </>
      )

      setTimeout(function () {
        window.location.reload();
        setOrderDeliveringAllAlertError('')
      }, 2000);
    }

    if (response.ok) {      
      setOrderDeliveringAllAlert(
        <>
          <div className="alert alert-success alert-dismissible fade show" role="alert">
            <i className="bi bi-check-circle me-1"></i>
            delivery status update as "Delivering" for Order ID : {orderId}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        </>
      )
      setTimeout(function () {
        window.location.reload();
        setOrderDeliveringAllAlert('')
      }, 2000);
      // window.location.reload();
    }
  }






  return (
    <main id="main" className="main" style={{ marginLeft: -30, marginTop: -10 }}>
      <div className="pagetitle">
        <h1>Packaged</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item">Tables</li>
            <li className="breadcrumb-item active">General</li>
          </ol>
        </nav>
      </div>
      {/* <!-- End Page Title --> */}

      {orderDeliveringAllAlert}
      {orderDeliveringAllAlertError}

      <section className="section">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Default Table</h5>

                {/* <!-- Default Table --> */}
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Order ID</th>
                      <th scope="col">Customer Name</th>
                      <th scope="col">Delivery Address</th>

                      <th scope="col">T/P</th>
                      <th scope="col">Date</th>
                      <th scope="col">Order Status</th>
                      <th scope="col">Delivery Status</th>
                      <th scope="col">Delivering</th>
                    </tr>
                  </thead>
                  <tbody style={{ fontSize: 15 }}>
                    {orders &&
                      orders.map((order) => (
                        <tr key={order._id}>
                          <th scope="row" style={{ height: 100, width: 20 }}>{order._id}</th>
                          <td>{order.Reciever_Name}</td>

                          <td>{order.Shpiing_Address}</td>
                          <td>{order.Phone}</td>
                          <td>{order.Date}</td>
                          <td>{order.Status}</td>
                          <td>{order.DelevaryStatus}</td>
                          <td>
                            <button type="button" class="btn btn-warning" onClick={() => {
                              handleUpdateontheway(order._id);
                            }}>
                              <i style={{ color: "white" }} class="bi bi-truck-front-fill"></i>
                            </button>
                          </td>
                        
                        </tr>
                      ))}
                  </tbody>
                </table>
                {/* <!-- End Default Table Example --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Deliveries;
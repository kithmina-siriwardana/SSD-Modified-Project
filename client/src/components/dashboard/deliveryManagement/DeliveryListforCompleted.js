import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

function Deliveriescompleted(props) {
  const [orders, setOrders] = useState(props.orders);
  const { id } = useParams();
  const navigate = useNavigate();

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
      alert("Update failed please try again.");
    }

    if (response.ok) {
      alert(
        "delivery status update as Delivering for Delivery ID : " + orderId
      );
      window.location.reload();
    }
  }



  //* Update the Completed status
  async function handleUpdateCompleted(orderId) {
    const response = await fetch(`/api/orders/completed/${orderId}`, {
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
      alert(
        "delivery status update as Completed for Delivery ID : " + orderId
      );
      window.location.reload();
    }
  }


  return (
    <main id="main" className="main" style={{ marginLeft: -30, marginTop: -10 }}>
      <div className="pagetitle">
        <h1>Completed</h1>
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
                      <th scope="col">Delivery Status</th>
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
                          <td>{order.DelevaryStatus}</td>
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

export default Deliveriescompleted;
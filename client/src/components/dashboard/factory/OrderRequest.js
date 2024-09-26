import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

function OrderRequest() {
    const [orderRequest, setOrderRequest] = useState(null)

    useEffect(() => {
        const fetchOrderRequest = async () => {
            const response = await fetch(``)
            const json = await response.json()
            console.log(json)
            console.log(json[0])
            if (response.ok) {
                setOrderRequest(json)
            }
        }

        fetchOrderRequest()
    }, [])

    return (
        <main id="main" className="main">

    <div className="pagetitle">
      <h1>Order Request Management</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="index.html">Home</a></li>
          <li className="breadcrumb-item">Order</li>
          <li className="breadcrumb-item active">Order List</li>
        </ol>
      </nav>
    </div>
    {/* <!-- End Page Title --> */}

    <section className="section">
      <div className="row">
        <div className="col-lg-12">

          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Orders</h5>

              {/* <!-- Default Table --> */}
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Status</th>
                    <th scope="col">Change order status</th>
                  </tr>
                </thead>
                <tbody>
                        <tr>
                            <th scope="row">09-06-2022</th>
                            <td>Pots</td>
                            <td>800</td>
                            <td>Completed</td>
                            <td><button type="button" class="btn btn-success">Set as Completed</button></td>
                        </tr>

                        <tr>
                            <th scope="row">23-06-2022</th>
                            <td>Pallets</td>
                            <td>680</td>
                            <td>Incomplete</td>
                            <td><button type="button" class="btn btn-success">Set as Completed</button></td>
                        </tr>

                        <tr>
                            <th scope="row">14-07-2022</th>
                            <td>GrowBags</td>
                            <td>750</td>
                            <td>Incomplete</td>
                            <td><button type="button" class="btn btn-success">Set as Completed</button></td>
                        </tr>
                    
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

export default OrderRequest;
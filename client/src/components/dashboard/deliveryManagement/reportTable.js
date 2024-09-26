import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

function Deliveryreport(props) {
  const [orders, setOrders] = useState(props.orders);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => { setOrders(props.orders) }
    , [props.orders])

    const [error, setError] = useState(null);  
    const [data, setData] = useState(null);      



    useEffect(() => {
            const fetchDeliveries = async () => {

                const response = await fetch("/api/users/feedbacks/all/feedbacks");
                const json = await response.json();

                if (response.ok) {
                    setData(json)
                    
                } else {
                    setError(json.error);
                    console.log(error);
                }

            }

            fetchDeliveries();
    }, [error]);



  return (
    

      <section className="section">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                
                {/* <!-- Default Table --> */}
                <table className="table">
                  <thead className="table-active" style={{height:70}}>
                    <tr>
                      <th scope="col">Oder ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">Feedback</th>
                      
                      <th scope="col">Rating</th>
                      
                    </tr>
                  </thead>
                  <tbody style={{ fontSize: 15 }}>
                    {data &&
                      data.map((data) => (
                        <tr key={data._id}>
                          <th scope="row" style={{ height: 80, width: 30 }}>{data.orderId}</th>
                          
                          <td>{data.name}</td>
                          <td>{data.deliveryFeedback}</td>
                          <td>{data.rating}</td>
                          
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
  );
}

export default Deliveryreport;
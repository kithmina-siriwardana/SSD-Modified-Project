import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductStats() {
  const [productStats, setProductStats] = useState('')

  // const [currentDate, setCurrentDate] = useState('')
  // const [product, setMaxRunningHrs] = useState('')
  // const [completedProducts, setCompletedProducts] = useState('')

  useEffect(() => {
    const fetchProductStats = async () => {
      const response = await fetch(`/api/machineStats`)
      const json = await response.json()
      console.log(json)
      console.log(json[0])
      if (response.ok) {
        setProductStats(json)
      }
    }

    fetchProductStats()
  }, [])


  return (
    <main id="main" className="main">

      <div className="pagetitle">
        <h1>Production Statistics</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item">Machine</li>
            <li className="breadcrumb-item active">Production Statistics</li>
          </ol>
        </nav>
      </div>
      {/* <!-- End Page Title --> */}

      <section className="section">
        <div className="row">
          <div className="col-lg-12">

            <div className="card">
              <div className="card-body">
                <h5 className="card-title">All Production Details</h5>

                {/* <!-- Default Table --> */}
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">
                        <th scope="col">Date</th>
                        <th scope="col">Product Names
                          <th scope="col">

                          <th scope="col">Jiffy Pots</th>
                          <th scope="col">Jiffy Growbags</th>
                          <th scope="col">Jiffy Growblocks</th>
                          <th scope="col">Jiffy Pallets</th>
                          <th scope="col">Jiffy Performa</th>
                          <th scope="col">Jiffy Substrates</th>

                          </th>

                        </th>

                      </th>

                    </tr>
                  </thead>
                  <tbody>

                  {productStats && productStats.map((productStats) => (

                    

                      <tr key={productStats._id}>
                        <th scope="row">{productStats.currentDate}</th>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    ))}

                  </tbody>
                </table>
                {/* <!-- End Default Table Example --> */}





                {/* <!-- Default Table --> */}
                {/* <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">
                        <th scope="col">Date</th>
                        <th scope="col">Product Names
                          <th scope="col">
                            {productStats && productStats.map((productStats) => (
                              <tr key={productStats._id}>
                                <th scope="row">{factory.fId}</th>
                                <td>{factory.fName}</td>
                                <td>{factory.fLocation}</td>
                                <td><Link to={{ pathname: `/factory-details/${factory._id}` }}>View Factory Details</Link></td>
                              </tr>
                            ))}
                          </th>

                        </th>

                      </th>

                    </tr>
                  </thead>
                  <tbody>
                    {factory && factory.map((factory) => (
                      <tr key={factory._id}>
                        <th scope="row">{factory.fId}</th>
                        <td>{factory.fName}</td>
                        <td>{factory.fLocation}</td>
                        <td><Link to={{ pathname: `/factory-details/${factory._id}` }}>View Factory Details</Link></td>
                      </tr>
                    ))}
                  </tbody>
                </table> */}
                {/* <!-- End Default Table Example --> */}













              </div>

            </div>

          </div>
        </div>
      </section>

    </main>
  );
}

export default ProductStats;
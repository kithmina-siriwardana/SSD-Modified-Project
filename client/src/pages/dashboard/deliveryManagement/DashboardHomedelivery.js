import { useEffect, useState } from 'react';
import Header from '../../../components/dashboard/deliveryManagement/deliverymangerheader';
import Sidebar from '../../../components/dashboard/Sidebar';
import Footer from '../../../components/dashboard/Footer';

import Chart from 'react-apexcharts';




function DashboardHomedelivery() {

  const [count, setCount] = useState(0);
  const [error, setError] = useState();
  const [countdelivering, SetCountDelivering] = useState(0);
  const [countCompleted, SetCountCompleted] = useState(0);

  const [piechart, setPiechart] = useState(
    {
      series: [],
      options: {
        chart: { width: 0, type: '', },
        labels: [],
        responsive: [{ breakpoint: 0, options: { chart: { width: 0 }, legend: { position: '' } } }]
      },
    }

  )

  useEffect(() => {
    const fetchDeliveries = async () => {

      const response = await fetch(`/api/users/feedbacks/rating/count`);
      const deliveryCount = await fetch('api/orders/delivering/count');
      const deliverycompletedCount = await fetch('api/orders/deliveryCompleted/count')

      const json = await response.json();
      const json1 = await deliveryCount.json();
      const json2 = await deliverycompletedCount.json();
      if (deliveryCount.ok) {
        SetCountDelivering(json1.count[0].DelevaryStatus)
        SetCountCompleted(json2.count[0].DelevaryStatus)
        console.log(json1.count[0].DelevaryStatus)

      }

      // if(deliveryCount.ok){

      // }

      if (response.ok) {

        setCount(json)

        console.log(json)


        const countdata = []

        json.map(
          i => {
            countdata.push(i.count)
          }
        )

        setPiechart({
          series: countdata,
          options: {
            chart: { width: 380, type: 'pie', },
            labels: ['1 star', '2 star', '3 star', '4 star', '5 star'],
            tooltip: { enabled: true },
            responsive: [{ breakpoint: 480, options: { chart: { width: 200 }, legend: { position: 'bottom' } } }]
          },
        })
      } else {
        setError(json.error);
        console.log(error);
      }
    }
    fetchDeliveries()

  }, [])

  // console.log(count[0].count)

  return (
    <div>
      <Header />

      <Sidebar />
      <main className="main" id="main">

        <div className='row'>
          <div class="card col-4" style={{ marginRight: 10 }}>
            <div class="card-body">
              <h2 style={{marginTop: 20}}>Delivering</h2>
              <p>total number</p>
              <h3>{countdelivering}</h3>
            </div>
          </div>

          <div class="card col-4">
            <div class="card-body">
              <h2 style={{marginTop: 20}}>Completed</h2>
              <p>total number</p>
              <h3>{countCompleted}</h3>
            </div>
          </div>
        </div>


        <div className='row'>
          <div class="card col-12" style={{ marginRight: 10 }}>
            <div class="card-body">
              <h1 style={{marginTop: 20 , marginBottom: 20}}>Feedback Ratings</h1>
              <Chart
                series={piechart.series}
                type="pie"
                width={500}
                height={500}
                options={piechart.options} />
            </div>
          </div>

          {/* <div class="card col-5">
            <div class="card-body">

            </div>
          </div> */}
        </div>






        {/* <iframe  src="https://charts.mongodb.com/charts-project-0-btwsw/embed/charts?id=63614052-680d-49c0-85ef-9be133ad6fda&maxDataAge=3600&theme=light&autoRefresh=true"></iframe> */}
        {/* <iframe  src="https://charts.mongodb.com/charts-project-0-btwsw/embed/dashboards?id=fb4ab6db-c4a7-425e-8ef3-40c3bdfdba62&theme=light&autoRefresh=true&maxDataAge=3600&showTitleAndDesc=false&scalingWidth=fixed&scalingHeight=fixed"></iframe> */}

      </main>
      <Footer />
      <a href="#"
        className="back-to-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </div>
  );
}

export default DashboardHomedelivery;
import { useNavigate } from 'react-router-dom'

function Reports() {
  const navigate = useNavigate()

  return (
    <main id="main" className="main">

      <div className="pagetitle">
        <h1>Machine Reports</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item">Machine</li>
            <li className="breadcrumb-item active">Reports - Machines</li>
          </ol>
        </nav>
      </div>
      {/* <!-- End Page Title --> */}

      <section className="section">
        <div className="row">

        {/* Number of factories */}
          <div className="col-lg-4">
           
            <div className="card">

              <div className="card-body">
                <h5 style={{ textAlign: "center" }} className="card-title">Number of Factories</h5>

                <div class="row mb-5">
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >50</div>

                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
           
            <div className="card">

              <div className="card-body">
                <h5 style={{ textAlign: "center" }} className="card-title">Machine Statistics Report</h5>

                <div class="row mb-5">
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} ><button type="button" class="btn btn-primary" onClick={() => navigate("/report-machine")}>View PDF</button></div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Reports;

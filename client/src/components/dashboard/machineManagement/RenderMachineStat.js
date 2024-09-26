import React, { useEffect, useState } from "react";
import generateMachineStatPDF from "../../../services/MachineStatReportGenerator";

const Machines = () => {
  
  const [machines, setMachines] = useState([]);
  
  useEffect(() => {
    const getAllMachines = async () => {
      try {
        const response = await fetch(`/api/machine`)
        const json = await response.json()
        setMachines(json)
    (response.data.machines);
      } catch (err) {
        console.log("error");
      }
    };
    getAllMachines();
  }, []);

const reportMachines = machines;
  
  return (
    <div>
      <div className="container mb-4 mt-4 p-3">
        <div className="row">
          {user.user.role === "user" ? (
            <> </>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => generateMachineStatPDF(reportMachines)}
            >
              Generate monthly report
            </button>
          )}
        </div>
      </div>
      <MachineReportComponent machines={machines} />
    </div>
  );
};

export default Machines;
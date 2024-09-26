import React from "react";
import { Link } from "react-router-dom";

const MachineReportComponent = ({ machines }) => {

  return (
    <div className="container">
      {machines.length === 0 ? (
        "You currently have no machines created"
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Machine ID</th>
              <th scope="col">Product</th>
              <th scope="col">Total Productions Done</th>
              <th scope="col">Total Running Hours</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {machines.map(machine => (
              <tr key={machine.id}>
                <td>{machine.mId}</td>
                <td>{machine.product}</td>
                <td>{machine.totalProductions}</td>
                <td>{machine.totalRunningHrs}</td>
                <td>
                  <Link to={`/machine/${machine.id}`}>See comments</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MachineReportComponent;
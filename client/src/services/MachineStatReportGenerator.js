import jsPDF from "jspdf";
import "jspdf-autotable";

// Date Fns is used to format the dates we receive
// from our API call
import { format } from "date-fns";

// define a generateMachineStatPDF function that accepts a machines argument
const generateMachineStatPDF = machines => {
  // initialize jsPDF
  const doc = new jsPDF();

  // define the columns we want and their titles
  const tableColumn = ["Machine ID", "Product", "Total Production", "Total Running Hours"];
  // define an empty array of rows
  const tableRows = [];

  // for each machine pass all its data into an array
  machines.forEach(machine => {
    const machineData = [
      machine.MId,
      machine.product,
      machine.totalProductions,
      machine.totalRunningHrs,
      
      // called date-fns to format the date on the machine
      format(new Date(machine.updated_at), "yyyy-MM-dd")
    ];
    // push each tickcet's info into a row
    tableRows.push(machineData);
  });


  // startY is basically margin-top
  doc.autoTable(tableColumn, tableRows, { startY: 20 });
  const date = Date().split(" ");
  // we use a date string to generate our filename.
  const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
  // machine title. and margin-top + margin-left
  doc.text("Closed machines within the last one month.", 14, 15);
  // we define the name of our PDF file.
  doc.save(`report_${dateStr}.pdf`);
};

export default generateMachineStatPDF;
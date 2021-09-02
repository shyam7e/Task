import React from "react";
import { Table } from "reactstrap";
import { ExportToCsv } from "export-to-csv";
function GridTable({ docData }) {
  const options = {
    fieldSeparator: ",",
    quoteStrings: '"',
    decimalSeparator: ".",
    showLabels: true,
    showTitle: true,
    title: "My Awesome CSV",
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
    // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
  };
  const csvExporter = new ExportToCsv(options);
  return (
    <div className="table-responsive ">
      <Table className="table table-bordered  table-hover mb-0 table-centered table-nowrap">
        <thead className="bg-light">
          <tr>
            <th>Name</th>

            <th>Company</th>
            <th>Email</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {docData.map((p, index) => (
            <tr key={index}>
              <td>{p.fname + "" + p.lname}</td>

              <td>{p.company}</td>
              <td>{p.email}</td>
              <td>{p.address}</td>
              <td>{p.city}</td>
              <td>{p.state}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <button
        className="my-2 rounded "
        onClick={() => {
          if (docData.length !== 0) {
            csvExporter.generateCsv(docData);
          }
        }}
      >
        Export Csv
      </button>
    </div>
  );
}

export default GridTable;

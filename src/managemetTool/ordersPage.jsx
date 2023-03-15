import React, { useState } from "react";
import "./landingPage1.css";
import tableDatajson from "./tableData.json";

export default function OrdersPage() {
  const tableData = tableDatajson.data;
  const [data, setData] = useState(tableData.slice(0, 10));
  const [rowData, setRowData] = useState(tableData.slice(0, 10));
  const tableHeader = ["Order Id", "Vendor name", "Pick up date", "Status"];

  const myFunction = (e) => {
    const data1 = e.target.value;
    let values = rowData;
    values = values.filter((item) => {
      return (
        item["Order Id"].toString().includes(data1) ||
        item["Vendor name"].includes(data1) ||
        item["Pick up date"].includes(data1) ||
        item["Status"].toLowerCase().includes(data1)
      );
    });
    setData(values);
  };

  const handleChangeSelect = (e) => {
    const rowPerPage = e.target.value;

    setRowData(tableData.slice(0, rowPerPage));
    setData(tableData.slice(0, rowPerPage));
  };

  return (
    <div>
      <input
        type="text"
        id="myInput"
        onChange={(e) => myFunction(e)}
        placeholder="Search for Data"
      ></input>
      <table id="myTable" style={{ borderCollapse: "collapse", width: "80%" }}>
        <thead>
          {tableHeader.map((item) => {
            return (
              <th
                style={{ border: "1px solid", backgroundColor: "antiquewhite" }}
              >
                {item}
              </th>
            );
          })}
        </thead>
        <tbody>
          {data &&
            data.map((item) => {
              return (
                <tr style={{ height: "40px", textAlign: "center" }}>
                  <td style={{ border: "1px solid" }}>{item["Order Id"]}</td>
                  <td style={{ border: "1px solid" }}>{item["Vendor name"]}</td>
                  <td style={{ border: "1px solid" }}>
                    {item["Pick up date"]}
                  </td>
                  <td style={{ border: "1px solid" }}>{item["Status"]}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div class="divSelect">
        <label>Rows per page</label>
        <select class="selectStyle" onChange={handleChangeSelect}>
          <option>10</option>
          <option>20</option>
          <option>30</option>
        </select>
      </div>
    </div>
  );
}

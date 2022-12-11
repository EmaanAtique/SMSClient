import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import DataTable from "./component/DataTable"
let btnGet = document.querySelector('button');
let myTable = document.querySelector('#table');

const columns  = [
  {field: "student_id", headerName: "Student ID"},
  {field: "f_name", headerName: "First Name"},
  {field: "l_name", headerName: "Last Name"},
  {field: "major", headerName: "Major"},
  {field: "email", headerName: "Email"}
  
  
  
  
]

const Advisees = props => {

    const [tableData, setTableData] = useState([])
    const EmployeeID = props.location.state;
    const [Advisee_List, setAdvisee_List] = useState("")


    async function getData() {
        const res = await Axios.get("https://dbproject-group22.herokuapp.com/api/eadvisees");
        setAdvisee_List(JSON.stringify(res.data));
        // let headers= ["Student ID", "First Name", "Last Name", "Major", "Email"]
        // btnGet.addEventListener('click', () => {
        //   let table = document.createElement('table');
        //   let headerRow = document.createElement('tr');

        //   headers.forEach(headerText => {
        //     let header  = document.createElement('th');
        //     let textNode = document.createTextNode(headerText);
        //     header.appendChild(textNode);
        //     headerRow.appendChild(header);
        //   });

        //   table.appendChild(headerRow);
        //   myTable.appendChild(table);
        // });
         console.log(Advisee_List)
        // return res;
    }

getData()

// for (var key in Advisee_List){
//     console.log()

// }
  return (
    <div>
      <DataTable> </DataTable>
<h1>Advisees </h1>

<h1>
<span> {Advisee_List}</span>
</h1>

<table>
    <tr>
        <th>Student ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th> Major</th>
        <th> Email</th>
    </tr>

    <tbody id="myTable">
        
    </tbody>
</table>


  </div>
  )
}

export default Advisees;
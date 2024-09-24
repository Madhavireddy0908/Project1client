import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "jquery/dist/jquery.js";
import "datatables.net-dt/js/dataTables.dataTables.min.js";
import "datatables.net-dt/css/dataTables.dataTables.min.css";
import $ from "jquery";

const AppointmentData = () => {
  const[adata,setAdata]=useState([]);
  useEffect(()=>{
      axios
      .get('http://localhost:4000/appointment')
      .then((res)=>{
          setAdata(res.data);
      })
      .catch((err)=>{
          console.log(err);
      })
      $(function(){
        setTimeout(()=>{
            $("#dtable").DataTable();
        },1000);
      });
  })

  return (
    <div className='table-responsive'>
    <table className='table table-bordered' id="dtable">
        <thead>
          <tr>
            <th>Treatmentname</th>
            <th>Patientname</th>
            <th>Doctornamename</th>
            <th>Subject</th>
            <th>Date</th>
            <th>Time</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {
            adata.map((data)=>{
            return(
              <tr key={data._id}>
                <td>{data.tname}</td>
                <td>{data.pname}</td>
                <td>{data.dname}</td>
                <td>{data.sub}</td>
                <td>{data.date}</td>
                <td>{data.time}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{data.msg}</td>
              </tr>
            )
            })
          }
        </tbody>
    </table>
  </div>
  )
}

export default AppointmentData
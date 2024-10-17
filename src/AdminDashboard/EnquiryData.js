import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "jquery/dist/jquery.js";
import "datatables.net-dt/js/dataTables.dataTables.min.js";
import "datatables.net-dt/css/dataTables.dataTables.min.css";
import $ from "jquery";

const EnquiryData = () => {
  const[edata,setEdata]=useState([]);
  useEffect(()=>{
      axios
      .get('https://project1server-3.onrender.com/enquiry')
      .then((res)=>{
          setEdata(res.data);
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
    <div>
    <table className='table table-bordered' id="dtable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {
            edata.map((data)=>{
            return(
              <tr key={data._id}>
                <td>{data.uname}</td>
                <td>{data.phone}</td>
                <td>{data.email}</td>
                <td>{data.sub}</td>
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

export default EnquiryData;

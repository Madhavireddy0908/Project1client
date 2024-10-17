import React, { useEffect, useState } from 'react';
import axios from "axios";
import { NavLink } from 'react-router-dom';
import "jquery/dist/jquery.js";
import "datatables.net-dt/js/dataTables.dataTables.min.js";
import "datatables.net-dt/css/dataTables.dataTables.min.css";
import $ from "jquery";

const EditDeleteEnquiry = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
    axios.get("https://project1server-3.onrender.com/enquiry/")
    .then((res)=>{
      setData(res.data);
    })
    .catch((err)=>{
      alert(err);
    })
    $(function(){
      setTimeout(()=>{
        $("#dtable").DataTable();
      },1000);
    });    
  })
  const deleteEnquiry = (eid)=>{
    axios.delete(`https://project1server-3.onrender.com/enquiry/${eid}`)
    .then((res)=>{
      alert("Enquiry deleted succ...")
    })
    .catch((err)=>{
      alert("unable to delete Enquiry data")
    })
  }

  return (
    <>
      <div>
        <table className='table table-bordered' id='dtable'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((enquiry)=>{
                return(
                  <tr key={enquiry._id}>
                    <td>{enquiry.uname}</td>
                    <td>{enquiry.phone}</td>
                    <td>{enquiry.email}</td>
                    <td>{enquiry.sub}</td>
                    <td>{enquiry.msg}</td>
                    <td>
                      <button className='btn btn-danger mx-2' onClick={(e)=>deleteEnquiry(enquiry._id)}>Delete</button>
                    </td>
                    <td>
                      <NavLink to={`/editenquiryform/${enquiry._id}`}>
                        <button className='btn btn-danger mx-2'>Edit</button>
                      </NavLink>
                    </td>
                  </tr>
                )
              })
              }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default EditDeleteEnquiry;

import React, { useEffect, useState } from 'react';
import axios from "axios";
import { NavLink } from 'react-router-dom';
import "jquery/dist/jquery.js";
import "datatables.net-dt/js/dataTables.dataTables.min.js";
import "datatables.net-dt/css/dataTables.dataTables.min.css";
import $ from "jquery";

const EditDeleteAppointment = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
    axios.get("https://project1server-3.onrender.com/appointment/")
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
  const deleteAppointment = (aid)=>{
    axios.delete(`https://project1server-3.onrender.com/appointment/${aid}`)
    .then((res)=>{
      alert("Appointment deleted succ...")
    })
    .catch((err)=>{
      alert("unable to delete Appointment data")
    })
  }

  return (
    <>
      <div className='table-responsive'>
        <table className='table table-bordered' id='dtable'>
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
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((appointment)=>{
                return(
                  <tr key={appointment._id}>
                    <td>{appointment.tname}</td>
                    <td>{appointment.pname}</td>
                    <td>{appointment.dname}</td>
                    <td>{appointment.sub}</td>
                    <td>{appointment.date}</td>
                    <td>{appointment.time}</td>
                    <td>{appointment.email}</td>
                    <td>{appointment.phone}</td>
                    <td>{appointment.msg}</td>
                    <td>
                      <button className='btn btn-danger mx-2' onClick={(e)=>deleteAppointment(appointment._id)}>Delete</button>
                    </td>
                    <td>
                      <NavLink to={`/editappointmentform/${appointment._id}`}>
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

export default EditDeleteAppointment;

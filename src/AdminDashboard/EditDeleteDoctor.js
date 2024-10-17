import React, { useEffect, useState } from 'react';
import axios from "axios";
import { NavLink } from 'react-router-dom';
import "jquery/dist/jquery.js";
import "datatables.net-dt/js/dataTables.dataTables.min.js";
import "datatables.net-dt/css/dataTables.dataTables.min.css";
import $ from "jquery";

const EditDeleteDoctor = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
    axios.get("https://project1server-3.onrender.com/doctor/")
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
  const deleteDoctor = (did)=>{
    axios.delete(`https://project1server-3.onrender.com/doctor/${did}`)
    .then((res)=>{
      alert("Doctor deleted succ...")
    })
    .catch((err)=>{
      alert("unable to delete Doctor data")
    })
  }

  return (
    <>
      <div>
        <table className='table table-bordered' id='dtable'>
          <thead>
            <tr>
              <th>T.Name</th>
              <th>D.Name</th>
              <th>D.Qualification</th>
              <th>YOE</th>
              <th>Hospital</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((doctor)=>{
                return(
                  <tr key={doctor._id}>
                    <td>{doctor.tname}</td>
                    <td>{doctor.dname}</td>
                    <td>{doctor.dqual}</td>
                    <td>{doctor.yoe}</td>
                    <td>{doctor.hos}</td>
                    <td>
                      <button className='btn btn-danger mx-2' onClick={(e)=>deleteDoctor(doctor._id)}>Delete</button>
                    </td>
                    <td>
                      <NavLink to={`/editdoctorform/${doctor._id}`}>
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

export default EditDeleteDoctor;

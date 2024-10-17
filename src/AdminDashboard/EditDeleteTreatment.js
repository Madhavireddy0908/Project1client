import React, { useEffect, useState } from 'react';
import axios from "axios";
import { NavLink } from 'react-router-dom';
import "jquery/dist/jquery.js";
import "datatables.net-dt/js/dataTables.dataTables.min.js";
import "datatables.net-dt/css/dataTables.dataTables.min.css";
import $ from "jquery";

const EditDeleteTreatment = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
    axios.get("https://project1server-3.onrender.com/treatment/")
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
  const deleteTreatment = (tid)=>{
    axios.delete(`https://project1server-3.onrender.com/treatment/${tid}`)
    .then((res)=>{
      alert("Treatment deleted succ...")
    })
    .catch((err)=>{
      alert("unable to delete Treatment data")
    })
  }

  return (
    <>
      <div>
        <table className='table table-bordered' id='dtable'>
          <thead>
            <tr>
              <th>T.Name</th>
              <th>T.Desc</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((treatment)=>{
                return(
                  <tr key={treatment._id}>
                    <td>{treatment.tname}</td>
                    <td>{treatment.tdesc}</td>
                    <td>
                      <button className='btn btn-danger mx-2' onClick={(e)=>deleteTreatment(treatment._id)}>Delete</button>
                    </td>
                    <td>
                      <NavLink to={`/edittreatmentform/${treatment._id}`}>
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

export default EditDeleteTreatment;

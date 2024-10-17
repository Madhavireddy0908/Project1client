import React, { useEffect, useState } from 'react';
import axios from "axios";
import { NavLink } from 'react-router-dom';
import "jquery/dist/jquery.js";
import "datatables.net-dt/js/dataTables.dataTables.min.js";
import "datatables.net-dt/css/dataTables.dataTables.min.css";
import $ from "jquery";

const EditDeleteOffer = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
    axios.get("https://project1server-3.onrender.com/offer/")
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
  const deleteOffer = (oid)=>{
    axios.delete(`https://project1server-3.onrender.com/offer/${oid}`)
    .then((res)=>{
      alert("Offer deleted succ...")
    })
    .catch((err)=>{
      alert("unable to delete Offer data")
    })
  }

  return (
    <>
      <div>
        <table className='table table-bordered' id='dtable'>
          <thead>
            <tr>
              <th>O.Name</th>
              <th>O.Price</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((offer)=>{
                return(
                  <tr key={offer._id}>
                    <td>{offer.oname}</td>
                    <td>{offer.oprice}</td>
                    <td>
                      <button className='btn btn-danger mx-2' onClick={(e)=>deleteOffer(offer._id)}>Delete</button>
                    </td>
                    <td>
                      <NavLink to={`/editofferform/${offer._id}`}>
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

export default EditDeleteOffer;

import React, { useState } from 'react';
import adminStyles from "./admin.module.css";
import axios from 'axios';

const AddOffer = () => {
  const [oname,setOname] = useState("");
  const [oprice,setOprice] = useState("");
  const addOffer = (e) =>{
    e.preventDefault();
    axios.post("https://project1server-3.onrender.com/offer/",{oname,oprice})
    .then((res)=>{
        alert("Offer added successfully");
        setOname("");
        setOprice("");
    })
    .catch((err)=>{
        alert("Unable to add Offer");
    })
  }
  return (
    <section>
    <div className='container'>
        <div className='row'>
            <div className={`col-md-8 ${adminStyles.formstyles}`}>
                <form onSubmit={addOffer}>
                    <div className='mb-3'>
                        <input type='text' className='form-control' placeholder='Offer Name' value={oname} onChange={(e)=>setOname(e.target.value)}/>
                    </div>
                    <div className='mb-3'>
                        <input type='text' className='form-control' placeholder='Price' value={oprice} onChange={(e)=>setOprice(e.target.value)}/>
                    </div>
                    <div className='mb-3'>
                        <input type='submit' value='Add Offer' className='btn btn-danger float-end'/>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </section>
  )
}

export default AddOffer;

import React, { useState } from 'react';
import adminStyles from "./admin.module.css";
import axios from 'axios';

const AddTreatment = () => {
  const [tname,setTname] = useState("");
  const [tdesc,setTdesc] = useState("");
  const addTreatment = (e) =>{
    e.preventDefault();
    axios.post("http://localhost:4000/treatment/",{tname,tdesc})
    .then((res)=>{
        alert("Treatment added successfully");
        setTname("");
        setTdesc("");
    })
    .catch((err)=>{
        alert("Unable to add Treatment");
    })
}
  return (
  <section>
    <div className='container'>
        <div className='row'>
            <div className={`col-md-8 ${adminStyles.formstyles}`}>
                <form onSubmit={addTreatment}>
                    <div className='mb-3'>
                        <input type='text' className='form-control' placeholder='Treatment Name' value={tname} onChange={(e)=>setTname(e.target.value)}/>
                    </div>
                    <div className='mb-3'>
                        <textarea type='text' className='form-control' placeholder='Description' value={tdesc} onChange={(e)=>setTdesc(e.target.value)}></textarea>
                    </div>
                    <div className='mb-3'>
                        <input type='submit' value='Add Treatment' className='btn btn-danger float-end'/>
                    </div>
                </form>
            </div>
        </div>
    </div>
  </section>
  )
}

export default AddTreatment;
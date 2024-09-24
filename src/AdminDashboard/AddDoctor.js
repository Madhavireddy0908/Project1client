import React, { useState } from 'react';
import adminStyles from "./admin.module.css";
import axios from 'axios';

const AddDoctor = () => {
  const [tname,setTname] = useState("");
  const [dname,setDname] = useState("");
  const [dqual,setDqual] = useState("");
  const [yoe,setYoe] = useState("");
  const [hos,setHos] = useState("");
  const addDoctor = (e) =>{
    e.preventDefault();
    axios.post("http://localhost:4000/doctor/",{tname,dname,dqual,yoe,hos})
    .then((res)=>{
        alert("Doctor added successfully");
        setTname("");
        setDname("");
        setDqual("");
        setYoe("");
        setHos("");
    })
    .catch((err)=>{
        alert("Unable to add Doctor");
    })
}
  return (
  <section>
    <div className='container'>
        <div className='row'>
            <div className={`col-md-8 ${adminStyles.formstyles}`}>
                <form onSubmit={addDoctor}>
                    <div className='mb-3'>
                        <input type='text' className='form-control' placeholder='Treatment Name' value={tname} onChange={(e)=>setTname(e.target.value)}/>
                    </div>
                    <div className='mb-3'>
                        <input type='text' className='form-control' placeholder='Doctor Name' value={dname} onChange={(e)=>setDname(e.target.value)}/>
                    </div>
                    <div className='mb-3'>
                        <input type='text' className='form-control' placeholder='Doctor Qualification' value={dqual} onChange={(e)=>setDqual(e.target.value)}/>
                    </div>
                    <div className='mb-3'>
                        <input type='text' className='form-control' placeholder='Years of Experience' value={yoe} onChange={(e)=>setYoe(e.target.value)}/>
                    </div>
                    <div className='mb-3'>
                        <input type='text' className='form-control' placeholder='Hospital' value={hos} onChange={(e)=>setHos(e.target.value)}/>
                    </div>
                    <div className='mb-3'>
                        <input type='submit' value='Add Doctor' className='btn btn-danger float-end'/>
                    </div>
                </form>
            </div>
        </div>
    </div>
  </section>
  )
}

export default AddDoctor;
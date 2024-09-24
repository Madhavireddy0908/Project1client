import React, { useState } from 'react';
import innerStyles from "./innerpages.module.css";
import axios from "axios";

const AddStudent = () => {
    const [name,setName] = useState("");
    const [phone,setPhone] = useState("");
    const [email,setEmail] = useState("");
    const [address,setAddress] = useState("");

    const addStudent=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:4000/student/",{name,phone,email,address})
        .then((res)=>{
            alert("student added successfully");
            setName("");
            setPhone("");
            setEmail("");
            setAddress("");
        })
        .catch((err)=>{
            alert("unable to add student");
        })
    }
  return (
    <>
        <section className={innerStyles.breadcrumb}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1>Add Student</h1>
                    </div>
                </div>
            </div>
        </section>
        <section className='py-4'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'></div>
                    <div className='col-md-4'>
                        <form onSubmit={addStudent} className={innerStyles.formstyle}>
                            <div className='mb-3'>
                                <input type='text' name='name' placeholder='Name' className='form-control' value={name} onChange={(e)=>setName(e.target.value)}/>
                            </div>
                            <div className='mb-3'>
                                <input type='text' name='phone' placeholder='Phone' className='form-control' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                            </div>
                            <div className='mb-3'>
                                <input type='text' name='email' placeholder='Email' className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            </div>
                            <div className='mb-3'>
                                <input type='text' name='address' placeholder='Address' className='form-control' value={address}
                                onChange={(e)=>setAddress(e.target.value)}/>
                            </div>
                            <div className='mb-3'>
                                <input type='submit' value='Add Student' className='btn btn-danger'/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default AddStudent;
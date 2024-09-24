import React, { useState } from 'react';
import adminStyles from "./admin.module.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name,setName] = useState("");
    const [phone,setPhone] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [address,setAddress] = useState("");
    const navigate = useNavigate();
    
    const addStudent=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:4000/signup/",{name,phone,email,password,address})
        .then((res)=>{
            alert("user added successfully");
            navigate("/admin");
        })
        .catch((err)=>{
            alert("unable to add user");
        })
    }
  return (
    <>
        <section className={adminStyles.breadcrumb}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1>Admin Register</h1>
                    </div>
                </div>
            </div>
        </section>
        <section className='py-4'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'></div>
                    <div className={`col-md-4 ${adminStyles.formstyles}`}>
                        <form onSubmit={addStudent}>
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
                                <input type='password' name='password' placeholder='Password' className='form-control' value={password}
                                onChange={(e)=>setPassword(e.target.value)}/>
                            </div>
                            <div className='mb-3'>
                                <input type='text' name='address' placeholder='Address' className='form-control' value={address}
                                onChange={(e)=>setAddress(e.target.value)}/>
                            </div>
                            <div className='mb-3'>
                                <input type='submit' value='Register' className='btn btn-danger'/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Register;
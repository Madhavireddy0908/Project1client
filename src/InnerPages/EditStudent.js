import React, { useEffect, useState } from 'react';
import innerStyles from "./innerpages.module.css";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

const EditStudent = () => {
    const [name,setName] = useState("");
    const [phone,setPhone] = useState("");
    const [email,setEmail] = useState("");
    const [address,setAddress] = useState("");
    let {id} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get(`http://localhost:4000/student/${id}`)
        .then((res)=>{
            setName(res.data.name);
            setPhone(res.data.phone);
            setEmail(res.data.email);
            setAddress(res.data.address);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[]);
    const updateStudent = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:4000/student/${id}`,{name,phone,email,address})
        .then((res)=>{
            alert("student updated succ...");
            navigate("/deletestudent");
        })
        .catch((err)=>{
            alert("unable to delete student data");
        })
    }

  return (
    <>
        <section className={innerStyles.breadcrumb}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1>Edit Student Data</h1>
                    </div>
                </div>
            </div>
        </section>
        <section className='py-4'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'></div>
                    <div className='col-md-4'>
                        <form onSubmit={updateStudent} className={innerStyles.formstyle}>
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
                                <input type='submit' value='Edit Student' className='btn btn-danger'/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default EditStudent;
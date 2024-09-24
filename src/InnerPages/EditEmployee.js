import React, { useEffect, useState } from 'react';
import innerStyles from "./innerpages.module.css";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

const EditEmployee = () => {
    const [name,setName] = useState("");
    const [phone,setPhone] = useState("");
    const [email,setEmail] = useState("");
    const [designation,setDesignation] = useState("");
    const [salary,setSalary] = useState("");
    let {id} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get(`http://localhost:4000/employee/${id}`)
        .then((res)=>{
            setName(res.data.name);
            setPhone(res.data.phone);
            setEmail(res.data.email);
            setDesignation(res.data.designation);
            setSalary(res.data.salary);
        })
        .catch((err)=>{
            console.log(err);
        })
        //eslint-disable-next-line
    },[]);
    const updateEmployee = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:4000/employee/${id}`,{name,phone,email,designation,salary})
        .then((res)=>{
            alert("employee updated succ...");
            navigate("/deleteemployee");
        })
        .catch((err)=>{
            alert("unable to delete employee data");
        })
    }

  return (
    <>
        <section className={innerStyles.breadcrumb}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1>Edit Employee Data</h1>
                    </div>
                </div>
            </div>
        </section>
        <section className='py-4'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'></div>
                    <div className='col-md-4'>
                        <form onSubmit={updateEmployee} className={innerStyles.formstyle}>
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
                                <input type='text' name='designation' placeholder='Designation' className='form-control' value={designation}
                                onChange={(e)=>setDesignation(e.target.value)}/>
                            </div>
                            <div className='mb-3'>
                                <input type='text' name='salary' placeholder='Salary' className='form-control' value={salary}
                                onChange={(e)=>setSalary(e.target.value)}/>
                            </div>
                            <div className='mb-3'>
                                <input type='submit' value='Edit Employee' className='btn btn-danger'/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default EditEmployee;
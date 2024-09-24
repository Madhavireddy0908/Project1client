import React, { useState } from 'react';
import innerStyles from "./innerpages.module.css";
import axios from "axios";

const AddEmployee = () => {
    const [name,setName] = useState("");
    const [phone,setPhone] = useState("");
    const [email,setEmail] = useState("");
    const [designation,setDesignation] = useState("");
    const [salary,setSalary] = useState("");

    const addEmployee=(e)=>{
        let alphaExp = /^[a-zA-Z]+$/ ;
        let numExp = /^[0-9]+$/ ;
        let emailExp=/^[a-zA-Z0-9]+@[a-zA-z]+.[a-zA-z]+$/;
        e.preventDefault();
        if(name === ""){
            document.getElementById("nameNote").innerHTML = "Please Enter Name";
        }
        else{
            if(name.match(alphaExp)){
                document.getElementById("nameNote").innerHTML = "";
            }
            else{
                document.getElementById("nameNote").innerHTML = "Please Enter Characters only";
            }
        }
        if (phone === ""){
            document.getElementById("phoneNote").innerHTML="Please Enter Phone Number";
        }
        else{
            if(phone.match(numExp)){
                if(phone.length===10){
                document.getElementById("phoneNote").innerHTML="";
                }
                else{
                document.getElementById("phoneNote").innerHTML="Please Enter 10 Digits";
                }
            }
            else{
                document.getElementById("phoneNote").innerHTML="Please Enter Digits Only";
            }
        }
        if (email === ""){
            document.getElementById("emailNote").innerHTML="Please Enter Email";
        }
        else{
            if(email.match(emailExp)){
                document.getElementById("emailNote").innerHTML="";
            }
            else{
                document.getElementById("emailNote").innerHTML="Please Enter Valid Email Id";
            }
        }
        if(designation === ""){
            document.getElementById("designationNote").innerHTML = "Please Enter Your Designation";
        }
        else{
            if(designation.match(alphaExp)){
                document.getElementById("designationNote").innerHTML = "";
            }
            else{
                document.getElementById("designationNote").innerHTML = "Please Enter Characters only";
            }
        }
        if (salary === ""){
            document.getElementById("salaryNote").innerHTML="Please Enter Your Salary";
        }
        else{
            if(salary.match(numExp)){
                document.getElementById("salaryNote").innerHTML = "";
            }
            else{
                document.getElementById("salaryNote").innerHTML="Please Enter Digits Only";
            }
        }

        axios.post("http://localhost:4000/employee/",{name,phone,email,designation,salary})
        .then((res)=>{
            alert("employee added successfully");
            setName("");
            setPhone("");
            setEmail("");
            setDesignation("");
            setSalary("");
        })
        .catch((err)=>{
            alert("unable to add employee");
        })
    }
  return (
    <>
        <section className={innerStyles.breadcrumb}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1>Add Employee</h1>
                    </div>
                </div>
            </div>
        </section>
        <section className='py-4'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'></div>
                    <div className='col-md-4'>
                        <form className={innerStyles.formstyle}>
                            <div className='mb-3'>
                                <input type='text' name='name' placeholder='Name' className='form-control' value={name} onChange={(e)=>setName(e.target.value)}/>
                                <div id='nameNote' className='text-danger'></div>
                            </div>
                            <div className='mb-3'>
                                <input type='text' name='phone' placeholder='Phone' className='form-control' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                                <div id='phoneNote' className='text-danger'></div>
                            </div>
                            <div className='mb-3'>
                                <input type='text' name='email' placeholder='Email' className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                <div id='emailNote' className='text-danger'></div>
                            </div>
                            <div className='mb-3'>
                                <input type='text' name='designation' placeholder='Designation' className='form-control' value={designation}
                                onChange={(e)=>setDesignation(e.target.value)}/>
                                <div id='designationNote' className='text-danger'></div>
                            </div>
                            <div className='mb-3'>
                                <input type='text' name='salary' placeholder='Salary' className='form-control' value={salary}
                                onChange={(e)=>setSalary(e.target.value)}/>
                                <div id='salaryNote' className='text-danger'></div>
                            </div>
                            <div className='mb-3'>
                                <input type='button' value='Add Employee' className='btn btn-danger' onClick={addEmployee}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default AddEmployee;
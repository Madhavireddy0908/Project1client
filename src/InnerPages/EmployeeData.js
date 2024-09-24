import React, { useEffect, useState } from 'react';
import innerStyles from "./innerpages.module.css";
import axios from "axios";
import "jquery/dist/jquery.js";
import "datatables.net-dt/js/dataTables.dataTables.min.js";
import "datatables.net-dt/css/dataTables.dataTables.min.css";
import $ from "jquery";

const EmployeeData = () => {
    const [employee, setEmployee] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:4000/employee/")
        .then((res)=>{
            setEmployee(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
        $(function(){
            setTimeout(()=>{
                $("#dtable").DataTable();
            },1000);
        });    
    })

  return (
    <>
        <section className={innerStyles.breadcrumb}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1>Employee Data</h1>
                    </div>
                </div>
            </div>
        </section>
        <section className='py-4'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='table-responsive'>
                            <table className='table table-bordered' id='dtable'>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                        <th>Designation</th>
                                        <th>Salary</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        employee.map((emp)=>{
                                            return(
                                                <tr key={emp._id}>
                                                    <td>{emp.name}</td>
                                                    <td>{emp.phone}</td>
                                                    <td>{emp.email}</td>
                                                    <td>{emp.designation}</td>
                                                    <td>{emp.salary}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default EmployeeData;
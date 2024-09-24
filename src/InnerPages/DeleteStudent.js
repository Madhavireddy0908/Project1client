import React, { useEffect, useState } from 'react';
import innerStyles from "./innerpages.module.css";
import axios from "axios";
import { NavLink } from 'react-router-dom';

const DeleteStudent = () => {
    const [student, setStudent] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:4000/student/")
        .then((res)=>{
            setStudent(res.data);
        })
        .catch((err)=>{
            alert(err);
        })
    })
    const deleteStudent = (sid)=>{
        axios.delete(`http://localhost:4000/student/${sid}`)
        .then((res)=>{
            alert("student deleted succ...")
        })
        .catch((err)=>{
            alert("unable to delete student data")
        })
    }

  return (
    <>
        <section className={innerStyles.breadcrumb}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1>Student Data</h1>
                    </div>
                </div>
            </div>
        </section>
        <section className='py-4'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='table-responsive'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                        <th>Address</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        student.map((stu)=>{
                                            return(
                                                <tr key={stu._id}>
                                                    <td>{stu.name}</td>
                                                    <td>{stu.phone}</td>
                                                    <td>{stu.email}</td>
                                                    <td>{stu.address}</td>
                                                    <td>
                                                        <button className='btn btn-danger me-3' onClick={(e)=>deleteStudent(stu._id)}>Delete</button>
                                                        <NavLink to={`/editstudent/${stu._id}`}>
                                                            <button className='btn btn-danger'>Edit</button>
                                                        </NavLink>
                                                    </td>
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

export default DeleteStudent;
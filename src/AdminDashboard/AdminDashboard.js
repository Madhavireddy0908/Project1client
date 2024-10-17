import React, { useContext, useEffect, useState } from 'react';
import adminStyles from "./admin.module.css";
import { Outlet, useNavigate } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import { Store } from '../App';
import axios from 'axios';

const AdminDashboard = () => {
    const [token,setToken] = useContext(Store);
    const [data,setData] = useState("");
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get("https://project1server-3.onrender.com/signup/admindashboard",{
        headers:{
            "x-token": token
        }
        })
        .then((res)=>{
            setData(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
        if(!token){
            navigate("/admin");
        }
    })
  return (
    <>
    <section className={adminStyles.breadcrumb}>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <h1>{data}-Admin Dashboard</h1>
                </div>
            </div>
        </div>
    </section>
    <section className='py-4'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-3'>
                    <AdminSidebar/>
                </div>
                <div className='col-lg-9'>
                    <Outlet/>
                </div>
            </div>
        </div>
    </section>
    </>    
  )
}

export default AdminDashboard;

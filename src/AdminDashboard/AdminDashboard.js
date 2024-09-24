import React from 'react';
import adminStyles from "./admin.module.css";
import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';

const AdminDashboard = () => {
  return (
    <>
    <section className={adminStyles.breadcrumb}>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <h1>Admin Dashboard</h1>
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
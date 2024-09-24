import React from 'react';
import adminStyles from "./admin.module.css";
import { NavLink } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <div className={adminStyles.adminsidebar}>
        <ul>
            <li>
                <NavLink to="">Add Treatments</NavLink>
            </li>
            <li>
                <NavLink to="editdeletetreatment">Edit & Delete Treatments</NavLink>
            </li>
            <li>
                <NavLink to="addoffer">Add Offers</NavLink>
            </li>
            <li>
                <NavLink to="editdeleteoffer">Edit & Delete Offers</NavLink>
            </li>
            <li>
                <NavLink to="adddoctor">Add Doctors</NavLink>
            </li>
            <li>
                <NavLink to="editdeletedoctor">Edit & Delete Doctors</NavLink>
            </li>
            <li>
                <NavLink to="appointmentdata">Appointment Data</NavLink>
            </li>
            <li>
                <NavLink to="editdeleteappointment">Edit & Delete Appointment</NavLink>
            </li>
            <li>
                <NavLink to="enquirydata">Enquiry Data</NavLink>
            </li>
            <li>
                <NavLink to="editdeleteenquiry">Edit & Delete Enquiry</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default AdminSidebar
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './InnerPages/Home';
import AboutUs from './InnerPages/AboutUs';
import Treatments from './InnerPages/Treatments';
import TreatmentDetails from './InnerPages/TreatmentDetails';
import BookAppointment from './InnerPages/BookAppointment';
import ContactUs from './InnerPages/ContactUs';
import NoPage from './InnerPages/NoPage';
import Admin from './AdminDashboard/Admin';
import Register from './AdminDashboard/Register';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import AddTreatment from './AdminDashboard/AddTreatment';
import EditDeleteTreatment from './AdminDashboard/EditDeleteTreatment';
import EditTreatmentForm from './AdminDashboard/EditTreatmentForm';
import AddOffer from './AdminDashboard/AddOffer';
import EditDeleteOffer from './AdminDashboard/EditDeleteOffer';
import EditOfferForm from './AdminDashboard/EditOfferForm';
import AppointmentData from './AdminDashboard/AppointmentData';
import EditDeleteAppointment from './AdminDashboard/EditDeleteAppointment';
import EditAppointmentForm from './AdminDashboard/EditAppointmentForm';
import EnquiryData from './AdminDashboard/EnquiryData';
import EditDeleteEnquiry from './AdminDashboard/EditDeleteEnquiry';
import EditEnquiryForm from './AdminDashboard/EditEnquiryForm';
import AddDoctor from './AdminDashboard/AddDoctor';
import EditDeleteDoctor from './AdminDashboard/EditDeleteDoctor';
import EditDoctorForm from './AdminDashboard/EditDoctorForm';

const Routing = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/aboutus' element={<AboutUs/>} />
            <Route path='/treatments' element={<Treatments/>} />
            <Route path='/treatmentdetails/:tname' element={<TreatmentDetails/>} />
            <Route path='/bookappointment' element={<BookAppointment/>} />
            <Route path='/contactus' element={<ContactUs/>} />
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/register' element={<Register/>} />
            <Route path='/admindashboard' element={<AdminDashboard/>}>
              <Route path='' element={<AddTreatment/>}/>
              <Route path='editdeletetreatment' element={<EditDeleteTreatment/>}/>
              <Route path='addoffer' element={<AddOffer/>}/>
              <Route path='editdeleteoffer' element={<EditDeleteOffer/>}/>
              <Route path='adddoctor' element={<AddDoctor/>}/>
              <Route path='editdeletedoctor' element={<EditDeleteDoctor/>}/>
              <Route path='appointmentdata' element={<AppointmentData/>}/>
              <Route path='editdeleteappointment' element={<EditDeleteAppointment/>}/>
              <Route path='enquirydata' element={<EnquiryData/>}/>
              <Route path='editdeleteenquiry' element={<EditDeleteEnquiry/>}/>
            </Route>
            <Route path="edittreatmentform/:tid" element={<EditTreatmentForm/>}/>
            <Route path="editofferform/:oid" element={<EditOfferForm/>}/>
            <Route path="editdoctorform/:did" element={<EditDoctorForm/>}/>
            <Route path="editappointmentform/:aid" element={<EditAppointmentForm/>}/>
            <Route path="editenquiryform/:eid" element={<EditEnquiryForm/>}/>
            <Route path='*' element={<NoPage/>} />

            {/*}<Route path='/addstudent' element={<AddStudent/>} />
            <Route path='/studentdata' element={<StudentData/>} />
            <Route path='/deletestudent' element={<DeleteStudent/>} />
            <Route path='/editstudent/:id' element={<EditStudent/>} />
            <Route path='/addemp' element={<AddEmployee/>} />
            <Route path='/employeedata' element={<EmployeeData/>} />
            <Route path='/deleteemployee' element={<DeleteEmployee/>} />
            <Route path='/editemployee/:id' element={<EditEmployee/>} />*/}
        </Routes>
    </>
  )
}

export default Routing;
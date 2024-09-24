import React,{useState,useEffect} from 'react';
import { useParams , useNavigate} from 'react-router-dom';
import axios from 'axios';
import adminStyles from "./admin.module.css";

const EditDoctorForm = () => {
    const [tname,setTname] = useState("");
    const [dname,setDname] = useState("");
    const [dqual,setDqual] = useState("");
    const [yoe,setYoe] = useState("");
    const [hos,setHos] = useState("");
    const {did}=useParams();
    const navigate=useNavigate();
    useEffect(()=>{
        axios
        .get(`http://localhost:4000/doctor/${did}`)
        .then((res)=>{
            setTname(res.data.tname);
            setDname(res.data.dname);
            setDqual(res.data.dqual);
            setYoe(res.data.yoe);
            setHos(res.data.hos);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[did])  
    const updateDoctor=(e)=>{
        e.preventDefault();
        axios
        .put(`http://localhost:4000/doctor/${did}`,{tname,dname,dqual,yoe,hos})
        .then((res)=>{
            alert("Doctor Edited Successfully");
            navigate("/admindashboard/editdeletedoctor")
        })
        .catch((err)=>{
            alert("Unable to Edit Doctor");
    
        })
    }
  return (
    <div>
    <main>
    <section className={adminStyles.breadcrumb}>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <h1>Edit Doctor</h1>
                </div>
            </div>
        </div>
    </section>
    <section className='pb-4'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-3'></div>
                <div className={`col-md-6 ${adminStyles.formstyles}`}>
                <form onSubmit={updateDoctor}>
                    <div className='mb-3'>
                        <input type='text' className='form-control' placeholder='Treatment Name' value={tname} onChange={(e)=>setTname(e.target.value)}/>
                    </div>
                    <div className='mb-3'>
                        <input type='text' className='form-control' placeholder='Doctor Name' value={dname} onChange={(e)=>setDname(e.target.value)}/>
                    </div>
                    <div className='mb-3'>
                        <input type='text' className='form-control' placeholder='Doctor Qualification' value={dqual} onChange={(e)=>setDqual(e.target.value)}/>
                    </div>
                    <div className='mb-3'>
                        <input type='text' className='form-control' placeholder='Years of Experience' value={yoe} onChange={(e)=>setYoe(e.target.value)}/>
                    </div>
                    <div className='mb-3'>
                        <input type='text' className='form-control' placeholder='Hospital' value={hos} onChange={(e)=>setHos(e.target.value)}/>
                    </div>
                    <div className='mb-3'>
                        <input type='submit' value='Edit Doctor' className='btn btn-danger float-end'/>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </section>
    </main>
    </div>
  )
}

export default EditDoctorForm;
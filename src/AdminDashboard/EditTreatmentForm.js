import React,{useState,useEffect} from 'react';
import { useParams , useNavigate} from 'react-router-dom';
import axios from 'axios';
import adminStyles from "./admin.module.css";

const EditTreatmentForm = () => {
    const [tname,setTname] = useState("");
    const [tdesc,setTdesc] = useState("");
    const {tid}=useParams();
    const navigate=useNavigate();
    useEffect(()=>{
        axios
        .get(`http://localhost:4000/treatment/${tid}`)
        .then((res)=>{
            setTname(res.data.tname);
            setTdesc(res.data.tdesc);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[tid])  
    const updateTreatment=(e)=>{
        e.preventDefault();
        axios
        .put(`http://localhost:4000/treatment/${tid}`,{tname,tdesc})
        .then((res)=>{
            alert("Treatment Edited Successfully");
            navigate("/admindashboard/editdeletetreatment")
        })
        .catch((err)=>{
            alert("Unable to Edit Treatment");
    
        })
    }
  return (
    <div>
    <main>
    <section className={adminStyles.breadcrumb}>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <h1>Edit Treatment</h1>
                </div>
            </div>
        </div>
    </section>
    <section className='pb-4'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-3'></div>
                <div className={`col-md-6 ${adminStyles.formstyles}`}>
                <form onSubmit={updateTreatment}>
                    <div className='mb-3'>
                        <input type='text' className='form-control' placeholder='Treatment Name' value={tname} onChange={(e)=>setTname(e.target.value)}/>
                    </div>
                    <div className='mb-3'>
                        <textarea type='text' className='form-control' placeholder='Description' value={tdesc} onChange={(e)=>setTdesc(e.target.value)}></textarea>
                    </div>
                    <div className='mb-3'>
                        <input type='submit' value='Edit Treatment' className='btn btn-danger float-end'/>
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

export default EditTreatmentForm;
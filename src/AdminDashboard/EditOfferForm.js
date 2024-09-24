import React,{useState,useEffect} from 'react';
import { useParams , useNavigate} from 'react-router-dom';
import axios from 'axios';
import adminStyles from "./admin.module.css";

const EditOfferForm = () => {
    const [oname,setOname] = useState("");
    const [oprice,setOprice] = useState("");
    const {oid}=useParams();
    const navigate=useNavigate();
    useEffect(()=>{
        axios
        .get(`http://localhost:4000/offer/${oid}`)
        .then((res)=>{
            setOname(res.data.oname);
            setOprice(res.data.oprice);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[oid])  
    const updateOffer=(e)=>{
        e.preventDefault();
        axios
        .put(`http://localhost:4000/offer/${oid}`,{oname,oprice})
        .then((res)=>{
            alert("Offer Edited Successfully");
            navigate("/admindashboard/editdeleteoffer")
        })
        .catch((err)=>{
            alert("Unable to Edit Offer");
    
        })
    }
  return (
    <div>
    <main>
    <section className={adminStyles.breadcrumb}>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <h1>Edit Offer</h1>
                </div>
            </div>
        </div>
    </section>
    <section className='py-4'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-3'></div>
                <div className={`col-md-6 ${adminStyles.formstyles}`}>
                <form onSubmit={updateOffer}>
                    <div className='mb-3'>
                        <input type='text' className='form-control' placeholder='Offer Name' value={oname} onChange={(e)=>setOname(e.target.value)}/>
                    </div>
                    <div className='mb-3'>
                        <input type='text' className='form-control' placeholder='Description' value={oprice} onChange={(e)=>setOprice(e.target.value)}/>
                    </div>
                    <div className='mb-3'>
                        <input type='submit' value='Edit Offer' className='btn btn-danger float-end'/>
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

export default EditOfferForm;
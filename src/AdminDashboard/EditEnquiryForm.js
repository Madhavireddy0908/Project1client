import React,{useState,useEffect} from 'react';
import { useParams , useNavigate} from 'react-router-dom';
import axios from 'axios';
import adminStyles from "./admin.module.css";

const EditEnquiryForm = () => {
  const [uname,setUname] = useState("");
  const [phone,setPhone] = useState("");
  const [email,setEmail] = useState("");
  const [sub,setSub] = useState("");
  const [msg,setMsg] = useState("");
  const {eid}=useParams();
  const navigate=useNavigate();
  useEffect(()=>{
      axios
      .get(`https://project1server-3.onrender.com/enquiry/${eid}`)
      .then((res)=>{
          setUname(res.data.uname);
          setPhone(res.data.phone);
          setEmail(res.data.email);
          setSub(res.data.sub);
          setMsg(res.data.msg);
      })
      .catch((err)=>{
          console.log(err);
      })
  },[eid])  
  const updateEnquiry=(e)=>{
      e.preventDefault();
      axios
      .put(`https://project1server-3.onrender.com/enquiry/${eid}`,{uname,phone,email,sub,msg})
      .then((res)=>{
          alert("Enquiry Edited Successfully");
          navigate("/admindashboard/editdeleteenquiry")
      })
      .catch((err)=>{
          alert("Unable to Edit Enquiry");
  
      })
  }

  return (
    <>
    <section className={adminStyles.breadcrumb}>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <h1>Edit Enquiry</h1>
                </div>
            </div>
        </div>
    </section>
    <section className='pb-4'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-3'></div>
                <div className={`col-md-6 ${adminStyles.formstyles}`}>
                <form onSubmit={updateEnquiry}>
                    <div className='mb-3'>
                        <input type='text' name="uname" placeholder='Name' className="form-control" value={uname} onChange={(e)=>setUname(e.target.value)}/>
                    </div>
                    <div className='mb-3'> 
                        <input type="tel" name="phone" placeholder="Phone" className="form-control" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                    </div>
                    <div className='mb-3'> 
                        <input type="email" name="email" placeholder="Email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className='mb-3'> 
                        <input type="text" name="sub" placeholder="Subject" className="form-control" value={sub} onChange={(e)=>setSub(e.target.value)}/>
                    </div>
                    <div className='mb-3'> 
                        <textarea name="msg" placeholder="Message" className="form-control" value={msg} onChange={(e)=>setMsg(e.target.value)} ></textarea>
                    </div>  
                    <div className='mb-3'>
                        <input type='submit' value='Edit Enquiry' className='btn btn-danger float-end'/>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </section>
    </>
  )}

export default EditEnquiryForm;

import React,{useState,useEffect} from 'react';
import { useParams , useNavigate} from 'react-router-dom';
import axios from 'axios';
import adminStyles from "./admin.module.css";

const EditAppointmentForm = () => {
  const [tname,setTname] = useState("");
  const [pname,setPname] = useState("");
  const [dname,setDname] = useState("");
  const [sub,setSub] = useState("");
  const [date,setDate] = useState("");
  const [time,setTime] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [msg,setMsg] = useState("");
  const {aid}=useParams();
  const navigate=useNavigate();
  useEffect(()=>{
      axios
      .get(`https://project1server-3.onrender.com/appointment/${aid}`)
      .then((res)=>{
          setTname(res.data.tname);
          setPname(res.data.pname);
          setDname(res.data.dname);
          setSub(res.data.sub);
          setDate(res.data.date);
          setTime(res.data.time);
          setEmail(res.data.email);
          setPhone(res.data.phone);
          setMsg(res.data.msg);
      })
      .catch((err)=>{
          console.log(err);
      })
  },[aid])  
  const updateAppointment=(e)=>{
      e.preventDefault();
      axios
      .put(`https://project1server-3.onrender.com/appointment/${aid}`,{tname,pname,dname,sub,date,time,email,phone,msg})
      .then((res)=>{
          alert("Appointment Edited Successfully");
          navigate("/admindashboard/editdeleteappointment")
      })
      .catch((err)=>{
          alert("Unable to Edit Appointment");
  
      })
  }

  return (
    <>
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
                <form onSubmit={updateAppointment}>
                    <div className='mb-3'>
                        <input type='text' name="tname" placeholder='Treatment Name' className="form-control" value={tname} onChange={(e)=>setTname(e.target.value)}/>
                    </div>
                    <div className='mb-3'> 
                        <input type="text" name="pname" placeholder="Patient Name" className="form-control" value={pname} onChange={(e)=>setPname(e.target.value)}/>
                    </div>
                    <div className='mb-3'> 
                        <input type="text" name="dname" placeholder="Doctor Name" className="form-control" value={dname} onChange={(e)=>setDname(e.target.value)}/>
                    </div>
                    <div className='mb-3'> 
                        <input type="text" name="sub" placeholder="Subject" className="form-control" value={sub} onChange={(e)=>setSub(e.target.value)}/>
                    </div>
                    <div className='mb-3'> 
                        <input type="date" name="date" placeholder="Date" className="form-control" value={date} onChange={(e)=>setDate(e.target.value)}/>
                    </div>
                    <div className='mb-3'> 
                        <input type="time" name="time" placeholder="Time" className="form-control" value={time} onChange={(e)=>setTime(e.target.value)}/>
                    </div>
                    <div className='mb-3'> 
                        <input type="email" name="email" placeholder="Email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className='mb-3'> 
                        <input type="tel" name="phone" placeholder="Phone" className="form-control" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                    </div>
                    <div className='mb-3'> 
                        <textarea name="msg" placeholder="Message" className="form-control" value={msg} onChange={(e)=>setMsg(e.target.value)} ></textarea>
                    </div>  
                    <div className='mb-3'>
                        <input type='submit' value='Edit Appointment' className='btn btn-danger float-end'/>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </section>
    </>
  )}

export default EditAppointmentForm;

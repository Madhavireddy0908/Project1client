import React, { useState } from 'react';
import axios from "axios";
import innerStyles from "./innerpages.module.css";

const BookAppointment = () => {
  const [tname,setTname]=useState("");
  const [pname,setPname]=useState("");
  const [dname,setDname]=useState("");
  const [sub,setSub]=useState("");
  const [date,setDate]=useState("");
  const [time,setTime]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [msg,setMsg]=useState("");
  const addAppointment=(e)=>{
      e.preventDefault();
      axios.post('http://localhost:4000/appointment',{tname,pname,dname,sub,date,time,email,phone,msg})
      .then((res)=>{
          alert("Appointment added Successfully")
          setTname("");
          setPname("");
          setDname("");
          setSub("");
          setDate("");
          setTime("");
          setEmail("");
          setPhone("");
          setMsg("");
      })
      .catch((err)=>{
          console.log(err);
      })
  }

  return (
    <div>
      <section className={innerStyles.breadcrumb}>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                  <h1>Book Appointment</h1>
                </div>
            </div>
        </div>
      </section>
      <section className='my-5'>
        <div className='container'>
            <div className='row'>
              <div className='col-md-1'></div>
                <div className='col-md-10'>
                    <form className={innerStyles.formstyle}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className='mb-4'> 
                                    <input type="text" name="tname" placeholder="Treatment Name" className="form-control" 
                                    value={tname} onChange={(e)=>setTname(e.target.value)}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className='mb-4'> 
                                    <input type="text" name="pname" placeholder="Patient Name" className="form-control" 
                                    value={pname} onChange={(e)=>setPname(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className='mb-4'> 
                                    <input type="text" name="dname" placeholder="Doctor Name" className="form-control" 
                                    value={dname} onChange={(e)=>setDname(e.target.value)}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className='mb-4'> 
                                    <input type="text" name="sub" placeholder="Subject" className="form-control" 
                                    value={sub} onChange={(e)=>setSub(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className='mb-4'> 
                                    <input type="date" name="date" placeholder="Date" className="form-control" 
                                    value={date} onChange={(e)=>setDate(e.target.value)}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className='mb-4'> 
                                    <input type="time" name="time" placeholder="Time" className="form-control" 
                                    value={time} onChange={(e)=>setTime(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className='mb-4'> 
                                    <input type="email" name="email" placeholder="Email" className="form-control" 
                                    value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className='mb-4'> 
                                    <input type="tel" name="phone" placeholder="Phone" className="form-control" 
                                    value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-md-12">
                                <div className='mb-4'> 
                                    <textarea name="msg" placeholder="Message" className="form-control" value={msg} onChange={(e)=>setMsg(e.target.value)} ></textarea>
                                </div>  
                                <div className='mb-3'> 
                                    <button className='btn btn-danger float-end' onClick={addAppointment}>Book Appointment</button>
                                </div>
                            </div>                  
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default BookAppointment;
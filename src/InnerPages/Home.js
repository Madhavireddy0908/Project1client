import React, { useEffect, useState } from 'react';
import innerStyles from "./innerpages.module.css";
import axios from "axios";
import banner from "./Website-Banner.webp";
import {NavLink} from "react-router-dom";
import {Icon} from "semantic-ui-react";
import bookapp from "./bookapp.webp";

const Home = () => {
  const[treat,setTreat]=useState([]);
  useEffect(()=>{
      axios
      .get('http://localhost:4000/treatment')
      .then((res)=>{
          setTreat(res.data);
      })
      .catch((err)=>{
          console.log(err);
      })
  })
  const [offer,setOffer]=useState([]);
  useEffect(()=>{
      axios.get('http://localhost:4000/offer')
      .then((res)=>{
          setOffer(res.data);
      })
      .catch((err)=>{
          console.log(err);
      })
  })
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
    <>
      <section className={innerStyles.banner}>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-12 p-0'>
              <img src={banner} alt='Banner'/>
            </div>
          </div>
        </div>
      </section>
      <section className={innerStyles.bg}>
        <div>
          {/* eslint-disable-next-line*/}
            <marquee>
            {offer.map((data)=>{
                return(
                    <span className='me-5'>
                        <Icon name="hand point right" className='me-2'/>
                        {data.oname} - {data.oprice}/-
                    </span>
                );
            })}
            </marquee>
        </div>
      </section>
      <section className={innerStyles.wel}>
        <div className='container my-4'>
          <div className='row mb-4'>
            <div className='col-md-12'>
              <h1>Welcome to <span>DermaLife</span></h1>
              <p>Surgylife is a comprehensive health care platform which connects patients requiring medical or surgical care to our team of physicians and surgeons<br/> across Hyderabad.</p>
            </div>
          </div>
          <div>
            <div className={innerStyles.dotline}>
              <div className='row'>
                <div className='col-lg-3'>
                  <div className={innerStyles.conbox}>
                    <div className={innerStyles.dot}></div>
                    <div className={innerStyles.count}>01</div>
                    <p className="p-2">Consultation to assess your condition.</p>
                  </div>
                </div>
                <div className='col-lg-3'>
                  <div className={innerStyles.conbox}>
                    <div className={innerStyles.dot}></div>
                    <div className={innerStyles.count}>02</div>
                    <p className="p-2">Suggestion of all possible treatment/surgical options.</p>
                  </div>
                </div>
                <div className='col-lg-3'>
                  <div className={innerStyles.conbox}>
                    <div className={innerStyles.dot}></div>
                    <div className={innerStyles.count}>03</div>
                    <p className="p-2">Admission and care under our expert team.</p>
                  </div>
                </div>
                <div className='col-lg-3'>
                  <div className={innerStyles.conbox}>
                    <div className={innerStyles.dot}></div>
                    <div className={innerStyles.count}>04</div>
                    <p className="p-2">Post care consult and home care services.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={innerStyles.treatment}>
        <div className='container py-4'>
          <div className='row'>
            <div className='col-md-12'>
            <h1>Our <span>Treatments</span></h1>
              <div className={innerStyles.ourbox}>
              <div className='row'>
                  {
                    treat.map((tdata)=>{
                    return(
                      <div className='col-md-3'>
                        <div className={innerStyles.ourbox}>
                          <NavLink to={`/treatmentdetails/${tdata.tname}`}>
                            <h1 key={tdata._id}>{tdata.tname}</h1>
                          </NavLink>
                        </div>
                      </div>
                    )
                    })
                  }
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
      <section className={innerStyles.bookappointment}>
        <div className='container py-2'>
            <div className='row'>
              <div className='col-md-5'>
                <img src={bookapp} alt='Bookappointment'/>
              </div>
                <div className='col-md-7 py-3'>
                <h1>Book <span>Appointment</span></h1>
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
    </>
  )
}

export default Home;
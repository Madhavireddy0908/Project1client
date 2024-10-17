import React, { useEffect, useState } from 'react';
import axios from 'axios';
import innerStyles from "./innerpages.module.css";
import { NavLink, useParams } from 'react-router-dom';

const TreatmentDetails = () => {
  const[treat,setTreat]=useState("");
  const[doc,setDoc]=useState("");
  const {tname} = useParams();
  useEffect(()=>{
      axios
      .get(`https://project1server-3.onrender.com/treatment/${tname}`)
      .then((res)=>{
        setTreat(res.data.tdesc);
      })
      .catch((err)=>{
        console.log(err);
      })
      axios
      .get(`https://project1server-3.onrender.com/doctor/${tname}`)
      .then((res)=>{
        setDoc(res.data);
      })
      .catch((err)=>{
        console.log(err);
      })
  })  

  return (
    <>
      <section className={innerStyles.breadcrumb}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h1>{tname}</h1>
            </div>
          </div>
        </div>
      </section>
      <section className={innerStyles.des}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 py-3'>
              <p>{treat}</p>
            </div>
          </div>
        </div>
      </section>
      <section className={innerStyles.doct}>
        <div className='container'>
          <div className='row'>
            <div className="col-md-3">
              <h2 className='m-0 py-2' key={doc._id}>{doc.dname}</h2>
              <p className='m-0 py-1'>{doc.dqual}</p>
              <p className='m-0 py-1'>{doc.yoe}</p>
              <p className='m-0 py-1 mb-3'>{doc.hos}</p>
            </div>
            <div className='col-md-2'>
              <NavLink to={"/bookappointment"}>
                <button className='btn btn-danger mt-5'>Book Appointment</button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TreatmentDetails;

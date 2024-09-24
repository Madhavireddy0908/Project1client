import React, { useEffect, useState } from 'react';
import axios from 'axios';
import innerStyles from "./innerpages.module.css";

const TreatmentDetails = () => {
  const[treat,setTreat]=useState([]);
  useEffect(()=>{
      axios
      .get(`http://localhost:4000/treatment`)
      .then((res)=>{
          setTreat(res.data);
      })
      .catch((err)=>{
          console.log(err);
      })
  })  
  const[doctor,setDoctor]=useState([]);
  useEffect(()=>{
      axios
      .get(`http://localhost:4000/doctor`)
      .then((res)=>{
          setDoctor(res.data);
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
              <h1>Treatment Details</h1>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              {
                treat.map((tdata)=>{
                  return(
                    <div>
                      <h2 key={tdata._id}>{tdata.tname}</h2>
                      <p>{tdata.tdesc}</p>
                    </div>
                  )
                })
              }
              {
                doctor.map((data)=>{
                  return(
                    <div className='my-3'>
                      <h3 key={data._id}>{data.tname}</h3>
                      {data.dname}<br/>
                      {data.dqual}<br/>
                      {data.yoe}<br/>
                      {data.hos}<br/>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TreatmentDetails;
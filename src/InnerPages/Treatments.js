import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import innerStyles from "./innerpages.module.css";

const Treatments = () => {
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

  return (
    <div>
      <section className={innerStyles.breadcrumb}>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <h1>Treatments</h1>
                </div>
            </div>
        </div>
      </section>
      <section className={innerStyles.treatment}>
        <div className='container py-4'>
          <div className='row'>
            <div className='col-md-12'>
              <div className={innerStyles.ourbox}>
              <div className='row'>
                  {
                    treat.map((tdata)=>{
                    return(
                      <div className='col-md-3'>
                        <div className={innerStyles.ourbox}>
                          <NavLink to={`/treatmentdetails/${tdata._id}`}>
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
    </div>
  )
}

export default Treatments;
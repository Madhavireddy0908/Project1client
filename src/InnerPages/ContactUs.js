import React, { useState } from 'react';
import {Icon} from "semantic-ui-react";
import innerStyles from "./innerpages.module.css";
import axios from "axios";

const ContactUs = () => {
  const [uname,setUname]=useState("");
  const [phone,setPhone]=useState("");
  const [email,setEmail]=useState("");
  const [sub,setSub]=useState("");
  const [msg,setMsg]=useState("");
  const addEnquiry=(e)=>{
    let alphaExp = /^[a-zA-Z]+$/ ;
    let numExp = /^[0-9]+$/ ;
    let emailExp=/^[a-zA-Z0-9]+@[a-zA-z]+.[a-zA-z]+$/;
      e.preventDefault();
    if(uname === ""){
      document.getElementById("unameNote").innerHTML = "Please Enter Your Name";
    }
    else{
        if(uname.match(alphaExp)){
            document.getElementById("unameNote").innerHTML = "";
        }
        else{
            document.getElementById("unameNote").innerHTML = "Please Enter Characters only";
        }
    }
    if (phone === ""){
        document.getElementById("phoneNote").innerHTML="Please Enter Phone Number";
    }
    else{
        if(phone.match(numExp)){
            if(phone.length===10){
            document.getElementById("phoneNote").innerHTML="";
            }
            else{
            document.getElementById("phoneNote").innerHTML="Please Enter 10 Digits";
            }
        }
        else{
            document.getElementById("phoneNote").innerHTML="Please Enter Digits Only";
        }
    }
    if (email === ""){
        document.getElementById("emailNote").innerHTML="Please Enter Email";
    }
    else{
        if(email.match(emailExp)){
            document.getElementById("emailNote").innerHTML="";
        }
        else{
            document.getElementById("emailNote").innerHTML="Please Enter Valid Email Id";
        }
    }
    if(sub === ""){
        document.getElementById("subNote").innerHTML = "Please Enter Subject";
    }
    else{
        if(sub.match(alphaExp)){
            document.getElementById("subNote").innerHTML = "";
        }
        else{
            document.getElementById("subNote").innerHTML = "Please Enter Characters only";
        }
    }
    if (msg === ""){
        document.getElementById("msgNote").innerHTML="Please Enter Message";
    }
    else{
        if(msg.match(alphaExp)){
            document.getElementById("msgNote").innerHTML = "";
        }
        else{
            document.getElementById("msgNote").innerHTML="Please Enter Characters Only";
        }
    }

      axios.post('http://localhost:4000/enquiry',{uname,phone,email,sub,msg})
      .then((res)=>{
          alert("Appointment added Successfully")
          setUname("");
          setPhone("");
          setEmail("");
          setSub("");
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
                    <h1>Contact Us</h1>
                </div>
            </div>
        </div>
      </section>
      <section className='my-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8'>
              <div className={innerStyles.cform}>
                <h3>Quick Enquiry</h3>
                    <form onSubmit={addEnquiry}>
                        <div class="row">
                            <div class="col-md-6">
                                <div>
                                  <input type="text" name="uname" placeholder="Your Name" className="form-control" value={uname} onChange={(e)=>setUname(e.target.value)}/>
                                  <div id='unameNote' className='text-danger'></div>
                                </div>        
                            </div>
                            <div class="col-md-6">
                                <div>
                                  <input type="tel" name="phone" placeholder="Phone" className="form-control" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                                  <div id='phoneNote' className='text-danger'></div>
                                </div>        
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div>
                                  <input type="email" name="email" placeholder="Email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                  <div id='emailNote' className='text-danger'></div>
                                </div>        
                            </div>
                            <div class="col-md-6">
                                <div>
                                  <input type="text" name="sub" placeholder="Subject" className="form-control" value={sub} onChange={(e)=>setSub(e.target.value)}/>
                                  <div id='subNote' className='text-danger'></div>

                                </div>        
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div>
                                  <textarea name="msg" placeholder="Message" className="form-control" value={msg} onChange={(e)=>setMsg(e.target.value)} ></textarea>
                                  <div id='msgNote' className='text-danger'></div>
                                </div>
                                <div>
                                    <input type="submit" value="Submit" className='btn btn-danger float-end'/>    
                                </div>        
                            </div>
                        </div>  
                    </form>
              </div>
            </div>
            <div className='col-md-4'>
              <div className={innerStyles.condel}>
                    <div>
                        <h3>Contact Details</h3>
                        <div className="my-4">
                            <Icon circular inverted name='home'/>
                            <span>Address</span>
                            <p>KBK Hospital, 7-3-112, Saraswathi Nagar Omkar Nagar, Nagarjuna Sagar Rd, L. B. Nagar, Hyderabad, Telangana 500079
                            </p>
                        </div>
                        <div className='mb-4'>
                            <Icon circular inverted name='phone'/>
                            <span>Phone Number</span>
                            <p>+91 9876543210</p>
                        </div>
                        <div className='mb-4'>
                            <Icon circular inverted name='envelope'/>
                            <span>Email</span>
                            <p>kbkhospital@gmail.com</p>
                        </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container-fluid p-0'>
          <div className='row'>
            <div className='col-lg-12'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.34203726327!2d78.24323061160032!3d17.412281014162676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1723388146553!5m2!1sen!2sin" width="100%" height="450" title='map'></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs;
import React from 'react';
import footerStyles from "./footer.module.css";
import { NavLink } from 'react-router-dom';
import { Icon } from "semantic-ui-react";

const Footer = () => {
  return (
    <div>
    <footer className={footerStyles.footer}>
        <div className={footerStyles.tfooter}>
          <div className={footerStyles.foot}>
            <div className="container pb-3">
                <div className="row">
                    <div className="col-lg-3">
                        <div className={footerStyles.box1}>
                        <h6>About DermaLife Associates</h6>
                        <p>DermaLife is a multi-speciality healthcare platform delivering a hassle-free experience for all your surgeries and medical needs with personalized care.</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className={footerStyles.box2}>
                        <h6>Quick Links</h6>
                        <div>
                            <ul>
                                <li><NavLink to="/treatments" >Treatments</NavLink></li>
                                <li><NavLink to="/bookappointment" >Book Appointment</NavLink></li>
                                <li><NavLink to="/aboutus" >About Us</NavLink></li>
                                <li><NavLink to="/contactus" >Contact Us</NavLink></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className={footerStyles.box3}>
                        <h6>Contact Us</h6>
                        <p><Icon name="map marker alternate"/> C2 Hills<br/> Punjagutta Officers Colony,<br/> Punjagutta, Hyderabad <br/>Telangana, 500082.
                        </p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className={footerStyles.box4}>
                        <h6>Newsletter</h6>
                        <div className={footerStyles.news}>
                            <ul>
                                <li>
                                  <NavLink to="tel:+91 8985318181"><Icon name="phone"/> +91 89853 18181</NavLink>
                                </li>
                                <li>
                                  <NavLink to="tel:+91 8985418181"><Icon name="phone"/> +91 89853 18181</NavLink>
                                </li>
                                <li>
                                  <NavLink to="mailto:dermalife@gmail.com"> <Icon name="envelope"/> dermalife@gmail.com</NavLink>
                                </li>
                            </ul>                   
                        </div>
                        </div>
                        <div className={footerStyles.socialicons}>
                            <ul>
                                <li>
                                    <NavLink to="/"><Icon name="facebook square"/></NavLink>
                                </li>
                                <li>
                                    <NavLink to="/"><Icon name="linkedin square"/></NavLink>
                                </li>
                                <li>
                                    <NavLink to="/"><Icon name="youtube square"/></NavLink>
                                </li>
                                <li>
                                    <NavLink to="/"><Icon name="instagram"/></NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div className={footerStyles.bfooter}>
            <div className="container pb-3">
                <div className="row">
                    <div className="col-lg-6">
                        <p>&copy; 2024 by DermaLife Associates</p>
                    </div>
                    <div className="col-lg-6">
                        <p className="float-end">Designed by <span>Madhavi Reddy</span></p>
                    </div>    
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer;
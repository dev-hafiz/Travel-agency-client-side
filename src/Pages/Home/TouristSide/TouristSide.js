import React from 'react';
import './TroristSide.css';
import m1 from '../../../../src/Musem/museum1.jpg';
import m2 from '../../../../src/Musem/museum2.jpg';
import m3 from '../../../../src/Musem/museum3.jpg';
import m4 from '../../../../src/Musem/museum4.jpg';
import m5 from '../../../../src/Musem/museum5 (1).jpg';
import m6 from '../../../../src/Musem/museum6.jpg';
import { NavLink } from 'react-router-dom';
const TouristSide = () => {
     return (
          <div id="Hover-slider">
          <div className="Sub_title">
                <h2>Best tourist Blogs</h2>
          </div>

               <div  className="container my-divission">
               <div className="row hover-box-wrapper">
                    <div className="col-lg-4 col-md-4 col-12">
                    <div className="Singel-hover-slider">

                    <img src={m1} alt="" />

                    <div className="meta-content">
                    <div className="meta-box">
                         <NavLink to="/explore" className="alink-first">Museum</NavLink>
                         <h1>Meusem of the world's</h1>
                    </div>
                    <NavLink to="/explore" className="2nd-link">Learn more <i className="fas fa-chevron-right"></i> </NavLink>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                    <div className="Singel-hover-slider">

                    <img src={m2} alt="" />

                    <div className="meta-content">
                    <div className="meta-box">
                         <NavLink to="/explore" className="alink-first">Museum</NavLink>
                         <h1>Art fast visite place</h1>
                    </div>
                    <NavLink to="/explore" className="2nd-link">Learn more <i className="fas fa-chevron-right"></i> </NavLink>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                    <div className="Singel-hover-slider">

                    <img src={m3} alt="" />

                    <div className="meta-content">
                    <div className="meta-box">
                         <NavLink to="/explore" className="alink-first">Museum</NavLink>
                         <h1>Inside the hall room</h1>
                    </div>
                    <NavLink to="/explore" className="2nd-link">Learn more <i className="fas fa-chevron-right"></i> </NavLink>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                    <div className="Singel-hover-slider">

                    <img src={m4} alt="" />

                    <div className="meta-content">
                    <div className="meta-box">
                         <NavLink to="/explore" className="alink-first">Museum</NavLink>
                         <h1>One of the best art</h1>
                    </div>
                    <NavLink to="/explore" className="2nd-link">Learn more <i className="fas fa-chevron-right"></i> </NavLink>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                    <div className="Singel-hover-slider">

                    <img src={m5} alt="" />

                    <div className="meta-content">
                    <div className="meta-box">
                         <NavLink to="/explore" className="alink-first">Museum</NavLink>
                         <h1>Visit rhe forest beauty</h1>
                    </div>
                    <NavLink to="/explore" className="2nd-link">Learn more <i className="fas fa-chevron-right"></i> </NavLink>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                    <div className="Singel-hover-slider">

                    <img src={m6} alt="" />

                    <div className="meta-content">
                    <div className="meta-box">
                         <NavLink to="/explore" className="alink-first">Museum</NavLink>
                         <h1> historical forest here</h1>
                    </div>
                    <NavLink to="/explore" className="2nd-link">Learn more <i className="fas fa-chevron-right"></i> </NavLink>
                    </div>
                    </div>
                    </div>
               </div>
               </div>
          </div>
     );
};

export default TouristSide;
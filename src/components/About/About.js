import React from "react";
import "./About.css";
import { FaCertificate } from "react-icons/fa";
import { FaUsersCog } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
function About() {
  return (
    <div className="about">
      <div className="box-1">
        <div className="icon-box">
        <FaCertificate />
        </div>
        <div className="cont">
        <span>Quality Servicing</span>
        <br/>
        <br/>
        <p>Diam dolor diam ipsum sit amet diam et eos erat ipsum</p>
        <br/>
        <a href="#">Read More</a>
        </div>
      </div>



      <div className="box-2">
        <div className="icon-box">
        <FaUsersCog />
        </div>
       <div className="cont-2">
       <span>Expert Workers</span>
       <br/>
       <br/>
        <p>Diam dolor diam ipsum sit amet diam et eos erat ipsum</p>
        <br/>
        <a href="#">Read More</a>
       </div>
      </div>






      <div className="box-3">
        <div className="icon-box">
        <FaTools />
        </div>
        <div className="cont-3">
        <span>Modern Equipment</span>
        <br/>
       <br/>
        <p>Diam dolor diam ipsum sit amet diam et eos erat ipsum</p>
        <br/>
        <a href="#">Read More</a>
        </div>

      </div>
    </div>
  );
}

export default About;

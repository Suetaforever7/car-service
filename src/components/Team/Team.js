import React from "react";
import "./Team.css";
import team1 from "../images/team-1.png";
import team2 from "../images/team-2.png";
import team3 from "../images/team-3.png";
import team4 from "../images/team-4.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Team() {
  return (
    <div className="team">
      <div className="container">
        <div className="top-text">
          <span>// OUR TECHNICIANS //</span>
          <h1>Our Expert Technicians</h1>
        </div>
        <div className="img-box">














          <div className="img-cont">
            <div className="img-box-1">
              <img src={team1} alt="" />
            </div>
            <div className="img-box-icon">
              <FaFacebookF/>
              < FaTwitter/>
              < FaInstagram/>
            </div>
            </div>
            <div className="img-box-text-1">
              <p>Full Name</p>
              <p>Designation</p>
            </div>
          













          <div className="img-box-2">
            <img src={team2} alt="" />
            <div className="img-box-2-text">
              <p>Full Name</p>
              <p>Designation</p>
            </div>
          </div>

          <div className="img-box-3">
            <img src={team3} alt="" />
            <div className="img-box-3-text">
              <p>Full Name</p>
              <p>Designation</p>
            </div>
          </div>

          <div className="img-box-4">
            <img src={team4} alt="" />
            <div className="img-box-4-text">
              <p>Full Name</p>
              <p>Designation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;

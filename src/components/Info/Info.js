import React from "react";
import "./Info.css";
import img from "../images/img.png";
import { MdArrowRightAlt } from "react-icons/md";
function Info() {
  return (
    <div className="info">
      <div className="left">
        <div className="img">
          <img src={img} alt="" />
          <div className="box">
            <div className="box-text">
              <p>
                <span>15</span>Years
              </p>
              <p>Experience</p>
            </div>
          </div>
        </div>
      </div>
      <div className="info-cont">
        <div className="info-top">
          <span>//About Us//</span>
          <br />
          <h2>
            <span>CarServ</span> Is The Best Place For Your
          </h2>
          <h2>Auto Care</h2>
          <p>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
        </div>
        <div className="info-bottom">
          <div className="block-1">
            <span>01</span>
            <div className="block-1-text">
              <h6>Professional & Expert</h6>
              <p>Diam dolor diam ipsum sit amet diam et eos</p>
            </div>
          </div>
          <div className="block-2">
            <span>02</span>
            <div className="block-2-text">
              <h6>Quality Servicing Center</h6>
              <p>Diam dolor diam ipsum sit amet diam et eos</p>
            </div>
          </div>
          <div className="block-2">
            <span>03</span>
            <div className="block-2-text">
              <h6>Awards Winning Workers</h6>
              <p>Diam dolor diam ipsum sit amet diam et eos</p>
            </div>
          </div>
          <button>
            Read More
            <MdArrowRightAlt />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Info;

import React from "react";
import "./History.css";
import { FaCarSide } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaOilCan } from "react-icons/fa";
import historimg from "../images/history.png";
import { FaCheck } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";
function History() {
  return (
    <div className="history">
      <div className="top">
        <span>// OUR SERVICES //</span>
        <h2>Explore Our Services</h2>
      </div>
      <div className="case">
        <div className="left">
          <div className="case-link">
            <FaCarSide />
            <h4>Diagnostic Test</h4>
          </div>

          <div className="case-link">
            <FaCar />
            <h4>Engine Servicing</h4>
          </div>

          <div className="case-link">
            <FaCog />
            <h4>Tires Replacement</h4>
          </div>

          <div className="case-link">
            <FaOilCan />
            <h4>Oil Changing</h4>
          </div>
        </div>
        <div className="img">
          <img src={historimg} alt="" />
        </div>

        <div className="history-text-case">
          <div className="history-text">
            <h4>15 Years Of Experience In Auto Servicing</h4>
            <p className="lorem">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </p>

            <div className="const">
              <FaCheck />
              <p>Quality Servicing</p>
            </div>

            <div className="const">
              <FaCheck />
              <p>Quality Servicing</p>
            </div>

            <div className="const">
              <FaCheck />
              <p>Quality Servicing</p>
            </div>

            <button>
            Read More
            <MdArrowRightAlt />
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;

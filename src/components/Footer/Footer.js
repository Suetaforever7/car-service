import React from "react";
import "./Footer.css";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaAngleRight } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="bg">
        <div className="container">
          <div className="box-1">
            <h1>Address</h1>
            <br />
            <p>
              <FaLocationDot />
              123 Street, New York, USA
            </p>
            <p>
              <IoIosCall />
              +012 345 67890
            </p>
            <p>
              <IoMdMail />
              info@example.com
            </p>
            <div className="icon-box">
              <FaTwitter />
              <FaFacebookF />
              <FaYoutube />
              <TiSocialLinkedin />
            </div>
          </div>

          <div className="box-2">
            <h1>Opening Hours</h1>
            <br />
            <div className="text-cont">
              <strong>Monday - Friday:</strong>
              <p>09.00 AM - 09.00 PM</p>
            </div>
            <div className="text-cont">
              <strong className="data">Saturday - Sunday:</strong>
              <p>09.00 AM - 12.00 PM</p>
            </div>
          </div>

          <div className="box-3">
            <h1>Services</h1>
            <br />
            <p>
              <FaAngleRight />
              Diagnostic Test
            </p>
            <p>
              <FaAngleRight />
              Engine Servicing
            </p>
            <p>
              <FaAngleRight />
              Tirus Replacment
            </p>
            <p>
              <FaAngleRight />
              Oil changing
            </p>
            <p>
              <FaAngleRight />
              Vacuam Cleaning
            </p>
          </div>

          <div className="box-4">
            <h1>Newsletter</h1>
            <br />
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div className="input-box">
              <input type="text" placeholder="Your Email" />
              <button>SIGNUP</button>
            </div>
          </div>
          <div className="bg-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

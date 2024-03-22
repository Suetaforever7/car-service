import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { HiChevronDown } from "react-icons/hi";
import Carusel from "../Carusel/Carusel"
import Info from "../Info/Info"
import About from "../About/About";
import Statistic from "../Statistic/Statistic";
import History from "../Work/History";
import Book from "../Book/Book"
import ClientCarusel from "../Carusel/ClientCarusel/ClientCarusel"
import Footer from "../Footer/Footer";
import "./Header.css";
function Header() {
  return (
    <>
    <div className="header-container">
      <div className="head-left">
        <span>
          <IoLocationSharp className="icon" /> 123 Street,NEW york,USA
        </span>
        <span>
          <FaRegClock className="icon" /> Mon - Fri : 09.00 AM - 09.00 PM
        </span>
      </div>
      <div className="head-right">
        <span>
          <FaPhoneAlt className="icon" /> +012 345 6789+012 345 6789
        </span>
        <div className="social-icon">
          <span>
            <FaFacebookF className="icon" />
          </span>
          <span>
            <FaTwitter className="icon" />
          </span>
          <span>
            <FaLinkedinIn className="icon" />
          </span>
          <span>
            <FaInstagram className="icon" />
          </span>
        </div>
      </div>
    </div>
    <div className="navigation">
      
      <div className="right">
      <FaCar />
      <span>CarServ</span>
      </div>
      <div className="left">
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>SERVICES</li>
          <li>PAGES
          <HiChevronDown />
          </li>
          <li>CONTACK</li>
          <li className="button">GET A QUOTE <FaArrowRight />
          </li>
        </ul>
      </div>
      </div>
      <Carusel/>
      <About/>
      <Info/>
      <Statistic/>
      <History/>
      <Book/>
<ClientCarusel/>
      <Footer/>

     
    </>
  );
}

export default Header;

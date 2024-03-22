import React from 'react'
import "./Statistic.css"
import foto from "../images/photo_2024-01-28_13-01-56.png"
import { FaCheck } from "react-icons/fa";
import { FaUsersCog } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
function Statistic() {
  return (
    <div className='statistic'>
        <div className='background'>
            <div className='flex-box'>
            
            <div className='box'>
            <FaCheck />
            <h1>1234</h1>
            <p>Years Experience</p>
            </div>

            <div className='box'>
            <FaUsersCog />
            <h1>1234</h1>
            <p>Expert Technicians</p>
            </div>

            <div className='box'>
            <FaUsers />
            <h1>1234</h1>
            <p>Satisfied Clients</p>
            </div>

            <div className='box'>
            <FaCar />
            <h1>1234</h1>
            <p>Compleate Projects</p>
            <div/>
            </div>
            </div>




            </div>
        </div>

  )
}

export default Statistic
import React from 'react';
import {
  FaBars,
  FaTimes,
  /* FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn, */
} from 'react-icons/fa';
import Logo from '../assets/sbry.png'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
          <img src={Logo} alt="Logo Image" style={{width: '50px'}} />
        </div>

{/* ----------- menu ------------  */}
        <div>
          <ul className='flex'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
        </div>

{/* -------- Hamburger menu ------- */}
        <div className='hidden'>
            <FaBars />
        </div>


{/* ---------- Mobile menu -------- */}      
         <ul className='hidden'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
          </ul>


{/* --------- Social icons -------- */}
          <div></div>
        
    </div>
  )
}

export default Navbar

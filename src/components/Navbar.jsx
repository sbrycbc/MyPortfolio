import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/sbry.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 text-xl">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "50px" }} />
      </div>

      {/* ----------- menu ------------  */}

      <ul className="hidden md:flex">
        <li className={`nav-link ${activeLink === "home" ? "active" : ""}`}>
          <Link to="home" smooth={true} duration={500} onClick={() => setActiveLink("home")}>
            Home
          </Link>
        </li>
        <li className={`nav-link ${activeLink === "about" ? "active" : ""}`}>
        <Link to="about" smooth={true} duration={500} onClick={() => setActiveLink("about")}>
            About
          </Link>
        </li>
        <li className={`nav-link ${activeLink === "skills" ? "active" : ""}`}>
          <Link to="skills" smooth={true} duration={500} onClick={() => setActiveLink("skills")}>
            Skills
          </Link>
        </li>
        <li className={`nav-link ${activeLink === "work" ? "active" : ""}`}>
          <Link to="work" smooth={true} duration={500} onClick={() => setActiveLink("work")}>
            Work
          </Link>
        </li>
        <li className={`nav-link ${activeLink === "contact" ? "active" : ""}`}>
          <Link to="contact" smooth={true} duration={500} onClick={() => setActiveLink("contact")}>
            Contact
          </Link>
        </li>
      </ul>

      {/* -------- Hamburger menu ------- */}

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* ---------- Mobile menu -------- */}

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
       <li className={`py-6 text-4xl ${activeLink === "home" ? "active" : ""}`}>
          <Link onClick={handleClick} to="home"  smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className={`py-6 text-4xl ${activeLink === "about" ? "active" : ""}`}>
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className={`py-6 text-4xl ${activeLink === "skills" ? "active" : ""}`}>
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className={`py-6 text-4xl ${activeLink === "work" ? "active" : ""}`}>
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className={`py-6 text-4xl ${activeLink === "contact" ? "active" : ""}`}>
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* --------- Social icons -------- */}

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 ">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/sabriye-cebeci-039772266/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/sbrycbc"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/">
          <Link className="flex justify-between items-center w-full text-gray-300"
           to="contact" >Email <HiOutlineMail size={30} /></Link>        
              
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
          <Link className="flex justify-between items-center w-full text-gray-300"
           to="skills" >Skills <BsFillPersonLinesFill size={30} /></Link>        
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

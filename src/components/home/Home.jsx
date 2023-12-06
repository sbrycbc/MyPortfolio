import React, { useState } from "react";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from 'react-icons/hi';
import Works from '../works/Works'
import "./home.css";

const Home = () => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  return (
    <div name='home' className='h-screen home-container'>

        {/* ----------- Container ------------  */}

        <div className='max-w-[1000px] mx-auto px-2 flex flex-col justify-center hi-container'>
            <p className='text-[#6fc2b0] text-xl font-bold font-[Libre]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-5xl font-bold text-[#8892b0]'>Sabriye Cebeci</h1>
            <h4 className='text-5xl sm:text-6xl font-bold text-[#8892b0]'>I'm a Full Stack Developer.</h4>
            <p className='text-[#6fc2b0] text-l font-bold py-4 max-w-[700px]'>I am a mother :) a wife 💜️ a runner 🏃‍♂️ a cat lover 🐈‍⬛ with a big sense of humor ☕. Always willing to learn and open to innovations 🌏. Excited about working on ambitious projects 🎗 with positive people. For more info, feel free to contact me🍀🎶🍀</p>
            <div>
            <Link to="work" smooth={true} duration={500} onClick={() => setActiveLink("work")}>
            <button className='text-white group border-2 border-[#8892b0] px-5 py-4 my-3 flex item-center hover:bg-[#6fc2b0] hover:border-[#6fc2b0] hover:rounded-[40px]'>            
              View Work
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 my-1' />
                </span>
                  </button>
                  </Link>
            </div>

        </div>
        <Works/>
    </div>
  )
}

export default Home;
import React, { useState } from "react";
import { work } from "../../data/work.js";
import { FaCode } from "react-icons/fa6";
import { GiEyeTarget } from "react-icons/gi";
import "./work.css";

const Work = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const projects = work;

  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-3">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-300">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* Container for projects */}
        <div className="grid sm:grid-cols-1 md:grid-cols-7 gap-6">
          {projects.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="relative shadow-lg shadow-[#7699c9] group rounded-md content-div "
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Hover effect for images */}
              {hoveredIndex === index && (
                <div className="absolute inset-1 flex flex-col justify-center items-center">
                  <span className="mx-5 text-xl font-bold text-white tracking-wider">
                    {item.name}
                  </span>
                  <div className="pt-9">
                    <div className="flex flex-col-reverse">
                      {/* Render the "Code" button regardless of live availability */}
                      <a href={item.github} target="_blank">
                        <button className="work-button text-center  rounded-full px-5 py-1 m-1 bg-white ">
                        <FaCode size={22} />
                        </button>
                      </a>
                      {/* Render the "Live" button if the 'live' URL exists */}
                      {item.live && (
                        <a href={item.live} target="_blank">
                          <button className="work-button text-center rounded-full px-5 py-1 m-1 bg-white">
                          <GiEyeTarget size={22}/>
                          </button>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

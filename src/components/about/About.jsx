import React from "react";
import ProfilePhoto from "../../assets/projects/sbry.jpg";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-2">
            <p className="text-4xl font-bold inline border-b-4 border-pink-300">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-2">
          <div>
            <p className="text-4xl font-bold mt-11">
              Hi! I'm Sabriye,<br /> nice to meet you. Please take a look around.
            </p>
            <p className=" text-[#8892b0] text-xl mt-11">
              {" "}
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?
            </p>
          </div>
          <img
        
            width={350}
            height={350}
            className=" shadow-xl shadow-[#698cbe] rounded-full ml-14 sm:block md:w-[400px] md:h-[350px] lg:w-[375px] lg:h-[500px]"
            alt="Sabriye Cebeci"
            style={{ objectFit: "contain" }}
            src={ProfilePhoto} />
        </div>
      </div>
    </div>
  );
};

export default About;

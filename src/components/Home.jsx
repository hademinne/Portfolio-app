import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import img from "../assets/img.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="flex items-center">
          {" "}
          {/* Wrap the img and text inside a flex container */}
          <img className="w-20 h-20 rounded-full mr-4 " src={img} alt="" />
          <p className="text-pink-600">Hi, my name is</p>
        </div>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Hademinne Abdenne
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a React Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I’m a React developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive front-end web applications.
        </p>
        <div>
          {" "}
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

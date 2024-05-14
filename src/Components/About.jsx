import React from "react";
import file from "../assets/profile2.jpg";
import resume from "../assets/AMIT-FULL STACK RESUME.pdf";

const About = () => {
  return (
    <div
      id="About"
      className="lg:px-56 w-full px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center"
    >
      <img
        data-aos="fade-down"
        src={file}
        className="rounded-full bg-contain bg-center border-2 h-96 w-96 p-1 border-fuchsia-500 img_glow"
        alt="Profile"
      />
      <div className="h-full lg:py-48 flex flex-col justify-center lg:items-start items-center text-white">
        <h1
          data-aos="fade-right"
          className="text-[52px] font-semibold mb-8 leading-normal font-saas uppercase text-fuchsia-500"
        >
          About me
        </h1>
        <p data-aos="fade-left" className="font-sans">
          As a MERN Stack Developer fresher, I'm adept at MongoDB, Express.js,
          React, and Node.js,
          <br /> eager to delve into Full-Stack Web Development. Proficient in
          JavaScript, I aim to build
          <br /> dynamic, responsive web applications, mastering front-end
          frameworks and back-end <br />
          technologies. With a passion for learning and problem-solving, I'm
          committed to honing
          <br /> my skills and contributing to innovative projects in the
          industry.
        </p>
        <div className="flex mt-4   sm:-ml-4">
          <div className="flex justify-center items-center">
            <div className="flex space-x-2 p-4">
              <a href={resume} download="Amit Dhadange Resume">
                <button className="neno-button hover:scale-105 transition-all ease-out duration-200 shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden tracking-widest">
                  Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

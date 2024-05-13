import React, { useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { SiNetlify } from "react-icons/si";
import file from "../assets/Profile.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
      <div className="h-full lg:py-56 flex flex-col justify-center lg:items-start items-center text-white">
        <h1
          data-aos="fade-right"
          className="text-xl font-semibold mb-8 leading-normal font-serif "
        >
          Hello, it's Me <br />
          <span className="text-3xl uppercase  text-fuchsia-500 t_glow mt-2 tracking-widest cursor-pointer">
            Amit Dhadange{" "}
          </span>
          <br />
          <h4 className="text-lg font-semibold mb-8 leading-normal font-serif  ">
            And I'm a 
            <span className="text-fuchsia-500 tracking-widest text-xl uppercase">
               MERN STACK DEVELOPER
            </span>
          </h4>
        </h1>
        <p data-aos="fade-left" className="font-sans text-xl">
          Hello! I'm a beginner MERN Stack developer building my portfolio
          website. Excited to display projects and skills in MongoDB,
          Express.js, React.js, and Node.js. Let's connect and grow together !
        </p>
        <div className="flex mt-28 gap-2 ml-8 sm:-ml-4">
          <div className="flex justify-center items-center">
            <div className="flex space-x-4">
              <a
                href="https://github.com/Amitdhadange?tab=repositories"
                target="_blank"
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <AiFillGithub className="text-4xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/amit-dhadange-8784992a3/"
                target="_blank"
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <FaLinkedinIn className="text-4xl" />
              </a>
              <a
                href="https://app.netlify.com/teams/amitdhadange/sites"
                target="_blank"
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <SiNetlify className="text-4xl" />
              </a>
              <a
                href="https://wa.link/ofa3ou"
                target="_blank"
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <FaWhatsapp className="text-4xl" />
              </a>
              <a
                href="mailto:Amitdhadange71@gmail.com"
                target="_blank"
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <BiLogoGmail className="text-4xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        data-aos="fade-up"
        src={file}
        // width={400}
        // height={300}
        className="rounded-full border-2 w-full h-[80vh] p-1 border-fuchsia-500 img_glow"
        alt="Profile"
      />
    </div>
  );
};

export default Banner;

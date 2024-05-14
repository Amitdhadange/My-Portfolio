import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-slate-800 w-full text-white lg:px-48 px-4 py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="mb-4 md:mb-0">
          <span className="text-3xl font-semibold text-fuchsia-800 py-2 uppercase mb-2">
            Location
          </span>
          <p className="text-[16px] my-4 font-medium">Bhopal,Madhya pradesh</p>
          <p className="font-extralight">
            Copyright ©2024 All rights reserved
          </p>
        </div>
        
        
        <div>
          <h2 className="text-3xl font-semibold text-fuchsia-800 py-2 uppercase mb-2">
            Follow Me
          </h2>
          <div className="flex space-x-4 ">
            <a
              className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out text-4xl "
              target="_blank"
              href="https://github.com/Amitdhadange?tab=repositories"
            >
              <FaGithub />
            </a>
            <a
              className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out text-4xl "
              target="_blank"
              href="https://www.linkedin.com/in/amit-dhadange-8784992a3/"
            >
              <FaLinkedinIn />
            </a>
            <a
              className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out text-4xl "
              target="_blank"
              href="https://wa.link/ofa3ou"
            >
              <FaWhatsapp />
            </a>
            <a
              className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out text-4xl "
              target="_blank"
              href="https://www.instagram.com/amitdhadange71/"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
          <div className="mb-4 md:mb-0">
          <h2 className="text-3xl font-semibold text-fuchsia-800 py-2 uppercase mb-2">
            Contact
          </h2>
          <p className="text-[16px] font-medium">
            Email:- Amitdhadange71@gmail.com
          </p>
          <p className="text-[16px] font-medium">
            Contact:- +91-8962224031 , 8788902366
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

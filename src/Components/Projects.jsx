import React, { useEffect } from "react";
import img2 from "../assets/Projects/img2.png";
import img3 from "../assets/Projects/img3.png";
import img4 from "../assets/Projects/img4.png";
import img5 from "../assets/Projects/img5.png";
import vi from "../assets/foodii.mp4";
import Aos from "aos";
const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div
      id="Projects"
      className="p-20 flex flex-col items-center justify-center"
    >
      <h1
        data-aos="fade-right"
        className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-800"
      >
        Project
      </h1>
      <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 justify-around gap-10">
        <a
          href="https://github.com/Amitdhadange/Foodii"
          target="_blank"
          className=" hover:scale-105 transition-all ease-out duration-200"
        >
          <video
            data-aos="fade-up"
            width={300}
            height={250}
            controls
            className="p-1 h-56 flex  items-center justify-center rounded-3xl border-2 border-fuchsia-800 b_glow"
            src={vi}
            alt="Logo"
          />
        </a>
        <a
          href="https://generagames.netlify.app/"
          target="_blank"
          className=" hover:scale-105 transition-all ease-out duration-200"
        >
          <img
            data-aos="fade-down"
            width={300}
            height={250}
            className="p-1 h-56 flex  items-center justify-center  rounded-3xl border-2 border-fuchsia-800 b_glow"
            src={img2}
            alt="Logo"
          />
        </a>
        <a
          href="https://serumface.netlify.app"
          target="_blank"
          className=" hover:scale-105 transition-all ease-out duration-200"
        >
          <img
            data-aos="fade-up"
            width={300}
            height={250}
            className="p-1 h-56 flex  items-center justify-center  rounded-3xl border-2 border-fuchsia-800 b_glow"
            src={img3}
            alt="Logo"
          />
        </a>
        <a
          href="https://trabo.netlify.app"
          target="_blank"
          className=" hover:scale-105 transition-all ease-out duration-200"
        >
          <img
            data-aos="fade-down"
            width={300}
            height={250}
            className="p-1 h-56 flex  items-center justify-center  rounded-3xl border-2 border-fuchsia-800 b_glow"
            src={img4}
            alt="Logo"
          />
        </a>
        <a
          href="https://login-animatepage.netlify.app"
          target="_blank"
          className=" hover:scale-105 transition-all ease-out duration-200"
        >
          <img
            data-aos="fade-up"
            width={300}
            height={250}
            className="p-1 h-56 flex  items-center justify-center  rounded-3xl border-2 border-fuchsia-800 b_glow"
            src={img5}
            alt="Logo"
          />
        </a>
      </div>
      <div className="mt-24 hover:scale-105 transition-all ease-out duration-200">
        <a
          href="https://github.com/Amitdhadange?tab=repositories"
          target="_blank"
        >
          <button className="neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden tracking-widest ">
            More Projects
          </button>
        </a>
      </div>
    </div>
  );
};
export default Projects;

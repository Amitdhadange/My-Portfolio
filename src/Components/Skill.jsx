import Aos from "aos";
import React, { useEffect } from "react";
import {
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoReact,
} from "react-icons/io5";
import {
  SiExpress,
  SiExpressvpn,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div
      id="Services"
      className="p-20 flex flex-col w-full items-center justify-center"
    >
      <h1
        data-aos="fade-right"
        className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-800"
      >
        Skill
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20">
        <h2
          data-aos="fade-up"
          className="text-2xl flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow hover:border-fuchsia-400 hover:text-fuchsia-400 cursor-pointer"
        >
          <IoLogoHtml5 className="text-3xl" />
          html5
        </h2>
        <h2
          data-aos="fade-down"
          className="text-2xl flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow hover:border-fuchsia-400 hover:text-fuchsia-400 cursor-pointer"
        >
          <IoLogoCss3 className="text-3xl" /> Css3
        </h2>
        <h2
          data-aos="fade-right"
          className="text-2xl flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow hover:border-fuchsia-400 hover:text-fuchsia-400 cursor-pointer"
        >
          <IoLogoJavascript className="text-3xl" /> Javascript.js
        </h2>
        <h2
          data-aos="fade-left"
          className="text-2xl flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow hover:border-fuchsia-400 hover:text-fuchsia-400 cursor-pointer"
        >
          <IoLogoReact className="text-3xl" /> React.js
        </h2>
        <h2
          data-aos="fade-up"
          className="text-2xl flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow hover:border-fuchsia-400 hover:text-fuchsia-400 cursor-pointer"
        >
          <SiTailwindcss className="text-3xl" /> Tailwind.css
        </h2>
        <h2
          data-aos="fade-down"
          className="text-2xl flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow hover:border-fuchsia-400 hover:text-fuchsia-400 cursor-pointer"
        >
          <IoLogoNodejs className="text-3xl" /> Node.js
        </h2>
        <h2
          data-aos="fade-right"
          className="text-2xl flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow hover:border-fuchsia-400 hover:text-fuchsia-400 cursor-pointer"
        >
          <SiExpress className="text-3xl" /> Express.js
        </h2>
        <h2
          data-aos="fade-left"
          className="text-2xl flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow hover:border-fuchsia-400 hover:text-fuchsia-400 cursor-pointer"
        >
          <SiMongodb className="text-3xl" /> Mongodb
        </h2>
      </div>
    </div>
  );
};

export default Services;

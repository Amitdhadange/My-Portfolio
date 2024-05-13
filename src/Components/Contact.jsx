import Aos from "aos";
import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify';

const Contect = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_95rue8t", "template_mp5mbij", form.current, {
        publicKey: "2fdbPlONn3RwlP_PA",
      })
      .then(
        () => {
          toast.success('Mail Successfull Send ', {
            position: "top-right",
            autoClose: 4000,
            theme: "dark",
            });
          console.log("SUCCESS!");
          
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div
      id="Contact"
      className="p-4 lg:p-20 w-full flex flex-col items-center justify-center "
    >
      <h1
        data-aos="fade-right"
        className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-800"
      >
        Contact Me
      </h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-2 lg:w-1/2"
      >
        <div className="lg:flex gap-9 ">
          <input
            name="user_name"
            className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow text-xl text-slate-500"
            placeholder="Enter your Name"
            type="text"
          />
          <input
            name="user_email"
            className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow text-xl text-slate-500"
            placeholder="Enter your Email"
            type="text"
          />
        </div>
        <textarea
          name="message"
          className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b-glow text-xl text-slate-500"
          placeholder="Write your Massage..."
          cols="20"
          rows="10"
        ></textarea>
        <button
          value="Send"
          className="nono-button shadow-xl hover:scale-105 transition-all ease-out duration-200hover:shadow-fuchsia-800/50 text-white border-2 border-fuchsia-800 hover:bg-fuchsia-800 bg-slate-900 rounded-lg py-4 px-8 my-6 uppercase relative overflow-hidden b_glow text-xl text-bold mb-10 tracking-widest"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contect;
